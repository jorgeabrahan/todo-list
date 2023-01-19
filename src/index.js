import ToDos from './modules/ToDos.js';
import './style.css';

const todosCnt = document.getElementById('cntTodos');
const frmAddToDo = document.getElementById('frmAddToDo');
const btnRemoveSelected = document.getElementById('btnRemoveSelected');
const btnClearList = document.getElementById('btnClearList');
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

btnRemoveSelected.addEventListener('click', () => {
  todos.removeSelected();
});

btnClearList.addEventListener('click', () => {
  todos.clearList();
});
