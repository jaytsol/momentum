const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const renderToDo = (newToDo) => {
    const li = document.createElement("li");
    renderSpan(newToDo, li);
    renderButton(li);
    toDoList.appendChild(li);
}

const renderSpan = (newToDo, li) => {
    const span = document.createElement("span");
    span.innerText = newToDo;
    li.appendChild(span);
}

const renderButton = (li) => {
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", handleToDoDelete);
    li.appendChild(button);
}

const handleToDoDelete = (event) => {
    const li = event.target.parentElement;
    li.remove();
}

const handleToDoSubmit = (event) => {
    event.preventDefault();
    const newToDo = todoInput.value;
    todoInput.value = "";
    renderToDo(newToDo);
}

todoForm.addEventListener("submit", handleToDoSubmit);