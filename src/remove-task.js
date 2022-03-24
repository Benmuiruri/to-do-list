// Delete one task
export default class Delete {
  static deleteOne(arr, index) {
    arr.splice(index, 1);
    for (let i = 0; i < arr.length; i += 1) {
      arr[i].index = i + 1;
    }
    return arr;
  }

  // Delete all completed tasks
}
