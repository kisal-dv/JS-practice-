export let tasks = []; // Task list

//  Arrow Function to Add a Task
export const addTask = (task) => {
    tasks = [...tasks, task]; 
    
    // Using Spread Operator to update array
};

//  Arrow Function to Remove a Task


export const removeTask = (index) => {
    tasks = tasks.filter((_, i) => i !== index);
};

//  Function to Display Tasks
export const displayTasks = () => tasks.map((task, index) => `${index + 1}. ${task}`).join("\n");
