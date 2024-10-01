document.getElementById("add-btn").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("task-list");
    const taskItem = document.createElement("li");

    taskItem.textContent = taskText;

    // Add event listener to mark task as complete
    taskItem.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // Add event listener to delete task
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(taskItem);
    });

    // Add delete button to the task item
    taskItem.appendChild(deleteBtn);

    // Add the task item to the task list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
}
