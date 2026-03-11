const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filters = document.querySelectorAll(".filters button");
const taskCount = document.getElementById("taskCount");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

/* =====================
INITIAL LOAD
===================== */

document.addEventListener("DOMContentLoaded", () => {
    renderTasks();
});

/* =====================
ADD TASK
===================== */

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {

    const text = taskInput.value.trim();

    if (!text) return;

    const task = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";

    saveTasks();
    renderTasks();
}

/* =====================
RENDER TASKS
===================== */

function renderTasks(filter = currentFilter) {

    currentFilter = filter;

    taskList.innerHTML = "";

    let filteredTasks = tasks;

    if (filter === "active") {
        filteredTasks = tasks.filter(t => !t.completed);
    }

    if (filter === "completed") {
        filteredTasks = tasks.filter(t => t.completed);
    }

    filteredTasks.forEach(task => {

        const li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button class="complete-btn">✔</button>
                <button class="delete-btn">❌</button>
            </div>
        `;

        const completeBtn = li.querySelector(".complete-btn");
        const deleteBtn = li.querySelector(".delete-btn");

        completeBtn.addEventListener("click", () => toggleTask(task.id));
        deleteBtn.addEventListener("click", () => deleteTask(task.id));

        taskList.appendChild(li);
    });

    updateCounter();
}

/* =====================
TOGGLE TASK
===================== */

function toggleTask(id) {

    tasks = tasks.map(task =>
        task.id === id
            ? { ...task, completed: !task.completed }
            : task
    );

    saveTasks();
    renderTasks();
}

/* =====================
DELETE TASK
===================== */

function deleteTask(id) {

    tasks = tasks.filter(task => task.id !== id);

    saveTasks();
    renderTasks();
}

/* =====================
FILTER TASKS
===================== */

filters.forEach(btn => {

    btn.addEventListener("click", () => {

        document.querySelector(".filters .active")?.classList.remove("active");

        btn.classList.add("active");

        const filter = btn.dataset.filter;

        renderTasks(filter);
    });

});

/* =====================
COUNTER
===================== */

function updateCounter() {const remaining = tasks.filter(task => !task.completed).length;

    taskCount.textContent = remaining;
}

/* =====================
LOCAL STORAGE
===================== */

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}