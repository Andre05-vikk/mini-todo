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

  describe('complete', () => {
    it('should mark todo as done by title', () => {
      todoList.add('Pay bills');
      todoList.complete('Pay bills');
      expect(todoList.getByTitle('Pay bills').status).toBe('done');
    });
  });

  describe('filterByStatus', () => {
    it('should filter only open todos', () => {
      todoList.add('Buy milk');
      todoList.add('Pay bills');
      todoList.complete('Pay bills');
      todoList.filterByStatus('open');
      expect(todoList.count()).toBe(1);
      expect(todoList.getByIndex(0).title).toBe('Buy milk');
    });
  });
});
