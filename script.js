const todoTask = JSON.parse(localStorage.getItem('todoTask')) || [];

let todoTaskHTML = '';

todoTask.forEach(value => {
    todoTaskHTML += 
    `
    <p class="task-type">${value}</p>
    <div class="btns">
        <p class="btn edit-btn"><i class="bi bi-exposure"></i></p>
        <p class="btn delete-btn"><i class="bi bi-trash"></i></p>
    </div>
    `;
})

document.querySelector('.render-task').innerHTML = todoTaskHTML;

const task =  document.querySelector('#todo-task');

const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', () => {
    addTask(task);
    saveToStorage();
});

const editBtn = document.querySelector('.edit-btn');
editBtn.addEventListener('click', () => {
    console.log('edit Btn')
})

const deleteBtn = document.querySelector('.delete-btn');
deleteBtn.addEventListener('click', () => {
    console.log('delete Btn')
})

task.addEventListener('keydown', (event) => {
    if(event.code === 'Enter') {
        addTask(task);
        saveToStorage();
        console.log(event);
    }
})


function addTask(task) {
    task = task.value;
    todoTask.push(task);
    console.log(todoTask);
}

function saveToStorage() {
    localStorage.setItem('todoTask',JSON.stringify(todoTask));
}