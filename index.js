import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

// GETING TODAY'S DATE USING DAY JS XTERNAL LIBRARY
const today = dayjs();

const todayDate = document.querySelector('.today');

todayDate.innerHTML = today.format('MMMM D, YYYY');


// Create and empty array to store todos
let myTodo = JSON.parse(localStorage.getItem('myTodo')) || [];
// const myTodo = [];

// FUNTION TO RENDER TODOLIST

function renderTodoList() {
  let todoListHtml = '';

  for (let i = 0; i < myTodo.length; i++) {
    const todoObject = myTodo[i];

    const name = todoObject.name;
    const time = todoObject.time || '';
    const completed = todoObject.completed;

    const html = `
      <div class="todo-item ${completed ? 'completed' : ''}">

        <input
          type="checkbox"
          data-index="${i}"
          class="todo-checkbox"
          ${completed ? 'checked' : ''}
        >

        <div class="todo-details">
          <div class="todo-name">${name}</div>

          <div class="todo-time">
            <svg width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>${time}</span>
          </div>
        </div>

        <button type="button"
          class="delete-button"
          data-index="${i}"
          aria-label="Delete ${name}">
          <svg width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6l-1 14H6L5 6"></path>
            <path d="M10 11v6"></path>
            <path d="M14 11v6"></path>
            <path d="M9 6V4h6v2"></path>
          </svg>
        </button>

      </div>
    `;

    todoListHtml += html;
  }

  document.querySelector('.js-todos').innerHTML = todoListHtml;
}



function addButton() {
  const inputElement = document.querySelector('.inputBox');
  const todoName = inputElement.value.trim();

  if (todoName === '') {
    return;
  }

  myTodo.push({
    name: todoName,
    time: dayjs().format('h:mm A'),
    completed: false
  });

  // Save todos in localStorage
  localStorage.setItem('myTodo', JSON.stringify(myTodo));

  inputElement.value = '';
  renderTodoList();
}


function toggleTodo(index) {
  myTodo[index].completed = !myTodo[index].completed;

  localStorage.setItem('myTodo', JSON.stringify(myTodo));
  renderTodoList();
}

function deleteTodo(index) {
  myTodo.splice(index, 1);

  localStorage.setItem('myTodo', JSON.stringify(myTodo));
  renderTodoList();
}

// Handle checkbox clicks and delete button clicks
document.querySelector('.js-todos').addEventListener('click', (event) => {
  const deleteButton = event.target.closest('.delete-button');

  if (deleteButton) {
    deleteTodo(Number(deleteButton.dataset.index));
  }
});

document.querySelector('.js-todos').addEventListener('change', (event) => {
  if (event.target.classList.contains('todo-checkbox')) {
    toggleTodo(Number(event.target.dataset.index));
  }
});

// Display saved todos when the page loads
renderTodoList();


// FUNTION TO ADD THE MY TODOLIST ON THE PAGE WHEN THE ENTER BUTTON IS PRESSED
function renderTodoWithEnterKey(event) {
  if (event.key === 'Enter') {
    addButton()
  }
}

// 1. Handle clicking the "Add" button
document.querySelector('.add-button').addEventListener('click', () => {
  addButton();
});

// 2. Handle pressing the "Enter" key in the input box
document.querySelector('.name-input').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    // Call whatever logic you need here, or call addButton() directly if that's the goal!
    addButton(); 
  }
});

document.querySelector('.anchors')

const buttons = document.querySelectorAll('.anchor-btn');

// Loop Throught the buttons to add a a reversed style when any of the buttons is clicked
buttons.forEach((button) => {
  button.addEventListener('click',(event) => {
    // Prevent the default anchor behavior (jumping/refreshing the page)
    event.preventDefault(); 

    // Remove 'reversed' from all buttons
    buttons.forEach((btn) => {
      btn.classList.remove('reversed');
    });
    
    button.classList.toggle('reversed');
  })
})