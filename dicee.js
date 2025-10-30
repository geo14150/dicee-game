var btn = document.querySelector("#mybtn");

btn.addEventListener("click", function() {
  rollDice();
   
});
function rollDice(){
  var randomNumber1=Math.floor(Math.random()*6)+1;//1-6
  var randomNumber2=Math.floor(Math.random()*6)+1;

  var randomImage1="dice"+randomNumber1+".png";//dice1.png-dice6.png
  var randomImage2="dice"+randomNumber2+".png";

  var imageSource1= "images/"+ randomImage1;//images/dice1.png-images/dice6.png
  var imageSource2= "images/"+ randomImage2;

  var image1=document.querySelectorAll("img")[0];//class="img1" in html
  var image2=document.querySelectorAll("img")[1];//class="img2" 

  image1.setAttribute("src",imageSource1);
  image2.setAttribute("src",imageSource2);
  var resultText = "";
  if (randomNumber1>randomNumber2){
    resultText='Player 1 Wins';
   
  }
  else if(randomNumber1<randomNumber2){
    resultText='Player 2 Wins';
  }
  else {
    resultText='It is a Draw';
  }
  
  updateButtonText(resultText);
}

function updateButtonText(text) {
  document.querySelector('#mybtn').innerHTML = text;

  // After showing the result, reset the button text after a delay (e.g., 2 seconds)
  setTimeout(function() {
    document.querySelector('#mybtn').innerHTML = 'Refresh';
  }, 1000);
}
rollDice();

