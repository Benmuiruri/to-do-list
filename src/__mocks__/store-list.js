let taskList = [];
function setStorage(items) {
  taskList = items;
}
function getStorage() {
  return taskList;
}
export { setStorage, getStorage };
