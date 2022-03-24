import './style.css';
import ViewMore from './assets/view-more.png';
import addNewTask from './add-task.js';
import { setStorage, getStorage } from './store-list.js';
import Delete from './remove-task.js';

const addTask = document.getElementById('add-new-task');
const currentTasks = document.querySelector('.current-tasks');

const tasks = getStorage();

const removeIndex = (index) => {
  // Remove only one item by clicking the trash bin
  setStorage(Delete.deleteOne(getStorage(), index));
  populateTasks(getStorage()); // eslint-disable-line
};

const populateTasks = (arr) => {
  currentTasks.innerHTML = '';
  for (let i = 0; i <= arr.length; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'to-do-item';
    const tick = document.createElement('input');
    const description = document.createElement('input');
    description.className = 'task-description';
    const menuImg = document.createElement('img');
    menuImg.src = `${ViewMore}`;
    tick.setAttribute('type', 'checkbox');
    tick.id = `item${i}`;
    newDiv.append(tick);
    description.value = `${arr[i].description}`;
    newDiv.append(description);
    newDiv.append(menuImg);
    currentTasks.appendChild(newDiv);

    description.addEventListener('dblclick', () => {
      setStorage(arr);
      newDiv.classList.add('edit-mode');
      newDiv.innerHTML = `<input type="checkbox" id="${i}"></input><input id = "update${i}" class="update" type="text" value = "${arr[i].description}"></input><i id="delete${i}" class="fas fa-trash-alt"></i>`;
      document.getElementById(`update${i}`).focus();
      document.getElementById(`delete${i}`).addEventListener('click', () => {
        removeIndex(i);
      });
    });
  }
  setStorage(arr);
};

// Add new task
addTask.addEventListener('click', () => {
  populateTasks(addNewTask(getStorage()));
});

// Display tasks
document.addEventListener('DOMContentLoaded', () => {
  populateTasks(tasks);
});
