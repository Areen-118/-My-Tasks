"use strict";

const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("add-task-btn");
const taskTableBody = document.querySelector("#tasks tbody");
const taskCount = document.getElementById("task-count");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText) {
    const newRow = document.createElement("tr");

    const taskNameCell = document.createElement("td");
    taskNameCell.textContent = taskText;

    const statusCell = document.createElement("td");
    statusCell.textContent = "Pending";

    newRow.appendChild(taskNameCell);
    newRow.appendChild(statusCell);

    taskTableBody.appendChild(newRow);

    taskInput.value = "";
    updateTaskCount();
  }
}

function updateTaskCount() {
  taskCount.textContent = `Total Tasks: ${taskTableBody.children.length}`;
}


addTaskButton.addEventListener("click", addTask);
