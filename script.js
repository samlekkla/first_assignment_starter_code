// TASK MANAGER

// Variable to keep track of the latest assigned task ID.
let taskId = 1;

// taskManager object
const taskManager = {
  // tasks array to store all tasks
  tasks: [],

  // Function to add a new task
  addTask: function () {
    // Prompt user for task description.
    const taskDescription = prompt("Please add task description: ");

    // Check if task description is empty.
    if (taskDescription.trim() === "") {
      alert("Task description can't be empty!");
      // If description is empty, call addTask() again to prompt user for a valid description.
      this.addTask();
    }

    // Create a task object with assigned ID and description.
    const task = {
      id: taskId++,
      description: taskDescription,
      complete: false, // A new task is not completed when added.
    }

    // Add the new task to the tasks array.
    this.tasks.push(task);
    alert("Task added!");

    // Show the main menu after the task has been added.
    menu();
  },

  // Function to mark a task as completed by changing its complete status
completeTask: function () {
  // Prompt the user to enter the ID of the task they want to mark as completed
  const taskIdToComplete = parseInt(prompt("Enter the ID of the task you want to mark as completed:"));

  // Find the task with the given ID
  const taskToComplete = this.tasks.find(task => task.id === taskIdToComplete);

  // Check if the task exists
  if (taskToComplete) {
    // Mark the task as completed
    taskToComplete.complete = true;
    alert(`Task with ID ${taskIdToComplete} marked as completed.`);
  } else {
    alert(`Task with ID ${taskIdToComplete} not found.`);
  }

  // Show the main menu after marking the task as completed
  menu();
},

  // Function to list all tasks
  listAllTasks: function () {
    let message = ""; // Variable to store the message to be displayed to the user.

    // Loop through each task in the tasks array and construct the message.
    this.tasks.forEach((task) => {
      message += "id: " + task.id + " Description: " + task.description + " Complete: " + task.complete + "\n";
    });

    // Display the message to the user.
    alert(message);

    // Show the main menu after all tasks have been listed.
    menu();
  },

  // Function to list all completed tasks
  listCompletedTasks: function () {
    // Filter all completed tasks from the tasks array.
    let completedTasks = this.tasks.filter(task => task.complete);

    // Check if there are any completed tasks.
    if (completedTasks.length === 0) {
      alert("No completed tasks");
    } else {
      // If there are completed tasks, create a message to display them.
      let message = "Completed tasks:\n";
      completedTasks.forEach(task => {
        message += `id: ${task.id} Description: ${task.description}\n`;
      });
      // Display the message to the user.
      alert(message);
    }

    // Show the main menu after completed tasks have been listed.
    menu();
  }
};

// Function to ask user for their name and then display the main menu.
function askUserName() {
  const UserName = prompt("Please enter your name");
  menu(); // Show the main menu after the user has entered their name.
}

// Main menu function where the user can choose different options.
function menu() {
  // Ask the user for their choice and convert it to an integer.
  const choice = parseInt(
    prompt(
      "Select a choice:\n 1) Add task\n 2) Complete task\n 3) List of all tasks\n 4) List of completed tasks\n 5) Exit\n"
    )
  );

  // Depending on the user's choice, call the appropriate function from the taskManager object.
  switch (choice) {
    case 1:
      taskManager.addTask();
      break;
    case 2:
      taskManager.completeTask(); 
      break;
    case 3:
      taskManager.listAllTasks();
      break;
    case 4:
      taskManager.listCompletedTasks();
      break;
    case 5:
      alert("Goodbye!:)");
      return;
    default:
      alert("Invalid input, please choose between 1-5");
      menu(); // If the user enters an invalid choice, display the main menu again.
      break;
  }
}

// Start the application by asking the user for their name and then displaying the main menu.
askUserName();
