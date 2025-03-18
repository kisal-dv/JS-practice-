import { tasks, addTask, removeTask, displayTasks } from "./tasks.js";

// ✅ Function to Add Task from User Input
window.addNewTask = () => {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();
    
    if (task) {
        addTask(task);
        updateUI();
        taskInput.value = "";
    }
};

// ✅ Function to Update UI
const updateUI = () => {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = tasks.map((task, index) =>
        `<li>${task} <button class="delete-btn" onclick="deleteTask(${index})">❌</button></li>`
    ).join("");
};

// ✅ Function to Delete a Task
window.deleteTask = (index) => {
    removeTask(index);
    updateUI();
};

// ✅ Initial UI Update
updateUI();
