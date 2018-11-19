// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function(){
    $("#userChoice").text($("#input") .val());
});

var userChoice = "";
var computerChoice = "";
var winner = "";

var randomNumber = 0;
// DOCUMENT READY FUNCTION BELOW

$("shoot").click(function(){
    userChoice = $("#userChoice")
    
});