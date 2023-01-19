export default class ToDo {
  constructor(description, completed, index, id) {
    this.index = index;
    this.id = id;
    this.description = description;
    this.completed = completed;
  }

  createHtml() {
    const todo = document.createElement('li');
    todo.id = this.id;
    todo.className = 'todo';
    todo.setAttribute('draggable', 'true');
    todo.innerHTML = `
      <div class="todo__content">
        <div class="todo__check">
          <input class="todo__check-input" type="checkbox" ${this.completed ? 'checked' : ''} />
          <span class="todo__done material-symbols-outlined"> check </span>
        </div>
        <input class="todo__description ${this.completed ? 'completed' : ''}" type="text" value="${this.description}" />
      </div>
      <div class="todo__edit">
        <span class="btnMove btn-icon material-symbols-outlined">
          drag_indicator
        </span>
        <button class="btnDelete btn-icon">
          <span class="material-symbols-outlined"> delete </span>
        </button>
      </div>
    `;
    return todo;
  }
}
