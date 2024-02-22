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
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('checkbox');
            checkbox.addEventListener('change', () => toggleTask(index, checkbox.checked));
            
            const taskText = document.createElement('span');
            taskText.classList.add('task-text');
            taskText.innerText = task;
            
            taskItem.appendChild(checkbox);
            taskItem.appendChild(taskText);
            
            taskList.appendChild(taskItem);
        });
    }

    function addTask() {
        const taskText = inputField.value.trim();
        if (taskText !== '') {
            todos.push({ text: taskText, done: false });
            renderTasks();
            inputField.value = '';
        }
    }

    function toggleTask(index, checked) {
        todos[index].done = checked;
        renderTasks();
    }

    if (addButton) {
        addButton.addEventListener('click', addTask);
    } else {
        console.error('Add button not found!');
    }

    inputField.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    renderTasks();
});
