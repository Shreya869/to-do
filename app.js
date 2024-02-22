document.addEventListener('DOMContentLoaded', function () {
    const plannerBtn = document.querySelector('.planner-btn');
    const todoBtn = document.querySelector('.todo-btn');
    const plannerSection = document.querySelector('.planner-section');
    const todoSection = document.querySelector('.todo-section');

    // Add event listeners to toggle sections
    plannerBtn.addEventListener('click', function () {
        plannerSection.classList.remove('hidden');
        todoSection.classList.add('hidden');
    });

    todoBtn.addEventListener('click', function () {
        todoSection.classList.remove('hidden');
        plannerSection.classList.add('hidden');
    });

    // Add functionality for planner section
    const plannerTextarea = plannerSection.querySelector('textarea');
    const boldButton = plannerSection.querySelector('.bold-btn');
    const italicButton = plannerSection.querySelector('.italic-btn');
    const underlineButton = plannerSection.querySelector('.underline-btn');
    const fontSizeSelect = plannerSection.querySelector('.font-size-select');
    const fontColorSelect = plannerSection.querySelector('.font-color-select');
    const headerSelect = plannerSection.querySelector('.header-select');
    const writeButton = plannerSection.querySelector('.write-btn');

    boldButton.addEventListener('click', function () {
        document.execCommand('bold', false, null);
    });

    italicButton.addEventListener('click', function () {
        document.execCommand('italic', false,
    });

    underlineButton.addEventListener('click', function () {
        document.execCommand('underline', false, null);
    });

    fontSizeSelect.addEventListener('change', function () {
        document.execCommand('fontSize', false, this.value);
    });

    fontColorSelect.addEventListener('change', function () {
        document.execCommand('foreColor', false, this.value);
    });

    headerSelect.addEventListener('change', function () {
        document.execCommand('formatBlock', false, this.value);
    });

    writeButton.addEventListener('click', function () {
        plannerTextarea.focus();
    });

    // Add functionality for to-do list section
    const todoList = document.querySelector('.todo-list');
    const todoInput = document.querySelector('.todo-input');
    const addTodoBtn = document.querySelector('.add-todo-btn');

    function createTodoItem(todoText) {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('todo-checkbox');
        todoItem.appendChild(checkbox);

        const todoTextSpan = document.createElement('span');
        todoTextSpan.innerText = todoText;
        todoItem.appendChild(todoTextSpan);

        const editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';
        editBtn.classList.add('edit-btn');
        todoItem.appendChild(editBtn);

        const removeBtn = document.createElement('button');
        removeBtn.innerText = 'Remove';
        removeBtn.classList.add('remove-btn');
        todoItem.appendChild(removeBtn);

        todoList.appendChild(todoItem);

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                todoTextSpan.style.textDecoration = 'line-through';
            } else {
                todoTextSpan.style.textDecoration = 'none';
            }
        });

        editBtn.addEventListener('click', function () {
            const newText = prompt('Enter new text:');
            if (newText !== null) {
                todoTextSpan.innerText = newText;
            }
        });

        removeBtn.addEventListener('click', function () {
            todoList.removeChild(todoItem);
        });
    }

    addTodoBtn.addEventListener('click', function () {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            createTodoItem(todoText);
            todoInput.value = '';
        }
    });
});
