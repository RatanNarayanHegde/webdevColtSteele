var colors = ["rgb(255, 0, 0)",
				"rgb(255, 255, 0)",
				"rgb(255, 255, 255)",
				"rgb(0, 255, 0)",
				"rgb(255, 0, 255)",
				"rgb(0, 0, 255)",
 ]
var squares = document.querySelectorAll(".square");
var pickedColor = pickedColor();
var colorDisplay = document.querySelector("#colorDisplay");
var msgDisplay = document.querySelector("#msgDisplay");
colorDisplay.textContent = pickedColor;

for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
		

		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor){
			msgDisplay.textContent = "Correct";
			changeColors(clickedColor);
		}
		else{
			this.style.backgroundColor="#232323";
			msgDisplay.textContent = "Try Again";
		}

	});
}


function changeColors(color){
	for(var i=0;i<colors.length;i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}