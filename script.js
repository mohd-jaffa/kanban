let taskIdCounter = 3;

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const element = document.getElementById(data);
    ev.target.appendChild(element);
  }

  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const newTask = document.createElement('div');
    newTask.id = 'item' + taskIdCounter++;
    newTask.className = 'kanban-item';
    newTask.draggable = true;
    newTask.ondragstart = drag;
    newTask.textContent = taskText;

    document.getElementById('notStarted').appendChild(newTask);
    taskInput.value = '';
  }