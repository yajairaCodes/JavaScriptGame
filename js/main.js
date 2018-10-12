var botScore=0,
	playerScore=0;

    function playerThrowsRock(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}

function playerThrowsScissors(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");

}

function playerThrowsPaper(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
}

function getRandomWeapon(){
    var randomNumber=Math.floor(Math.random() * 3 + 1);
	var botsWeapon="rock";
	if(randomNumber === 1){
		botsWeapon="scissors";
	}
	else if(randomNumber === 2){
		botsWeapon="paper";
	}
	return botsWeapon;
}

function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}

function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
}

function increasePlayerScore(){
playerScore+=1
document.getElementById("humanScore").innerHTML=playerScore;
displayCompleteMessage("You have played this before, huh? Congrats you win!");
}

function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}
