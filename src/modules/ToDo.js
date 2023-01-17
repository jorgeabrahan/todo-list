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
      <div class="todo__check">
        <span class="todo__done material-symbols-outlined"> done </span>
        <input class="todo__check-input" type="checkbox" ${this.completed && 'checked'} />
      </div>
      <p>${this.description}</p>
      <div class="todo__edit">
        <button class="btnMove">
          <span class="material-symbols-outlined"> more_vert </span>
        </button>
        <button class="btnDelete">
          <span class="material-symbols-outlined"> delete </span>
        </button>
      </div>
    `;
    return todo;
  }
}
