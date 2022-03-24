// Local storage get and set methods
const setStorage = (arr) => {
  localStorage.setItem('stored-list', JSON.stringify(arr));
};

const getStorage = () => {
  const tasksList = [];
  if (localStorage.getItem('stored-list')) {
    const parsedList = JSON.parse(localStorage.getItem('stored-list'));
    parsedList.forEach((element) => {
      tasksList.push(element);
    });
  }
  return tasksList;
};

export { setStorage };
export { getStorage };
