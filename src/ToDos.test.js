import ToDos from './modules/ToDos.js';

describe('Tests to add and delete methods', () => {
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
  it('Should add the todo to an array, save it on the local storage, and display on the DOM', () => {
    // Assert
    expect(
      JSON.parse(window.localStorage.getItem('todos'))[0].description,
    ).toBe(description);
    expect(todo.todos[0].description).toBe(description);
    expect(todo.todos.length).toEqual(1);
    expect(
      cntTodos.querySelector(`#${todoId}`).querySelector('input[type="text"]')
        .value,
    ).toBe(description);
  });
  it('Should remove the todo to an array, remove it on the local storage, and remove on the DOM', () => {
    // Act
    const todoHTML = cntTodos.querySelector(`#${todoId}`);
    todo.delete(todoHTML);
    // Assert
    expect(todo.todos.length).toEqual(0);
    expect(cntTodos.children.length).toBe(0);
    expect(JSON.parse(localStorage.getItem('todos')).length).toBe(0);
  });
});
