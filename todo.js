const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const handleToDoSubmit = (event) => {
    event.preventDefault();
    console.log(todoInput.value);
    const newTodo = todoInput.value;
    todoInput.value = "";
}

todoForm.addEventListener("submit", handleToDoSubmit);