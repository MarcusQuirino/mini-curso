let slideAtual = 0
const slides = document.querySelectorAll('.slide')

function mudarSlide(direcao) {
  slideAtual += direcao
  if (slideAtual < 0) slideAtual = slides.length - 1
  if (slideAtual >= slides.length) slideAtual = 0
  atualizarSlides()
}

function atualizarSlides() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - slideAtual)}%)`
  })
}

function mudarCorSlide() {
  const corAleatoria = '#' + Math.floor(Math.random() * 16777215).toString(16)
  slides[slideAtual].style.backgroundColor = corAleatoria
}

// Inicializar os slides
document.addEventListener('DOMContentLoaded', () => {
  atualizarSlides()
})
