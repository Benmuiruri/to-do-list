import './style.css';
import ViewMore from './assets/view-more.png';
import addNewTask from './add-task.js';
import { setStorage, getStorage } from './store-list.js';

const addTask = document.getElementById('add-new-task');
const currentTasks = document.querySelector('.current-tasks');

const tasks = getStorage();

const populateTasks = (arr) => {
  currentTasks.innerHTML = '';
  arr.forEach((element) => {
    const newDiv = document.createElement('div');
    newDiv.className = 'to-do-item';
    const tick = document.createElement('input');
    const menuImg = document.createElement('img');
    menuImg.src = `${ViewMore}`;
    tick.setAttribute('type', 'checkbox');
    newDiv.append(tick);
    newDiv.append(`${element.description}`);
    newDiv.append(menuImg);
    currentTasks.appendChild(newDiv);
  });
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
