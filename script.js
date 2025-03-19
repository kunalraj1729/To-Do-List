console.log( 'Code is Poetry' );function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const task = document.createElement('li');
        task.innerText = taskInput.value;

        // Add a button to mark task as complete
        const completeButton = document.createElement('button');
        completeButton.innerText = 'Complete';
        completeButton.onclick = function() {
            task.classList.toggle('completed');
        };

        // Add a button to delete task
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function() {
            task.remove();
        };
        task.appendChild(completeButton);
        task.appendChild(deleteButton);

        taskList.appendChild(task);
        taskInput.value = ''; // Clear the input field
    }
}