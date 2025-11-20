export class TodoList {
  constructor() {
    this.todos = [];
  }

  add(title) {
    this.todos.push({ title, status: 'open' });
  }

  count() {
    return this.todos.length;
  }

  getByIndex(index) {
    return this.todos[index];
  }
}
