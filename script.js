function addTask(){

    let input = document.getElementById("taskInput");
    let task = input.value;

    if(task === ""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = task;

    li.onclick = function(){
        li.style.textDecoration = "line-through";
    }

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";

    deleteBtn.onclick = function(){
        li.remove();
    }

    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}