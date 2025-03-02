const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const paintToDo = (newToDo) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newToDo;
    toDoList.appendChild(li);
}

const handleToDoSubmit = (event) => {
    event.preventDefault();
    console.log(todoInput.value);
    const newToDo = todoInput.value;
    todoInput.value = "";
    paintToDo(newToDo);
}

todoForm.addEventListener("submit", handleToDoSubmit);