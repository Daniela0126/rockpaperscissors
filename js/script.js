// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function(){
    $("#userChoice").text($("#input").val());
});

var userChoice = "";
var computerChoice = "";
var winner = "";

var randomNumber = 0;
// DOCUMENT READY FUNCTION BELOW

$("#shoot").click(function(){
    var randomNumber = Math.random();

if (randomNumber < .33) {
    computerChoice = "scissors";
    $("#computerChoice").html("scissors")
}
else if(randomNumber > .66 && randomNumber < .33){
    computerChoice = "paper";
    $("#computerChoice").html("paper")
}
else if(randomNumber < .99 && randomNumber > .66){
    computerChoice ="rock";
    $("#computerChoice").html("rock")
}


userChoice = $("#input").val()

//rock
    if(userChoice === 'rock' && computerChoice === 'paper'){
         $("#winner").html("Computer Wins")
    }
    else if(userChoice === 'rock' && computerChoice === 'scissors'){
            $("#winner").html("User Wins")
    }
   else if(computerChoice === 'rock' && userChoice === 'paper'){
         $("#winner").html("User Wins")
    }
    else if(computerChoice === 'rock' && userChoice === 'scissors'){
             $("#winner").html("Computer Wins")
    }
    
//paper
else if(userChoice === 'paper' && computerChoice === 'scissors'){
     $("#winner").html("Computer Wins")
}
else if(userChoice === 'paper' && computerChoice === 'rock'){
     $("#winner").html("User Wins")
}
else if(computerChoice === 'paper' && userChoice === 'scissors'){
     $("#winner").html("Computer Wins")
}
else if(computerChoice === 'paper' && userChoice === 'rock'){
     $("#winner").html("User Wins")
}

//scissors
else if(userChoice === 'scissors' && computerChoice === 'rock'){
     $("#winner").html("Computer Wins")
}
else if(userChoice === 'scissors' && computerChoice === 'paper'){
     $("#winner").html("User Wins")
}
else if(computerChoice === 'scissors' && userChoice === 'paper'){
     $("#winner").html("Computer Wins")
}
else if(computerChoice === 'scissors' && userChoice === 'rock'){
     $("#winner").html("User Wins")
}
});