function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 1000);

function setReminder() {
    const seconds = document.getElementById("reminderTime").value;
    
    if (!seconds || seconds < 1) {
        alert("Enter a valid time in seconds.");
        return;
    }

    document.getElementById("reminderMessage").textContent = `Reminder set for ${seconds} seconds...`;

    setTimeout(() => {
        document.getElementById("reminderMessage").textContent = "⏰ Reminder: Time's up!";
        alert("⏰ Time's up!");
    }, seconds * 1000);
}
console.log("Start"); 

setTimeout(() => {
    console.log("Async Task (Executed Later)");
}, 2000);
console.log("End"); 