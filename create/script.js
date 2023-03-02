window.onload = loadTasks;

const tasks = []

document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault()

    addTask()
})


function loadTasks() {
    
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    
    tasks.forEach(task => {
        const elementContainer = document.querySelector('.tasks-container')
        const item = document.createElement('div')
        item.classList = 'task'
        item.id = task.id
        if(task.completed){
            item.classList.add('completed')
        }

        item.innerHTML = `
            <div class="top">
                <p class="task-title">${task.title}</p>
                <div>
                    <time class="task-time">${task.date}/</time>
                    <time class="task-time">${task.time}</time>
                </div>
            </div>
            <div class="bottom">
                <P class="task-desc">${task.description}</P>
                <div class="icons">
                    <button class="delete" onclick='deleteTask(this)' ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"/></svg></button>
                    <input type="checkbox" onclick='completeTask(this)' ${task.completed ? 'checked ' : ''} />
                </div>
            </div>
    `
    elementContainer.appendChild(item)
    })
}

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

    title.value = '';
    description.value = '';
    date.value = '';
    time.value = '';
}

function completeTask(ele) {
    let tasks = Array.from(JSON.parse(localStorage.getItem('tasks')))

    tasks.forEach(task => {
        if (task.id == ele.closest('.task').id) {
            task.completed = !task.completed
            console.log(task.completed);
            ele.closest('.task').classList.toggle("completed");
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    })
}

function deleteTask(ele) {
    let tasks = Array.from(JSON.parse(localStorage.getItem('tasks')))

    tasks.forEach(task => {
        if (task.id == ele.closest('.task').id) {

            tasks.splice(tasks.indexOf(task),1)
            ele.closest('.task').remove()
        }
    })
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
