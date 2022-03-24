export default (arr, index) => {
  arr[index].description = document.getElementById(`update${index}`).value;
  return arr;
};
