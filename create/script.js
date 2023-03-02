let addButton = document.querySelector('.add-btn')

const tasks = []

document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault()

    addTask()
})


function addTask() {
    let title = document.querySelector('.task-title')
    let description = document.querySelector('.description')
    let date = document.querySelector('.date')
    let time = document.querySelector('.time')

    if (title !== '' && description !== '' && date !== '' && time !== '') {
        const task = {
            id: new Date().getUTCMilliseconds(),
            title: title.value,
            description: description.value,
            date: date.value,
            time: time.value,
            completed: false,
        }
        localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), task]));
    } else {
        alert('Please Fill The Iuputs')
    }

    const li = document.createElement('li')
    li.innerHTML = '<h1>I am Here</h1>'

    title.value = '';
    description.value = '';
    date.value = '';
    time.value = '';
}

function completeTask(ele) {
    let tasks = Array.from(JSON.parse(localStorage.getItem('tasks')))

    tasks.forEach(task => {
        if(task.id == ele.id){
            task.completed = !task.completed
        }
    })
    localStorage.setItem("tasks", JSON.stringify(tasks));
    event.nextElementSibling.classList.toggle("completed");
}   

function deleteTask(ele) {
    let tasks = Array.from(JSON.parse(localStorage.getItem('tasks')))

    tasks.forEach(task => {
        if(task.id == ele.Id){
            tasks.splice(tasks.indexOf(task, 1))
        }
    })
    localStorage.setItem("tasks", JSON.stringify(tasks));
    ele.parentElement.remove()
}
