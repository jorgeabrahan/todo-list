import ToDos from './modules/ToDos.js';

describe('Tests to the edit, check and clear all completed methods', () => {
  // Arrange
  document.body.innerHTML = `
  <ul id="cntTodos"></ul>
`;
  const cntTodos = document.querySelector('#cntTodos');
  const todo = new ToDos(cntTodos);
  const description = 'one';
  // Act
  todo.add(description);
  const todoId = todo.todos[0].id;
  const todoHTML = cntTodos.querySelector(`#${todoId}`);
  const todoInput = todoHTML.querySelector('input[type="text"]');
  const todoCheck = todoHTML.querySelector('input[type="checkbox"]');
  it('Should edit the description of the created todo from "one" to "two"', () => {
    // Assert
    expect(todo.todos[0].description).toBe('one');
    todoInput.value = 'two';
    todo.focusOut(todoHTML, todoInput);
    expect(todo.todos[0].description).toBe('two');
  });

  it('Should change the completed status of the todo from "false" to "true"', () => {
    // Act
    todoCheck.checked = true;
    todo.check(todoHTML, todoCheck);
    // Assert
    expect(todo.todos[0].completed).toBeTruthy();
  });
  it('Should remove all the completed todos', () => {
    // Act
    todo.add('Three');
    todo.add('Four');
    todo.removeSelected();
    // Assert
    expect(cntTodos.children.length).toBe(2);
    todo.todos.forEach((todo) => {
      expect(todo.completed).toBeFalsy();
    });
  });
});