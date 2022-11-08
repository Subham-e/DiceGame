var randomNumber1 = Math.floor(Math.random()*6) +1;
var randomNumber2 = Math.floor(Math.random()*6) +1;


var player1img = "images/dice"+ randomNumber1+".png";
var player2img = "images/dice"+ randomNumber2+".png";


document.querySelector(".img1").setAttribute("src",player1img);
document.querySelector(".img2").setAttribute("src",player2img);

if(randomNumber1 > randomNumber2){
  document.getElementsByTagName("h1")[0].innerHTML="Player 1 wins!";
}else if(randomNumber1 < randomNumber2){
  document.getElementsByTagName("h1")[0].innerHTML="Player 2 wins!";
} else{
  document.getElementsByTagName("h1")[0].innerHTML="Draw!";

}
