/**
 * @jest-environment jsdom
 */

import addNewTask from './add-task.js';
import Delete from './delete-task.js';
import { setStorage, getStorage } from './store-list.js';
import populateTasks from './__mocks__/index.js';
import editTask from './edit-task.js';
import completed from './completed-tasks.js';

jest.mock('./store-list.js');
jest.mock('./index.js');
jest.mock('./add-task.js');
jest.mock('./delete-task.js');
jest.mock('./edit-task.js');
jest.mock('./completed-tasks.js');

// Create the input that we shall add to the task list

const newTask = document.createElement('input');
newTask.type = 'text';
newTask.value = 'Code';

describe('Add new task', () => {
  test('Should add new task', () => {
    setStorage([]);
    expect(addNewTask(newTask)).toEqual([
      {
        description: 'Code',
        completed: false,
        index: 1,
      },
    ]);
  });
});
describe('Add new task and retrieve task', () => {
  test('Test adding and getting items from the storage ', () => {
    setStorage([]);
    setStorage(addNewTask(newTask));
    expect(getStorage().length).toBe(2);
  });
});
describe('Add latest task to DOM', () => {
  test('should add new task to the DOM', () => {
    setStorage([]);
    setStorage(addNewTask(newTask));
    expect(document.querySelector('.current-tasks').children.length).toBe(4);
  });
});
describe('Delete task from local storage', () => {
  test('should delete an item from local storage', () => {
    const index = 3;
    setStorage(Delete.deleteOne(getStorage(), index));
    expect(getStorage().length).toBe(3);
  });
});
describe('Delete task from DOM', () => {
  test('should delete an task from DOM', () => {
    const index = 2;
    setStorage(Delete.deleteOne(getStorage(), index));
    populateTasks(getStorage());
    expect(document.querySelector('.current-tasks').children.length).toBe(3);
  });
});

describe('Edit task', () => {
  test('should edit task description', () => {
    setStorage(addNewTask(newTask));
    setStorage(editTask(getStorage(), 0));
    expect(getStorage()[0]).toEqual({
      description: 'Go shopping',
      completed: false,
      index: 1,
    });
  });
});

describe('Test delete all completed functionality', () => {
  test('should delete all completed tasks', () => {
    getStorage()[0].completed = true;
    Delete.deleteAll(getStorage());
    expect(getStorage().length).toBe(2);
  });
});
describe('Test marking task as completed', () => {
  const checkbox = document.createElement('input');
  checkbox.type = checkbox;
  checkbox.checked = false;
  test('should test a task completed == false by default', () => {
    const firstTask = getStorage()[0];
    completed(checkbox, firstTask);
    expect(firstTask.completed).toBeFalsy();
  });
  test('checkbox should update a task completed to true', () => {
    const task = getStorage()[0];
    checkbox.checked = true;
    completed(checkbox, task);
    expect(task.completed).toBeTruthy();
  });
});
