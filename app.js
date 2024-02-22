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
            
            const taskText = document.createElement('span');
            taskText.innerText = task;
            
            const editButton = document.createElement('button');
            editButton.innerText = 'Edit';
            editButton.classList.add('edit-btn');
            editButton.addEventListener('click', () => editTask(index, taskText));
            
            const removeButton = document.createElement('button');
            removeButton.innerText = 'Remove';
            removeButton.classList.add('remove-btn');
            removeButton.addEventListener('click', () => removeTask(index));

            taskItem.appendChild(taskText);
            taskItem.appendChild(editButton);
            taskItem.appendChild(removeButton);
            
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

    function editTask(index, taskTextElement) {
        const newTaskText = prompt('Edit the task:', todos[index]);
        if (newTaskText !== null) {
            todos[index] = newTaskText.trim();
            renderTasks();
        }
    }

    function removeTask(index) {
        if (confirm('Are you sure you want to remove this task?')) {
            todos.splice(index, 1);
            renderTasks();
        }
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
