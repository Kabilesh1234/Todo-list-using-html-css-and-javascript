 const todoInput = document.getElementById('todoInput');
        const addButton = document.getElementById('addButton');
        const todoList = document.getElementById('todoList');

        function addTodo() {
            const todoText = todoInput.value.trim();

            if (todoText !== '') {
                const todoItem = document.createElement('li');
                todoItem.innerHTML = `<span>${todoText}</span>`;

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.classList.add('delete-btn'); 
                deleteButton.addEventListener('click', () => {
                    todoItem.remove();
                });

                todoItem.appendChild(deleteButton);

                todoList.appendChild(todoItem);

                todoInput.value = '';
            }
        }

        addButton.addEventListener('click', addTodo);

        todoInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                addTodo();
            }
        });
