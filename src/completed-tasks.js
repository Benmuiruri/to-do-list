import { setStorage } from './store-list.js';

export default (arr) => {
  // Update tasks local storage based on checkbox status
  for (let i = 0; i < arr.length; i += 1) {
    if (document.getElementById(i).checked) {
      arr[i].completed = 'true';
      document.getElementById(`item${i}`).style.textDecoration = 'line-through';
    } else {
      arr[i].completed = 'false';
      document.getElementById(`item${i}`).style.textDecoration = 'none';
    }
  }
  setStorage(arr);
};
