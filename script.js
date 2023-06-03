// Selections
const ipTask = document.querySelector(".input-task");
const btnAdd = document.querySelector(".btn-add");
const todoList = document.querySelector(".todo-list");
const btnDelete = document.querySelectorAll(".btn-delete");
const todoItems = document.querySelectorAll(".todo-item");
const ipSearch = document.querySelector(".input-search");

// Functionality
function addTask() {
	const task = ipTask.value.trim();
	const item = `   
         <div class="todo-item">
            <p>${task}</p>
            <button class="btn-delete"><img src="img/delete-icon.png" class="delete" alt=""></button>
         </div>`;
	if (task !== "") {
		// todoList.innerHTML += item;
		todoList.insertAdjacentHTML("beforeend", item);
	}
	ipTask.value = "";
	ipTask.focus();
}
function filterTodos(search) {
	// console.log(Array(todoList.children));
	Array.from(todoList.children)
		.filter((todo) => !todo.textContent.toLowerCase().includes(search))
		.forEach((todo) => todo.classList.add("filtered"));

	Array.from(todoList.children)
		.filter((todo) => todo.textContent.toLowerCase().includes(search))
		.forEach((todo) => todo.classList.remove("filtered"));
}

// Handlers
btnAdd.addEventListener("click", addTask);

// Button delete todo
todoList.addEventListener("click", (e) => {
	if (
		e.target.classList.contains("delete") ||
		e.target.classList.contains("btn-delete")
	) {
		// e.target.parentElement.remove();
		// console.log(e.target.closest(".btn-delete"));

		// NOTE : Parent of Button-delete is Todo item
		e.target.closest(".btn-delete").parentElement.remove();
	}
});

// Input Search 
ipSearch.addEventListener("keyup", () => {
	const search = ipSearch.value.trim().toLowerCase();
	filterTodos(search);
});
