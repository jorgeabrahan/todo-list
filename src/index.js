import ToDos from './modules/ToDos.js';
import './style.css';

const todosCnt = document.getElementById('cntTodos');
const frmAddToDo = document.getElementById('frmAddToDo');
const btnClearAllTodos = document.getElementById('btnClearAllTodos');
const todos = new ToDos(todosCnt);

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

btnClearAllTodos.addEventListener('click', () => {
  todos.removeSelected();
});
