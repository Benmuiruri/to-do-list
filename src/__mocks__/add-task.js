import { setStorage, getStorage } from './store-list.js';
import populateTasks from './index.js';

const addNewTask = (taskData) => {
  const taskList = getStorage();
  const task = {
    index: taskList.length + 1,
    completed: false,
    description: taskData.value,
  };
  taskList.push(task);
  setStorage(taskList);
  populateTasks(taskList);
  return taskList;
};

export default addNewTask;
