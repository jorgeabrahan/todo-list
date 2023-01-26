import ToDos from './modules/ToDos.js';

const getCntToDo = (todos, cntTodos) => {
  const { id } = todos[0];
  return cntTodos.querySelector(`#${id}`);
};

const getLocalTodos = () => JSON.parse(localStorage.getItem('todos'));

describe('todos methods tests', () => {
  // Arrange
  document.body.innerHTML = `
    <ul id="cntTodos"></ul>
  `;
  const cntTodos = document.querySelector('#cntTodos');
  const todo = new ToDos(cntTodos);
  const description = 'first';
  // Act
  todo.add(description);
  const first = getCntToDo(todo.todos, cntTodos);
  const firstInput = first.querySelector('input[type="text"]');

  it('Should add the todo to an array, local storage, and the DOM', () => {
    // Assert
    expect(getLocalTodos()[0].description).toBe(description);
    expect(todo.todos[0].description).toBe(description);
    expect(todo.todos.length).toEqual(1);
    expect(firstInput.value).toBe(description);
  });

  it('Should remove the todo from the array, local storage, and the DOM', () => {
    // Act
    todo.delete(first);
    // Assert
    expect(todo.todos.length).toEqual(0);
    expect(cntTodos.children.length).toBe(0);
    expect(getLocalTodos().length).toBe(0);
  });

  let second;

  it('Should edit the description', () => {
    todo.add(description);
    second = getCntToDo(todo.todos, cntTodos);
    const secondInput = first.querySelector('input[type="text"]');
    // Assert
    secondInput.value = 'one';
    todo.focusOut(second, secondInput);
    expect(todo.todos[0].description).toBe('one');
  });

  it('Should change the completed status', () => {
    const secondCheck = second.querySelector('input[type="checkbox"]');
    // Act
    secondCheck.checked = true;
    todo.check(second, secondCheck);
    // Assert
    expect(todo.todos[0].completed).toBeTruthy();
  });

  it('Should remove all the completed todos', () => {
    // Act
    todo.add('two');
    todo.add('three');
    todo.removeSelected();
    // Assert
    expect(cntTodos.children.length).toBe(2);
    todo.todos.forEach((todo) => {
      expect(todo.completed).toBeFalsy();
    });
  });
});
