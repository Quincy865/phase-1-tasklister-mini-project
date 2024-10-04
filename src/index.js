const form = document.getElementById('create-task-form');
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  // event lister adding tasks
  form.addEventListener('submit', function (e) {
      e.preventDefault(); 
      
      const taskInput = document.getElementById('new-task-description').value;
      const priority = document.getElementById('task-priority').value;
      // new item list
      const newTask = document.createElement('li');
      newTask.textContent = taskInput;

      if (priority === 'high') {
          newTask.classList.add('high');
      } else if (priority === 'medium') {
          newTask.classList.add('medium');
      } else {
          newTask.classList.add('low');
      }
      //  delete button to each task if it needs to be deleted
      const deleteButton = document.createElement('button');
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener('click', function () {
          newTask.remove();
      });
      newTask.appendChild(deleteButton);
      //  adding the task to the task list
      taskList.appendChild(newTask);
      //  clear the form list after inputing a task to be done
      form.reset();
  });
});
