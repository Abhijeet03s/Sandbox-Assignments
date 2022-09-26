let input = document.querySelector(".input")
let btn = document.querySelector(".addButton")
let list = document.querySelector(".container")
let saveInd = document.querySelector("#saveIndex")
let saveTaskButton = document.getElementById("save-todo-btn");
let items = [];


btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value.length == 0) {
        alert("Please Enter a Task")
    }
    else {
        let todo = localStorage.getItem("todo");
        if (todo === null) {
            items = [];
        } else {
            items = JSON.parse(todo);
        }
        items.push(input.value);
        input.value = "";
        localStorage.setItem("todo", JSON.stringify(items));
        displayTodo();
    }
});


function displayTodo() {
    let todo = localStorage.getItem("todo");
    if (todo === null) {
        items = [];
    } else {
        items = JSON.parse(todo);
    }
    let inputText = "";
    items.forEach((li, index) => {
        inputText += `        
            <div class="task">
                <span id="taskname">
                    ${li}
                </span>      
                <button class="editButton" onclick='edit(${index})'>
                <i class="fa-solid fa-pen-to-square"></i>
                </button>          
                <button class="deleteButton" onclick="deleteTodo(${index})">
                <i class="fa-solid fa-trash"></i>
                </button>               
            </div>`
    });
    list.innerHTML = inputText;
}


function deleteTodo(index) {
    let todo = localStorage.getItem("todo");
    items = JSON.parse(todo);
    items.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(items));
    displayTodo();
}

function edit(index) {
    saveInd.value = index;
    let todo = localStorage.getItem("todo");
    items = JSON.parse(todo);
    input.value = items[index];
    btn.style.display = "none";
    saveTaskButton.style.display = "block";
}

saveTaskButton.addEventListener("click", () => {
    let todo = localStorage.getItem("todo");
    items = JSON.parse(todo);
    let id = saveInd.value;
    items[id] = input.value;
    btn.style.display = "block";
    saveTaskButton.style.display = "none";
    input.value = "";
    localStorage.setItem("todo", JSON.stringify(items));
    displayTodo();
});