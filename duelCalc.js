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


// Player 1 Buttons

p1St.addEventListener("click", function(){
	p1Score = Number(document.getElementById("player1").value);
	p1Reset = p1Score;
	p1LP.textContent = p1Score;
});

p1Plus.addEventListener("click", function(){
	p1Score = p1Score + (Number(document.getElementById("player1").value));
	p1LP.textContent = p1Score;
	

});

p1Plus.addEventListener("click", p1GoodDialogue);
p1Plus.addEventListener("click", p2BadDialogue);

p1Sub.addEventListener("click", function(){
	if(!gameOver){
	p1Score = p1Score - (Number(document.getElementById("player1").value));
	p1BadDialogue();
	p2GoodDialogue();  
	if(p1Score <= 0){
		document.querySelector("#p1Name").textContent = "Player 2 Wins"
		document.querySelector("#p2Name").textContent = "Player 2 Wins"
		gameOver = true;
		if(gameOver){
			p2WinDialogue();
			}
		}
	p1LP.textContent = p1Score;
	}
});



// Player 2 Buttons

p2St.addEventListener("click", function(){
	p2Score = Number(document.getElementById("player2").value);
	p2Reset = p2Score;
	p2LP.textContent = p2Score;
});
p2Plus.addEventListener("click", function(){
	p2Score = p2Score + (Number(document.getElementById("player2").value));
	p2LP.textContent = p2Score;
	
});

p2Plus.addEventListener("click", p2GoodDialogue);
p2Plus.addEventListener("click", p1BadDialogue);

p2Sub.addEventListener("click", function(){
	if(!gameOver){
	p2Score = p2Score - (Number(document.getElementById("player2").value)); 
	p1GoodDialogue();
	p2BadDialogue();
	
	 if(p2Score <= 0){
		document.querySelector("#p2Name").textContent = "Player 1 Wins"
		document.querySelector("#p1Name").textContent = "Player 1 Wins"
		gameOver = true;
		if(gameOver){
			p1WinDialogue();
			}
		
		}
	p2LP.textContent = p2Score;
	}

});

// Reset Button

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


// Character Selection

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
document.getElementById("p1Duelist").addEventListener("click", duelist1);
document.getElementById("p1Duelist").addEventListener("click", p1IntroDialogue);


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
document.getElementById("p2Duelist").addEventListener("click", duelist2);
document.getElementById("p2Duelist").addEventListener("click", p2IntroDialogue);



// Dialogue

var yugiIntro = "Lets begin!"
var yugiGood = "The Heart of the Cards is on my side!"
var yugiBad = "ARGGHH!"
var yugiWin = "You are vanquished!"
var kaibaIntro = "You're no match for me!"
var kaibaGood = "Victory will be mine!"
var kaibaBad = "I'm done playing nice!"
var kaibaWin = "No one can defeat Seto Kaiba!"
var joeyIntro = "Awww Yeah!"
var joeyGood = "Now I got ya!"
var joeyBad = "Not good!"
var joeyWin = "Better luck next time, chump"
var pegasusIntro = "Let's play, shall we?"
var pegasusGood = "Just as I planned!"
var pegasusBad = "You'll regret that"
var pegasusWin = "Hahaha, Victory is mine!"
var bakuraIntro = "Prepare to lose!"
var bakuraGood = "You dont stand a chance!"
var bakuraBad = "NO!"
var bakuraWin = "You lose!"
var maiIntro = "Let's Play!"
var maiGood = "Now that's more like it!" 
var maiBad = "That's not very nice"
var maiWin = "Better luck next time!"

function p1IntroDialogue (){
	var d = document.querySelector("#p1Dial");
	var e = document.getElementById("p1Duelist");
	var f = eval((document.getElementById("p1Duelist").options[e.selectedIndex].value+"Intro"));
	d.innerHTML = f;
	d.classList.remove("Hidden")
	setTimeout(function(){
		d.classList.add("Hidden");
}, 4000);
}

function p2IntroDialogue (){
	var d = document.querySelector("#p2Dial");
	var e = document.getElementById("p2Duelist");
	var f = eval((document.getElementById("p2Duelist").options[e.selectedIndex].value+"Intro"));
	d.innerHTML = f;
	d.classList.remove("Hidden")
	setTimeout(function(){
		d.classList.add("Hidden");
}, 4000);
}

function p1GoodDialogue (){
	var d = document.querySelector("#p1Dial");
	var e = document.getElementById("p1Duelist");
	var f = eval(document.getElementById("p1Duelist").options[e.selectedIndex].value+"Good");
	d.innerHTML = f;
	d.classList.remove("Hidden")
	setTimeout(function(){
		d.classList.add("Hidden");
}, 4000);
}

function p2GoodDialogue (){
	var d = document.querySelector("#p2Dial");
	var e = document.getElementById("p2Duelist");
	var f = eval(document.getElementById("p2Duelist").options[e.selectedIndex].value+"Good");
	d.innerHTML = f;
	d.classList.remove("Hidden")
	setTimeout(function(){
		d.classList.add("Hidden");
}, 4000);
}

function p1BadDialogue (){
	var d = document.querySelector("#p1Dial");
	var e = document.getElementById("p1Duelist");
	var f = eval(document.getElementById("p1Duelist").options[e.selectedIndex].value+"Bad");
	d.innerHTML = f;
	d.classList.remove("Hidden")
	setTimeout(function(){
		d.classList.add("Hidden");
}, 4000);
}

function p2BadDialogue (){
	var d = document.querySelector("#p2Dial");
	var e = document.getElementById("p2Duelist");
	var f = eval(document.getElementById("p2Duelist").options[e.selectedIndex].value+"Bad");
	d.innerHTML = f;
	d.classList.remove("Hidden")
	setTimeout(function(){
		d.classList.add("Hidden");
}, 4000);
}


function p1WinDialogue (){
	var d = document.querySelector("#p1Dial");
	var e = document.getElementById("p1Duelist");
	var f = eval(document.getElementById("p1Duelist").options[e.selectedIndex].value+"Win");
	d.innerHTML = f;
	d.classList.remove("Hidden")
	setTimeout(function(){
		d.classList.add("Hidden");
}, 4000);
}

function p2WinDialogue (){
	var d = document.querySelector("#p2Dial");
	var e = document.getElementById("p2Duelist");
	var f = eval(document.getElementById("p2Duelist").options[e.selectedIndex].value+"Win");
	d.innerHTML = f;
	d.classList.remove("Hidden")
	setTimeout(function(){
		d.classList.add("Hidden");
}, 4000);
}

//Coin Flip

function coinFlip(){
	var coin = Math.round((Math.random()) * 3);
	if(coin > 1){
		document.querySelector("#coin").src = "images/heads.png";
		document.querySelector("#coinResult").innerHTML = "Heads"
	}
	else {
		document.querySelector("#coin").src = "images/tails.png";
		document.querySelector("#coinResult").innerHTML = "Tails"
	}	
		document.querySelector("#coin").classList.remove("Hidden");
		document.querySelector("#coinResult").classList.remove("Hidden");

	setTimeout(function(){
		document.querySelector("#coin").classList.add("Hidden");
		document.querySelector("#coinResult").classList.add("Hidden");
		}, 4000);
}

document.getElementById("flipCoin").addEventListener("click", coinFlip);
