// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.5.0;

contract TodoList {
  uint public taskCount = 0;

  constructor() public {
    // Initiate the contract with one task
    createTask('First task');
  }

  // Create a "Schema" for the tasks
  struct Task {
    uint id;
    string content;
    bool completed;
  }

  event TaskCompleted(
    uint id,
    bool completed
  );

  // mapping is like a json object
  // A list of key value pairs
  mapping(uint => Task) public tasks;

  function createTask(string memory _content) public {
    tasks[taskCount] = Task(taskCount, _content, false);
    taskCount = taskCount + 1; // Equivalent to autoincrement on SQL
  }
  
  function toggleCompleted(uint _id) public {
    Task memory _task = tasks[_id];
    _task.completed = !_task.completed;
    tasks[_id] = _task;
    emit TaskCompleted(_id, _task.completed);
  }
}