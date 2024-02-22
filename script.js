function addTask() {
  var taskInput = document.getElementById('taskInput');
  
  if (taskInput.value) {
    var taskList = document.getElementById('taskList');
    var newTask = document.createElement('li');
    newTask.appendChild(document.createTextNode(taskInput.value));
    taskList.appendChild(newTask);
    taskInput.value = '';
    
    // Optional: Add functionality to mark tasks as completed or remove them
    newTask.onclick = function() {
      this.classList.toggle('completed');
    };
    
    // Optional: Add functionality to remove tasks
    newTask.oncontextmenu = function(e) {
      e.preventDefault();
      this.remove();
      return false;
    };
  }
}
