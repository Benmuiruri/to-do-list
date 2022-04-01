/**
 * @jest-environment jsdom
 */

import addNewTask from './add-task.js';
import Delete from './delete-task.js';
import { setStorage, getStorage } from './store-list.js';

jest.mock('./store-list.js');
jest.mock('./index.js');
jest.mock('./add-task.js');
jest.mock('./delete-task.js');

// Create the input that we shall add to the task list

const newTask = document.createElement('input');
newTask.type = 'text';
newTask.value = 'Ride a bike';

describe('Add new task test', () => {
  test('Should add new task', () => {
    setStorage([]);
    expect(addNewTask(newTask)).toEqual([
      {
        description: 'Ride a bike',
        completed: false,
        index: 1,
      },
    ]);
  });
});
describe('Add new task and retrieve test', () => {
  test('Test adding and getting items from the storage ', () => {
    setStorage(addNewTask(newTask));
    expect(getStorage().length).toBe(2);
  });
});
describe('Add latest task to DOM', () => {
  test('should add new task to the DOM', () => {
    setStorage(addNewTask(newTask));
    expect(document.querySelector('.current-tasks').children.length).toBe(4);
  });
});
describe('Delete item from local storage', () => {
  test('should delete an item from local storage', () => {
    let index;
    setStorage(Delete.deleteOne(getStorage(), index));
    expect(getStorage().length).toBe(2);
  });
});
