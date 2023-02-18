var gamePattern=[];
var buttonColor=["red","blue","green","yellow"];

function nextSequence(){
  var randomNumber= Math.floor(Math.random()*4);



  var randomChooseColor=buttonColor[randomNumber];


  gamePattern.push(randomChooseColor);

  $("#"+ randomChooseColor).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio=new Audio("sounds/" + randomChooseColor + ".mp3");
  audio.play();
}
