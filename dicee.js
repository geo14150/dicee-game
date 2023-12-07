//function handleButtonClick() {
  //  const images = [ 'dice1.png','dice2.png','dice3.png','dice4.png','dice5.png','dice6.png'
    //];

    
  //let randomIndex1 = Math.floor(Math.random() * images.length);
  //  let randomIndex2 = Math.floor(Math.random() * images.length);

  //  randomImage1 = images[randomIndex1];
  //  randomImage2 = images[randomIndex2];

  //  const img1Elements = document.getElementsByClassName('img1');
  //    for (let i = 0; i < img1Elements.length; i++) {
   //     img1Elements[i].src = randomImage1;
  //    }

  //    // Set the random image for elements with class 'img2'
  //    const img2Elements = document.getElementsByClassName('img2');
  //    for (let i = 0; i < img2Elements.length; i++) {
  //      img2Elements[i].src = randomImage2;
  //    }
//}

// document.addEventListener('DOMContentLoaded', function () {
    // Attach the event listener to the button
//    const changeImageButton = document.getElementById('btn');
//    changeImageButton.addEventListener('click',handleButtonClick);
//  });
//const imageIndex1= document.querySelector(".img1");
//const imageIndex2=document.querySelector(".img2");
const images = [
  'dice1.png',
  'dice2.png',
  'dice3.png',
  'dice4.png',
  'dice5.png',
  'dice6.png'
];
let randomNumber1=Math.floor(Math.random() * images.length);
let randomNumber2=Math.floor(Math.random() * images.length);
let randomImage1 = images[randomNumber1];
let randomImage2 = images[randomNumber2];


const image1=document.querySelector(".img1");
image1.setAttribute("src",randomImage1);
const image2=document.querySelector(".img2");
image2.setAttribute("src",randomImage2);
//document.querySelector(".img2").setAttribute("randomImage");
if (randomImage1<randomImage2){
  document.querySelector("h1").innerText="player2 win";
}
else if(randomImage1>randomImage2){
  document.querySelector("h1").innerText="Player1 wins";
}else{
  document.querySelector("h1").innerText="Draw";
}


