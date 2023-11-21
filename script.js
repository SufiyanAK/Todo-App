const todoTask = JSON.parse(localStorage.getItem('todoTask')) || [];

function renderTodoList() {
    let todoTaskHTML = '';
    todoTask.forEach((value, index)=> {
        const {task} = value;
        todoTaskHTML += 
        `
        <div>
            <p class="task-type">${task}</p>
            <div class="btns">
                <p class="btn edit-btn"><i class="bi bi-exposure"></i></p>
                <p class="btn delete-btn" onclick="deleteTodo(${index})"><i class="bi bi-trash"></i></p>
            </div>
        </div>
        `;
    })
    document.querySelector('.render-task').innerHTML = todoTaskHTML;
}

const task =  document.querySelector('#todo-task');

const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', () => {
    addTask(task);
    saveToStorage();
});

task.addEventListener('keydown', (event) => {
    if(event.code === 'Enter') {
        addTask();
    }
})

function addTask() {
    let value = task.value;

    if (value.trim() === '') {
        return;
    }

    todoTask.push({value});

    task.value = '';

    renderTodoList();

    saveToStorage();
}

function deleteTodo(index) {
    todoTask.splice(index, 1);
    renderTodoList();
}

function saveToStorage() {
    localStorage.setItem('todoTask',JSON.stringify(todoTask));
}

renderTodoList();