import ToDo from './ToDo.js';

export default class ToDos {
  constructor(container) {
    this.container = container;
    this.todos = [];
  }

  fixIndex() {
    this.todos.forEach((todo, index) => {
      todo.index = index;
    });
  }

  check(todo, input) {
    if (input.checked) {
      input.setAttribute('checked', '');
      return;
    }
    input.removeAttribute('checked', '');
  }

  move() {
    console.log(this.todos);
    console.log('move');
  }

  delete(todo) {
    const filtered = this.todos.filter(({ id }) => id !== todo.id);
    this.todos = filtered;
    this.fixIndex();
    todo.remove();
  }

  addEvents(todo) {
    todo.querySelector('input').addEventListener('change', ({ target }) => {
      this.check(todo, target);
    });
    todo.querySelector('.btnMove').addEventListener('click', () => {
      this.move(todo);
    });
    todo.querySelector('.btnDelete').addEventListener('click', () => {
      this.delete(todo);
    });
  }

  add(description, completed) {
    const todo = new ToDo(description, completed, this.todos.length, ToDos.genId());
    this.todos.push(todo);
    const todoHtml = todo.createHtml();
    this.addEvents(todoHtml);
    this.container.appendChild(todoHtml);
  }

  static genId(tokenLen = 16) {
    let id = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < tokenLen; i += 1) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}
