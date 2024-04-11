// TASK MANAGER

let taskId = 1;

// taskManager object
const taskManager = {
  tasks: [],
  addTask: function () {
    // how to get the description of the task from the user?

    // is there anything that can go wrong with input from the user?

    // define the task object
    const task = {
      id: taskId++,
      description: "",
      // you need to change the empty string to a variable, probably the variable where you store the input user
      complete: false,
    };

    // how do we add the task object onto the tasks array?

    // do we want our program to shut down or continue showing the menu?
  },

  listAllTasks: function () {
    // we need to show each task in the tasks array in some kind of message
    // how can we show or do something with each element in an array?
  },
};

function menu() {
  const choice = parseInt(
    prompt(
      "Select a choice: 1) Add task 2) Complete task 3) List all tasks 4) List completed tasks 5) Exit"
    )
  );

  // switch or if/else?
}
