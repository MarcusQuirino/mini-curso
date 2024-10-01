function addTask() {
  const taskInput = document.getElementById('taskInput')
  const taskList = document.getElementById('taskList')

  if (taskInput.value.trim() !== '') {
    const li = document.createElement('li')
    li.innerHTML = `
            ${taskInput.value}
            <button onclick="toggleComplete(this.parentElement)">Complete</button>
            <button onclick="removeTask(this.parentElement)">Remove</button>
        `
    taskList.appendChild(li)
    taskInput.value = ''
  }
}

function toggleComplete(task) {
  task.classList.toggle('completed')
}

function removeTask(task) {
  task.remove()
}
