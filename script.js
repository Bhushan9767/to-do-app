// script.js

document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const categorySelect = document.getElementById('category-select');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item', categorySelect.value);
        taskItem.innerHTML = `
            <span>${taskInput.value}</span>
            <button class="delete-button">Delete</button>
        `;

        taskItem.querySelector('.delete-button').addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskList.appendChild(taskItem);

        taskInput.value = '';
    }
}
