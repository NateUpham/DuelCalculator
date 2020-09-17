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
	var image1 = document.querySelector("#p1Pic");
 	image1.classList.add("Hidden");
	var image2 = document.querySelector("#p2Pic");
 	image2.classList.add("Hidden");
	document.querySelector("#p1Choose").classList.remove("Hidden");
	document.querySelector("#p2Choose").classList.remove("Hidden");
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
function duelist1(){
 	var e = document.getElementById("p1Duelist");
	var image = document.querySelector("#p1Pic")
 	image.classList.remove("Hidden");
 	document.querySelector("#p1Choose").classList.add("Hidden");
 	if(e.selectedIndex > 0){
 		if("yugi" === e.options[e.selectedIndex].value){image.src = "images/yugi.jpg"}
		if("kaiba" === e.options[e.selectedIndex].value){image.src = "images/kaiba.jpg"}
  		if("joey" === e.options[e.selectedIndex].value){image.src = "images/joey.jpg"}
  		if("pegasus" === e.options[e.selectedIndex].value){image.src = "images/pegasus.jpg"}
  		if("bakura" === e.options[e.selectedIndex].value){image.src = "images/bakura.jpg"}
  		if("mai" === e.options[e.selectedIndex].value){image.src = "images/mai.jpg"}
 	}
}
document.getElementById("p1Duelist").addEventListener("onchange", duelist1);

function duelist2(){
 	var e = document.getElementById("p2Duelist");
	var image = document.querySelector("#p2Pic")
 	image.classList.remove("Hidden");
 	document.querySelector("#p2Choose").classList.add("Hidden");
 	if(e.selectedIndex > 0){
  		if("yugi" === e.options[e.selectedIndex].value){image.src = "images/yugi.jpg"}
  		if("kaiba" === e.options[e.selectedIndex].value){image.src = "images/kaiba.jpg"}
  		if("joey" === e.options[e.selectedIndex].value){image.src = "images/joey.jpg"}
  		if("pegasus" === e.options[e.selectedIndex].value){image.src = "images/pegasus.jpg"}
  		if("bakura" === e.options[e.selectedIndex].value){image.src = "images/bakura.jpg"}
  		if("mai" === e.options[e.selectedIndex].value){image.src = "images/mai.jpg"}
 	}
}
document.getElementById("p2Duelist").addEventListener("onchange", duelist2);
