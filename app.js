document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.querySelector('.add-btn');
    const inputField = document.querySelector('.todo-input');
    const taskList = document.querySelector('.tasks');

    let todos = [];

    function renderTasks() {
        taskList.innerHTML = '';
        todos.forEach((todo, index) => {
            const taskItem = document.createElement('li');
            taskItem.classList.add('task-item');
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('checkbox');
            checkbox.checked = todo.done;
            checkbox.addEventListener('change', () => toggleTask(index, checkbox.checked));
            
            const taskText = document.createElement('span');
            taskText.classList.add('task-text');
            taskText.innerText = todo.text;
            
            const editButton = document.createElement('button');
            editButton.innerText = 'Edit';
            editButton.classList.add('edit-btn');
            editButton.addEventListener('click', () => editTask(index, taskText));
            
            const removeButton = document.createElement('button');
            removeButton.innerText = 'Remove';
            removeButton.classList.add('remove-btn');
            removeButton.addEventListener('click', () => removeTask(index));

            taskItem.appendChild(checkbox);
            taskItem.appendChild(taskText);
            taskItem.appendChild(editButton);
            taskItem.appendChild(removeButton);
            
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

    function editTask(index, taskTextElement) {
        const newTaskText = prompt('Edit the task:', todos[index].text);
        if (newTaskText !== null)
