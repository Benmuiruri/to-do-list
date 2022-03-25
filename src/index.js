import './style.css';
import Tick from './assets/tick-box.png';
import ViewMore from './assets/view-more.png';
import Refresh from './assets/refresh.png';
import Enter from './assets/enter-key.png';
import addNewTask from './add-task.js';
import editTask from './edit-task.js';
import { setStorage, getStorage } from './store-list.js';
import Delete from './delete-task.js';
import completed from './completed-tasks.js';

const currentTasks = document.querySelector('.current-tasks');
const logoImgDiv = document.querySelector('.logo-img');
const refreshImgDiv = document.querySelector('.refresh-icon');
const enterKeyImgDiv = document.querySelector('.add-task');
const clearCompleted = document.getElementById('completed');

// Add Img Logo
const tickIcon = new Image();
tickIcon.src = Tick;
logoImgDiv.appendChild(tickIcon);

// Add Refresh icon
const refreshIcon = new Image();
refreshIcon.src = Refresh;
refreshImgDiv.appendChild(refreshIcon);

// Add enter key icon
const enterKeyIcon = new Image();
enterKeyIcon.src = Enter;
enterKeyIcon.setAttribute('id', 'add-new-task');
enterKeyImgDiv.appendChild(enterKeyIcon);

const addTask = document.getElementById('add-new-task');
const tasks = getStorage();

// Delete a task from local storage
const removeIndex = (index) => {
  setStorage(Delete.deleteOne(getStorage(), index));
  populateTasks(getStorage()); // eslint-disable-line
};

// Delete all completed tasks from local storage

clearCompleted.addEventListener('click', () => {
  Delete.deleteAll(getStorage());
  populateTasks(getStorage()); // eslint-disable-line
});

const populateTasks = (arr) => {
  currentTasks.innerHTML = '';
  for (let i = 0; i <= arr.length; i += 1) {
    // Add an item to local storage
    const newDiv = document.createElement('div');
    newDiv.className = 'to-do-item';
    const tick = document.createElement('input');
    const description = document.createElement('input');
    description.className = 'task-description';
    const menuImg = document.createElement('img');
    menuImg.src = `${ViewMore}`;
    tick.setAttribute('type', 'checkbox');
    tick.id = i;
    newDiv.id = `item${i}`;
    newDiv.append(tick);
    description.value = `${arr[i].description}`;
    newDiv.append(description);
    newDiv.append(menuImg);
    currentTasks.appendChild(newDiv);
    // Check which checkboxes are clicked.
    if (arr[i].completed === 'true') {
      tick.checked = true;
      newDiv.style.textDecoration = 'line-through';
    }

    // Double click the input area to display the delete icon
    description.addEventListener('dblclick', () => {
      newDiv.classList.add('edit-mode');
      newDiv.innerHTML = `<input type="checkbox" id="${i}"></input><input id = "update${i}" class="update" type="text" value = "${arr[i].description}"></input><i id="delete${i}" class="fas fa-trash-alt"></i>`;
      document.getElementById(`update${i}`).focus();
      document.getElementById(`delete${i}`).addEventListener('click', () => {
        removeIndex(i);
      });
    });
    // Update task on clicking body
    document.body.addEventListener('click', (e) => {
      if (!newDiv.contains(e.target) && document.getElementById(`update${i}`)) {
        newDiv.classList.remove('edit-mode');
        const arr = getStorage();
        completed(editTask(arr, i));
        setStorage(editTask(arr, i));
        populateTasks(editTask(arr, i));
      }
    });
  }
  setStorage(arr);
};

// Add new task on click enter icon
addTask.addEventListener('click', () => {
  populateTasks(addNewTask(getStorage()));
});

// Add new task on pressing enter key
document.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    populateTasks(addNewTask(getStorage()));
  }
});

// call completed function to update task status
document.body.addEventListener('change', () => {
  completed(getStorage());
});

// Display tasks
document.addEventListener('DOMContentLoaded', () => {
  populateTasks(tasks);
});
