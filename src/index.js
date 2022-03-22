import './style.css';
import Tick from './assets/tick-box.png';

function component() {
  const container = document.createElement('div');
  const logoElement = document.createElement('div');

  const tickIcon = new Image();
  tickIcon.src = Tick;

  logoElement.appendChild(tickIcon);
  container.appendChild(logoElement);

  return container;
}

document.body.appendChild(component());
