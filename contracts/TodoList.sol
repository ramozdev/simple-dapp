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

  // mapping is like a json object
  // A list of key value pairs
  mapping(uint => Task) public tasks;

  function createTask(string memory _content) public {
    taskCount ++; // Equivalent to autoincrement on SQL
    tasks[taskCount] = Task(taskCount, _content, false);
  }
}