export class TodoList {
  constructor() {
    this.todos = [];
  }

  add(title) {
    this.todos.push({ title, status: 'open' });
  }

  complete(title) {
    const todo = this.todos.find(t => t.title === title);
    if (todo) {
      todo.status = 'done';
    }
  }

  count() {
    return this.todos.length;
  }

  getByIndex(index) {
    return this.todos[index];
  }

  getByTitle(title) {
    return this.todos.find(t => t.title === title);
  }
}
