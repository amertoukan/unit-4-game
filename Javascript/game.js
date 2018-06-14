$(document).ready(function(){
    //Display inital score to zero
    console.log("Resetting numbers..");
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var red = 0; 
    var blue = 0;
    var yellow = 0;
    var green = 0; 
    var randomNum = 0; 
    console.log("Numbers reset");
$("#score").html(totalScore);

//Generating randomNum
const generateRandomNum = function(){
    let random = Math.floor(Math.random()*(120 - 19) + 19);
    randomNum += random;
    return random;
}
$("#randomNum").html(generateRandomNum());

//Generating random crystal numbers function
const generateCrystalNum = function (){
    let random = Math.floor (Math.random() * (12 - 1) +1 );
    return random;
}
//Generate random crystal function to each option 
const crystNum = function (){
red += generateCrystalNum();
blue += generateCrystalNum();
yellow += generateCrystalNum();
green += generateCrystalNum() ;
}
crystNum();
//Assign button clicked to the right crystal 
$("button").on("click",function(){
    if (this.id === "red"){
        totalScore += red;
    } else if (this.id === "blue"){
        totalScore += blue; 
    } else if (this.id === "yellow"){
        totalScore+= yellow;
    } else if (this.id === "green"){
        totalScore += green;
    }
//setting total score to the value pressed 
$("#score").html(totalScore);
winOrLose();
});
const winOrLose = function(){ 
    if (totalScore === randomNum){
        wins += 1;
        $("#win").html(wins);
        alert ("Winner Winner Chicken Dinner!");
        reset();
    } else if (totalScore > randomNum){
        losses += 1; 
        $("#loss").html(losses);
        alert ("Oh no! You lost, try again.")
        reset();
    }
}
//Resetting all values to zero 
const reset = function () {
totalScore = 0;
red = 0;
blue = 0;
yellow = 0; 
green = 0;
randomNum = 0;
crystNum();
$("#randomNum").html(randomNum += generateRandomNum());
}

});