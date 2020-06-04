var todos =["Do web development"];

var input = prompt("What would you like to do?");


while(input !== "quit"){
	if (input === "list") {
	console.log(todos);
	}
	else if(input === "new"){
	var newele = prompt("Enter new todo");
	todos.push(newele);
	}
	var input = prompt("What would you like to do?");
}
console.log(" You have quit");