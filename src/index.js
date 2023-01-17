import ToDos from './modules/ToDos.js';
import './style.css';

const todosCnt = document.getElementById('cntTodos');
const frmAddToDo = document.getElementById('frmAddToDo');
const todos = new ToDos(todosCnt);
todos.add('Fix the car');
todos.add('Clean the house');
todos.add('Do homeworks');

frmAddToDo.addEventListener('submit', (e) => {
  e.preventDefault();
  const todo = frmAddToDo.todo.value.trim();
  if (todo.length === 0) {
    return;
  }
  todos.add(todo);
  frmAddToDo.reset();
  frmAddToDo.todo.focus();
});
