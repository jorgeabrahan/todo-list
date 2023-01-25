import ToDos from './modules/ToDos.js';

describe('Tests to add and delete methods', () => {
  it('Should add the todo to an array, save it on the local storage, and display on the DOM', () => {
    // Arrange
    document.body.innerHTML = `
      <ul id="cntTodos"></ul>
    `;
    const cntTodos = document.querySelector('#cntTodos');
    const todo = new ToDos(cntTodos);
    const description = 'Do laundry';
    // Act
    todo.add(description);
    const todoId = todo.todos[0].id;
    // Assert
    expect(JSON.parse(window.localStorage.getItem('todos'))[0].description).toBe(description);
    expect(todo.todos[0].description).toBe(description);
    expect(todo.todos.length).toEqual(1);
    expect(cntTodos.querySelector(`#${todoId}`).querySelector('input[type="text"]').value).toBe(description);
  });
});