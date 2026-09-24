// Create and empty array to store todos
const myTodo = [];

function renderTodoList() {
  let todoListHtml = '';

  // LOOP TRHOUGH THE ARRAY USING FOR LOOP
  for (let i = 0; i < myTodo.length; i++) {
    const todo = myTodo[i];

    // CREATE SOME HTML CODE FOR EACH TODO
    const html = 
    `<p>
      ${todo}
      <button onclick='
        myTodo.splice(${i}, 1);
        renderTodoList();
      '>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6l-1 14H6L5 6"></path>
          <path d="M10 11v6"></path>
          <path d="M14 11v6"></path>
          <path d="M9 6V4h6v2"></path>
        </svg>
      </button>
    </p>`;
    todoListHtml = todoListHtml + html;
  }

  console.log(todoListHtml)

  // put the html on the webpage
  document.querySelector('.js-todos')
    .innerHTML = todoListHtml;
}

function addButton() {
  // Get hold of the todos from the user
  const inputElement = document.querySelector('.inputBox');
  const todoText = inputElement.value;

  myTodo.push(todoText);

  // Clear the textbox after adding the todo
  inputElement.value = '';

  renderTodoList()
}

// FUNTION TO ADD THE MY TODOLIST ON THE PAGE WHEN THE ENTER BUTTON IS PRESSED
function renderTodoWithEnterKey(event) {
  if (event.key === 'Enter') {
    addButton()
  }
}