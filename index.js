// Create and empty array to store todos
const myTodo = [''];

function renderTodoList() {
  let todoListHtml = '';

  // LOOP TRHOUGH THE ARRAY USING FOR LOOP
  for (let i = 0; i < myTodo.length; i++) {
    const todo = myTodo[i];
    // CREATE SOME HTML CODE FOR EACH TODO
    const html = `<p>${todo}</p>`;
    todoListHtml = todoListHtml + html;
  }

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