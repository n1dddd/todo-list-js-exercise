function newTask(title,description) {
  const task = { //object that takes in title of task(variable), description of task, and whether it has been completed or not
    title: title,
    description: description,
    complete: false,

    logState: function() { //logs the state of the task, wether it has been completed or not
      console.log(`${task.title} has ${task.complete ? "" : "not "}been completed`);
    },
    markCompleted: function() { //will change the state of completion for the key task.complete in the object true, marking the task completed
      task.complete = true;
    },
  };
  return task; //return the object and its updated key
}


// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry","😨");
const tasks = [task1,task2];

task1.logState();
task1.markCompleted();
task1.logState();

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
