const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let ToDos = localStorage.getItem(TODOS_KEY) ? JSON.parse(localStorage.getItem(TODOS_KEY)) : [];

const saveToDos = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(ToDos));
}

const renderToDo = (newToDoObj) => {
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    renderSpan(newToDoObj, li);
    renderButton(li);
    toDoList.appendChild(li);
}

const renderSpan = (newToDoObj, li) => {
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
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

    const targetIndex = ToDos.findIndex((toDo) => toDo.id === parseInt(li.id));
    if (targetIndex !== -1) {
        ToDos.splice(targetIndex, 1);
    }

    saveToDos();
}

const handleToDoSubmit = (event) => {
    event.preventDefault();
    const newToDo = todoInput.value;
    todoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    ToDos.push(newToDoObj);
    renderToDo(newToDoObj);
    saveToDos();
}

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(renderToDo);
}

todoForm.addEventListener("submit", handleToDoSubmit);