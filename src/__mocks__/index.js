document.body.innerHTML = `
<div class="current-tasks"></div>
`;
const currentTasks = document.querySelector('.current-tasks');
const populateTasks = (arr) => {
  currentTasks.innerHTML = '';
  for (let i = 0; i <= arr.length; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'to-do-item';
    const tick = document.createElement('input');
    const description = document.createElement('input');
    description.className = 'task-description';
    tick.setAttribute('type', 'checkbox');
    tick.id = i;
    newDiv.id = `item${i}`;
    newDiv.append(tick);
    newDiv.append(description);
    currentTasks.appendChild(newDiv);
  }
};

export default populateTasks;
