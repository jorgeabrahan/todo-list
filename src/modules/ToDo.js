export default class ToDo {
  constructor(description, completed, index, id) {
    this.index = index;
    this.id = id;
    this.description = description;
    this.completed = completed;
  }

  createHtml() {
    const todo = document.createElement('li');
    todo.className = 'todo';
    todo.id = this.id;
    todo.innerHTML = `
      <div class="todo__content">
        <div class="todo__check">
          <input class="todo__check-input" type="checkbox" />
          <span class="todo__done material-symbols-outlined"> check </span>
        </div>
        <input class="todo__description" type="text" value="${this.description}" />
      </div>
      <div class="todo__edit">
        <button class="btnMove btn-icon">
          <span class="material-symbols-outlined"> more_vert </span>
        </button>
        <button class="btnDelete btn-icon">
          <span class="material-symbols-outlined"> delete </span>
        </button>
      </div>
    `;
    return todo;
  }
}
