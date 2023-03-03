let allTasks = document.querySelector('.total-tasks')
let doneTasks = document.querySelector('.completed-tasks')
let undoTasks = document.querySelector('.uncompleted-tasks')

function totalTasks() {
    let tasks = Array.from(JSON.parse(localStorage.getItem('tasks')))
    allTasks.textContent = `All Tasks: ${tasks.length} `
}
totalTasks()

function completedTasks() {
    let tasks = Array.from(JSON.parse(localStorage.getItem('tasks')))

    doneTasks.textContent = `Completed Tasks: ${tasks.filter(task => task.completed).length} `
}
completedTasks()

function unCompletedTasks() {
    let tasks = Array.from(JSON.parse(localStorage.getItem('tasks')))

    undoTasks.textContent = `Uncompleted Tasks: ${tasks.filter(task => !task.completed).length} `
}
unCompletedTasks()