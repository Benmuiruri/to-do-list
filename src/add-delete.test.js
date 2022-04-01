/**
 * @jest-environment jsdom
 */

import addNewTask from './add-task.js';
import Delete from './delete-task.js';
import { setStorage, getStorage } from './store-list.js';
import populateTasks from './__mocks__/index.js';

jest.mock('./store-list.js');
jest.mock('./index.js');
jest.mock('./add-task.js');
jest.mock('./delete-task.js');

// Create the input that we shall add to the task list

const newTask = document.createElement('input');
newTask.type = 'text';
newTask.value = 'Code something';

describe('Add new task', () => {
  test('Should add new task', () => {
    setStorage([]);
    expect(addNewTask(newTask)).toEqual([
      {
        description: 'Code something',
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
