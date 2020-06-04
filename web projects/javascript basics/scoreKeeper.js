var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var input= document.querySelector("input");
var winningScoreD = document.querySelector("#winningScore");
var gameOver = false;
var p1Score=0;
var p2Score=0;
var winningScore=5;

p1Button.addEventListener("click",function () {
	// body...
	if(!gameOver){
		p1Score++;
		h1.textContent = p1Score+" to "+p2Score;
		if(p1Score==winningScore){
			gameOver=true;
		}
	}
	
});

p2Button.addEventListener("click",function () {
	// body...
	if(!gameOver){
		p2Score++;
		h1.textContent = p1Score+" to "+p2Score;
		if(p2Score==winningScore){
			gameOver=true;
		}
	}
	
});

reset.addEventListener("click",function(){
	p1Score=0;
	p2Score=0;
	h1.textContent = p1Score+" to "+p2Score;
	gameOver=false;
})

input.addEventListener("change",function(){
	winningScore = input.value;
	winningScoreD.textContent = winningScore;

});