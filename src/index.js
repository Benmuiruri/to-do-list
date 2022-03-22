import './style.css';
import Tick from './assets/tick-box.png';
import ViewMore from './assets/view-more.png';
import Refresh from './assets/refresh.png';

const task1 = {
  index: 0,
  completed: true,
  description: 'Wash the car',
};
const task2 = {
  index: 1,
  completed: true,
  description: 'Wash the dishes',
};
const task3 = {
  index: 2,
  completed: true,
  description: 'Wash the house',
};
const task4 = {
  index: 3,
  completed: true,
  description: 'Finish project',
};
const task5 = {
  index: 4,
  completed: true,
  description: 'Wash the car',
};

const toDoList = [task1, task2, task3, task4, task5];

function component() {
  const container = document.createElement('div');
  container.className = 'main-container';
  const logoElement = document.createElement('div');
  logoElement.className = 'logo-img';
  const listDiv = document.createElement('div');
  listDiv.className = 'list-div';
  const listDivTitle = document.createElement('div');
  listDivTitle.className = 'title';
  const listTitle = document.createElement('h4');
  listTitle.textContent = 'My To Do List';
  listDivTitle.appendChild(listTitle);
  listDiv.appendChild(listDivTitle);

  toDoList.forEach((list) => {
    const listItem = document.createElement('div');
    listItem.className = 'to-do-item';
    listItem.innerHTML = `
          <input id="done" type="checkbox" value="done">
          <input type="text" value="${list.description}" class="new-list-item">
          <img class="view-more" src="${ViewMore}" alt="view-more">
    `;
    listDiv.appendChild(listItem);
  });

  // Add list icon
  const tickIcon = new Image();
  tickIcon.src = Tick;
  logoElement.appendChild(tickIcon);

  const refereshIconDiv = document.createElement('div');

  const refreshIcon = new Image();
  refreshIcon.src = Refresh;
  refereshIconDiv.appendChild(refreshIcon);
  listDivTitle.appendChild(refereshIconDiv);

  // Create card to hold to do list

  // Append elements to container
  container.appendChild(logoElement);
  container.appendChild(listDiv);

  return container;
}

document.body.appendChild(component());
