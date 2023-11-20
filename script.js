const todoTask = JSON.parse(localStorage.getItem('todoTask')) || [];

const task =  document.querySelector('#todo-task');

const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', () => {
    addTask(task);
    saveToStorage();
});

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