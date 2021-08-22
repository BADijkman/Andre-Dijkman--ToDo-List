document.getElementById("submitTask").addEventListener("click", () => {
  addTask();
});
document.getElementById("newTask").addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    addTask();
  }
});

//Get
const getTasks = async () => {
  const taskList = document.getElementById("task__list");
  const task = await getData();

  task.forEach((task) => {
    //create li
    const newLi = document.createElement("li");
    newLi.id = task._id;

    //create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.value = task._id;
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => {
      if (checkbox.checked === true) {
        task.done = true;
        input.classList.add("line-through");
      } else {
        task.done = false;
        input.classList.remove("line-through");
      }
      updateTask(task);
    });

    //Create Text element (input)
    const input = document.createElement("input");
    input.className = "input__text";
    if (task.done === true) {
      input.classList.add("line-through");
    }
    input.id = task._id;
    input.value = task.description;
    input.addEventListener("keypress", (e) => {
      if (e.keyCode === 13) {
        task.description = input.value;
        updateTask(task);
      }
    });
    input.addEventListener("focus", () => {
      saveBtn.classList.replace("save__btnDisplayOff","save__btnDispay" );
    });

    // //Create Save Button
    const saveBtn = document.createElement("button");
    saveBtn.className = "save__btn save__btnDisplayOff";
    saveBtn.value = task._id;
    const saveIcon = document.createElement("i");
    saveIcon.className = "fa fa-check save__btn";
    saveBtn.appendChild(saveIcon);

    saveBtn.addEventListener("click", () => {
      task.description = input.value;
      updateTask(task);
    });

    //Create Delete Button
    const delBtn = document.createElement("button");
    delBtn.className = "del__btn";
    delBtn.value = task._id;
    const trashIcon = document.createElement("i");
    trashIcon.className = "fa fa-trash trash__btn";
    delBtn.appendChild(trashIcon);
    delBtn.addEventListener("click", () => {
      deleteTask(task._id);
    });

    //Append
    taskList.appendChild(newLi);
    newLi.appendChild(checkbox);
    newLi.appendChild(input);
    newLi.appendChild(delBtn);
    newLi.appendChild(saveBtn);
  });
};

// Remove Task from Dom
const removeTasks = () => {
  const taskList = document.getElementById("task__list");
  while (taskList.hasChildNodes()) {
    taskList.removeChild(taskList.firstChild);
  }
};

//Refresh
const refreshTasks = () => {
  removeTasks();
  getTasks();
};

//Delete
const deleteTask = async (id) => {
  if (id != "") {
    await deleteData(id);
    refreshTasks();
  }
};

//Add
const addTask = async () => {
  const taskInput = document.querySelector("#newTask");
  const description = taskInput.value;
  if (description != "") {
    const task = {
      description: description,
      done: false,
    };
    const newTask = await postData(task);
    taskInput.value = "";
    refreshTasks();
  }
};

//Update
const updateTask = async (task) => {
  const newTask = task.description;
  const newDone = task.done;
  const id = task._id;
  if (task.description != "") {
    const task = {
      description: newTask,
      done: newDone,
    };
    const updateTask = await updateData(id, task);
    refreshTasks();
  }
};

getTasks();
