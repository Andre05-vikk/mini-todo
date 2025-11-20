export class TodoList {
  constructor() {
    this.todos = [];
    this.filteredTodos = null;
  }

  add(title) {
    if (!title || title.trim() === '') {
      throw new Error('Title cannot be empty');
    }
    this.todos.push({ title, status: 'open' });
  }

  complete(title) {
    const todo = this.todos.find(t => t.title === title);
    if (todo) {
      todo.status = 'done';
    }
  }

  filterByStatus(status) {
    this.filteredTodos = this.todos.filter(t => t.status === status);
  }

  count() {
    return this.filteredTodos ? this.filteredTodos.length : this.todos.length;
  }

  getByIndex(index) {
    const list = this.filteredTodos || this.todos;
    return list[index];
  }

  getByTitle(title) {
    return this.todos.find(t => t.title === title);
  }
}
