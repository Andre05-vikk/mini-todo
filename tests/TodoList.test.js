import { describe, it, expect, beforeEach } from 'bun:test';
import { TodoList } from '../src/TodoList.js';

describe('TodoList', () => {
  let todoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  describe('add', () => {
    it('should add a todo with title and open status', () => {
      todoList.add('Buy milk');
      expect(todoList.count()).toBe(1);
      expect(todoList.getByIndex(0).title).toBe('Buy milk');
      expect(todoList.getByIndex(0).status).toBe('open');
    });
  });
});
