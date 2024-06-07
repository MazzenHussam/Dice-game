   // Taking the name and announce it with the winner
   let playerName1 = prompt(" player name 1 :");
   let playerName2 = prompt(" player name 1 :");
   // the rest of the code
   var randomNumber1 = Math.floor(Math.random()*6)+1;
    var randomImage = "dice"+randomNumber1+".png";
    var randomImageSource = "./images/"+randomImage;
    var imageSelector = document.querySelector(".img2");
    imageSelector.setAttribute ("src",randomImageSource);

    var randomNumber2 =Math.floor(Math.random()*6)+1;
    var randomImage2 = "dice"+randomNumber2+".png";
    var randomImageSource2= "./images/"+randomImage2;
    var imageSelector2 = document.querySelector(".img1");
    imageSelector2.setAttribute("src",randomImageSource2);
// Now the Text 
if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = playerName1 +" Wins";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = playerName2 +" Wins";
} else {
    document.querySelector("h1").innerHTML = "Draw!!";
}

