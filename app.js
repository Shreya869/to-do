document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.querySelector('.add-btn');
    const inputField = document.querySelector('.todo-input');
    const taskList = document.querySelector('.tasks');

    let todos = [];

    function renderTasks() {
        taskList.innerHTML = '';
        todos.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.classList.add('task-item');
            taskItem.innerText = task;
            taskList.appendChild(taskItem);
        });
    }

    function addTask() {
        const taskText = inputField.value.trim();
        if (taskText !== '') {
            todos.push(taskText);
            renderTasks();
            inputField.value = '';
        }
    }

    addButton.addEventListener('click', addTask);
    inputField.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
