import './style.css';
import Tick from './assets/tick-box.png';

function component() {
  const container = document.createElement('div');
  const logoElement = document.createElement('div');
  const listDiv = document.createElement('div');
  const listTitle = document.createElement('h4');
  listTitle.textContent = 'My To Do List';

  // Add list icon
  const tickIcon = new Image();
  tickIcon.src = Tick;
  logoElement.appendChild(tickIcon);

  // Create card to hold to do list
  listDiv.className = 'list-div';
  listDiv.appendChild(listTitle);

  // Append elements to container
  container.appendChild(logoElement);
  container.appendChild(listDiv);

  return container;
}

document.body.appendChild(component());
