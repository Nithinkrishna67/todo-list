let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
      
      function renderTodoList() {
        let todoListHtml = '';
      for (let i = 0; i < todoList.length; i++) {
        let todoObject = todoList[i];
        const { name, dueDate } = todoObject;
        const html = `<div>${name}</div>
          <div>${dueDate}</div>
          <button onclick="
          todoList.splice(${i}, 1);
          localStorage.setItem('todoList', JSON.stringify(todoList));
          renderTodoList();
        " class="Delete-button">Delete</button>`
        todoListHtml += html;
      }

      document.querySelector('.js-todo-list').innerHTML = todoListHtml;
    }
      function todoFunction() {
      let inputButton = document.querySelector('.todo-list');
      let name = inputButton.value.trim();
      let inputDataElement = document.querySelector('.js-date');
      let dueDate = inputDataElement.value;
      todoList.push({
        name,
        dueDate
      });
      
      renderTodoList();
      inputButton.value = '';
      inputDataElement.value = '';

      localStorage.setItem('todoList', JSON.stringify(todoList));
      }
      renderTodoList();
