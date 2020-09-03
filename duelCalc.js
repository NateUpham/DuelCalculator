var p1Plus = document.getElementById("plAdd");
var p2Plus = document.getElementById("p2Add");
var p1Minus = document.getElementById("plSub");
var p2Minus = document.getElementById("p2Sub");
var p1Start = document.getElementById("p1St");
var p2Start = document.getElementById("p2St");
var reset = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var p1Reset = 0;
var p2Reset = 0;

p1St.addEventListener("click", function(){
	p1Score = Number(document.getElementById("player1").value);
	p1Reset = p1Score;
	p1LP.textContent = p1Score;
});
p1Plus.addEventListener("click", function(){
	p1Score = p1Score + (Number(document.getElementById("player1").value));
	p1LP.textContent = p1Score;
	

});
p1Sub.addEventListener("click", function(){
	if(!gameOver){
	p1Score = p1Score - (Number(document.getElementById("player1").value));  
	if(p1Score <= 0){
		document.querySelector("#p1Name").textContent = "Player 2 Wins"
		document.querySelector("#p2Name").textContent = "Player 2 Wins"
		gameOver = true;
		}
	p1LP.textContent = p1Score;
	}
});

p2St.addEventListener("click", function(){
	p2Score = Number(document.getElementById("player2").value);
	p2Reset = p2Score;
	p2LP.textContent = p2Score;
});
p2Plus.addEventListener("click", function(){
	p2Score = p2Score + (Number(document.getElementById("player2").value));
	p2LP.textContent = p2Score;
	
});
p2Sub.addEventListener("click", function(){
	if(!gameOver){
	p2Score = p2Score - (Number(document.getElementById("player2").value)); 
	 if(p2Score <= 0){
		document.querySelector("#p2Name").textContent = "Player 1 Wins"
		document.querySelector("#p1Name").textContent = "Player 1 Wins"
		gameOver = true;
		}
	p2LP.textContent = p2Score;
	}

});
reset1.addEventListener("click", function(){
	document.querySelector("#p1Name").textContent = "Player 1"
	document.querySelector("#p2Name").textContent = "Player 2"
	gameOver = false;
	resetScore();	
});
function resetScore(){
	p1NewScore = p1Reset;
	p2NewScore = p2Reset;
	p1LP.textContent = p1Reset;
	p2LP.textContent = p2Reset;
	p1Score = p1Reset;
	p2Score = p2Reset;
	
}
