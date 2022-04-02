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
    arr.forEach((element, i) => {
      element.completed === true && arr.splice(i, 1);
    });
    for (let i = 0; i < arr.length; i += 1) {
      arr[i].index = i + 1;
    }
    setStorage(arr);
    return arr;
  }
}
