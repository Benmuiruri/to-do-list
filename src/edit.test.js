/**
 * @jest-environment jsdom
 */

import addNewTask from './add-task.js';
import Delete from './delete-task.js';
import { setStorage, getStorage } from './store-list.js';
import populateTasks from './index.js';
import editTask from './edit-task.js';

jest.mock('./index.js');
jest.mock('./edit-task.js');
jest.mock('./add-task.js');

const newTask = document.createElement('input');
newTask.type = 'text';
newTask.value = 'Ride a bike';

// describe('Add new task test', () => {
//   test('Should add new task', () => {
//     setStorage([]);
//     expect(addNewTask(newTask)).toEqual([
//       {
//         description: 'Ride a bike',
//         completed: false,
//         index: 1,
//       },
//     ]);
//   });
// });

describe('Test the edit task function', () => {
  test('should update a task description', () => {
    const i = 0;
    setStorage(addNewTask(newTask));
    const taskList = getStorage();
    newTask.textContent = 'Code something';
    expect(populateTasks(editTask(taskList, i))).toEqual([
      {
        description: 'Code something',
        completed: false,
        index: 0,
      },
    ]);
  });
});
