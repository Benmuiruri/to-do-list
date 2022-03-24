// Add new task to local storage
import { setStorage } from './store-list.js';

export default (arr) => {
  let addTask = document.getElementById('input-task').value;
  let taskIndex = 0;

  arr.forEach((element) => {
    taskIndex = element.index;
  });
  if (addTask.length === 0) {
    alert('it cannot be empty');
  }
  const newTask = {
    description: addTask,
    completed: false,
    index: taskIndex + 1,
  };
  addTask = '';
  arr.push(newTask);
  setStorage(arr);
  return arr;
};
