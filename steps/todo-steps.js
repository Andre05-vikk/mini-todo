import { Given, When, Then } from '@cucumber/cucumber';
import { strict as assert } from 'assert';
import { TodoList } from '../src/TodoList.js';

let todoList;

Given('an empty list', function () {
  todoList = new TodoList();
});

When('I add a todo {string}', function (title) {
  todoList.add(title);
});

Then('the list has {int} item', function (count) {
  assert.equal(todoList.count(), count);
});

Then('item {int} title is {string}', function (index, title) {
  const todo = todoList.getByIndex(index - 1);
  assert.equal(todo.title, title);
});

Then('item {int} status is {string}', function (index, status) {
  const todo = todoList.getByIndex(index - 1);
  assert.equal(todo.status, status);
});

Given('the list contains a todo {string}', function (title) {
  if (!todoList) {
    todoList = new TodoList();
  }
  todoList.add(title);
});

When('I mark {string} as completed', function (title) {
  todoList.complete(title);
});

Then('{string} status is {string}', function (title, status) {
  const todo = todoList.getByTitle(title);
  assert.equal(todo.status, status);
});

let error;

When('I filter only open todos', function () {
  todoList.filterByStatus('open');
});

When('I try to add a todo with empty title', function () {
  try {
    todoList.add('');
    error = null;
  } catch (e) {
    error = e.message;
  }
});

Then('I get error message {string}', function (message) {
  assert.equal(error, message);
});

Then('the list has {int} items', function (count) {
  assert.equal(todoList.count(), count);
});
