const dragStart = (todo, e) => {
  todo.classList.add('dragging');
  e.dataTransfer.setData('id', todo.id);
};

const dragEnd = (todo) => {
  todo.classList.remove('dragging');
};

const getToDoPositionedAfter = (container, y) => {
  const todos = [...container.querySelectorAll('.todo:not(.dragging)')];
  return todos.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return {
        offset, element: child,
      };
    }
    return closest;
  }, { offset: Number.NEGATIVE_INFINITY }).element;
};

const dragOver = (container, e) => {
  e.preventDefault();
  const todo = container.querySelector(`#${e.dataTransfer.getData('id')}`);
  const todoAfter = getToDoPositionedAfter(container, e.clientY);
  if (todoAfter === null) {
    container.appendChild(todo);
    return;
  }
  container.insertBefore(todo, todoAfter);
};

export {
  dragStart, dragEnd, dragOver,
};