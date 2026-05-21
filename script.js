function addTask(){

    let taskInput = document.getElementById("taskInput");

    let taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span class="task-text">${taskText}</span>

        <div class="task-buttons">

            <button class="complete-btn" onclick="toggleTask(this)">
                Complete
            </button>

            <button class="delete-btn" onclick="deleteTask(this)">
                Delete
            </button>

        </div>
    `;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}

function deleteTask(button){
    button.parentElement.parentElement.remove();
}

function toggleTask(button){

    let taskText = button.parentElement.parentElement.querySelector(".task-text");

    taskText.classList.toggle("completed");

    if(taskText.classList.contains("completed")){
        button.innerText = "Completed";
    }
    else{
        button.innerText = "Complete";
    }
}