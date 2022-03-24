import { setStorage } from './store-list.js';

export default class Delete {
  // Delete one task
  static deleteOne(arr, index) {
    arr.splice(index, 1);
    for (let i = 0; i < arr.length; i += 1) {
      arr[i].index = i + 1;
    }
    return arr;
  }

  // Delete all completed tasks
  static deleteAll(arr) {
    const completedTasks = [];
    arr.forEach((element) => {
      if (element.completed === 'true') {
        completedTasks.push(element);
      }
    });
    let counter = 0;
    completedTasks.forEach((element) => {
      arr.splice(element - counter, 1);
      counter += 1;
    });
    for (let i = 0; i < arr.length; i += 1) {
      arr[i].index = i;
    }
    setStorage(arr);
    return arr;
  }
}
