import ToDos from './modules/ToDos.js';
import './style.css';

const todosCnt = document.getElementById('cntTodos');

const todos = new ToDos(todosCnt);
todos.add('Fix the car', false, 0);
todos.add('Clean the house', false, 1);
todos.add('Do homeworks', false, 2);
