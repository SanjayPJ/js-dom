const form = document.querySelector('#task-form');
const task_list = document.querySelector('.collection');
const clear_btn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const task_input = document.querySelector('#task');

//load all event listeners
load_all_event_listeners()

//load all event listeners
function load_all_event_listeners(){
	//add task event
	form.addEventListener('submit', add_task);
	//remove task event
	task_list.addEventListener('click', remove_task);
	//clear task event
	clear_btn.addEventListener('click', clear_tasks);
	//filter task event
	filter.addEventListener('keyup', filter_tasks);
}

//add task
function add_task(e){
	if(task_input.value === ''){
		alert('Add a task');
	}else{
		//create li
		const li = document.createElement('li');
		//add class
		li.className = 'collection-item';
		//create text node and appen to the li
		li.appendChild(document.createTextNode(task_input.value));
		//create link element
		const link = document.createElement('a');
		//add class
		link.className = 'delete-item secondary-content';
		// add icon HTML
		link.innerHTML = '<i class="fas fa-trash-alt"></i>';
		//append child to the li
		li.appendChild(link);

		//append li to the ul
		task_list.appendChild(li);
		task_input.value = '';
	}
	e.preventDefault();
}

//remove task
function remove_task(e){
	if(e.target.parentElement.classList.contains('delete-item')){
		if(confirm('Are you sure')){
			e.target.parentElement.parentElement.remove();
		}
	}
}

//clear task
function clear_tasks(){
	task_list.innerHTML = "";
}

//filter tasks
function filter_tasks(e){
	const text = e.target.value.toLowerCase();
	document.querySelectorAll('.collection-item').forEach(function(task){
		const item = task.firstChild.textContent;
		if(item.toLowerCase().indexOf(text) != -1){
			task.style.display = 'block';
		}else{
			task.style.display = 'none';
		}
	});
}