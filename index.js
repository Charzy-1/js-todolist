// Create and empty array to store todos
  const myTodo = [];
  
  function addButton() {
  // Get hold of the todos from the user
  const inputElement = document.querySelector('.inputBox');
  const todoText = inputElement.value;

  myTodo.push(todoText);

  // Push the user input into the empty array
  console.log(myTodo);

  // Clear the textbox after adding the todo
  inputElement.value = '';
}