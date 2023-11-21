const todoTask = JSON.parse(localStorage.getItem('todoTask')) || [];

function renderTodoList() {
    let todoTaskHTML = '';
    todoTask.forEach((value, index)=> {
        const {task} = value;
        todoTaskHTML += 
        `
        <div>
            <input readonly class="task-type" data-index="${index}" value="${task}">
            <div class="btns">
                <p class="btn edit-btn"><i class="bi bi-exposure"></i></p>
                <p class="btn delete-btn" onclick="deleteTodo(${index})"><i class="bi bi-trash"></i></p>
            </div>
        </div>
        `;
        });
    document.querySelector('.render-task').innerHTML = todoTaskHTML;
}

const input =  document.querySelector('#todo-task');

function addTask() {
    let task = input.value;

    if (task.trim() === '') {
        return;
    }

    todoTask.push({task});

    input.value = '';

    renderTodoList();

    saveToStorage();
}

function deleteTodo(index) {
    todoTask.splice(index, 1);
    renderTodoList();
}

function editTask () {

}

function saveToStorage() {
    localStorage.setItem('todoTask',JSON.stringify(todoTask));
}

renderTodoList();

const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', () => {
    addTask();
    saveToStorage();
});

input.addEventListener('keydown', (event) => {
    if(event.code === 'Enter') {
        addTask();
    }
})