var list = document.getElementById("list");

function AddTodo() {
	var todoItem = document.getElementById("Todo-Item");
	
	var li = document.createElement('li');
	var liText = document.createTextNode(todoItem.value);
	
	li.appendChild(liText);
	
	var deletebtn = document.createElement("button");
	var deleteText = document.createTextNode("Delete");
	deletebtn.setAttribute("class","btn");
	deletebtn.setAttribute("onclick","deleteItem(this)");
	deletebtn.appendChild(deleteText);

	var editbtn = document.createElement("button");
	var editText = document.createTextNode("Edit");
	editbtn.setAttribute("class","btn");
	editbtn.setAttribute("onclick","editItem(this)");
	editbtn.appendChild(editText);
	

	li.appendChild(deletebtn);
	li.appendChild(editbtn);

	list.appendChild(li);

	todoItem.value = "";
	
	console.log(li);
}

function deleteItem(e){
	e.parentNode.remove();
}

function editItem(e){
	var val = e.parentNode.firstChild.nodeValue;
	var editValue = prompt("Enter Edit Value!",val);
	e.parentNode.firstChild.nodeValue = editValue;
}

function deleteAll(){
	list.innerHTML = "";
}