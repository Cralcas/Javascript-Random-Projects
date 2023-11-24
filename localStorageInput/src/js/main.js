import "./../css/style.css";

// let input = document.querySelector("input"),
//   h2 = document.querySelector("h2");

// h2.innerHTML = localStorage.getItem("completed");

// input.addEventListener("keyup", () => {
//   localStorage.setItem("completed", input.value);
//   h2.innerHTML = localStorage.getItem("completed");
// });

const theList = document.getElementById("theList");

let todos = [];

const addTodo = (e) => {
  e.preventDefault();
  let todo = {
    task: document.getElementById("todoInput").value,
  };
  todos.push(todo);
  document.querySelector("form").reset();

  let listItem = document.createElement("li");
  listItem.innerHTML = todo.task;
  theList.appendChild(listItem);

  listItem.addEventListener("click", () => {});

  localStorage.setItem("completed", JSON.stringify(todos));
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", addTodo);
});
