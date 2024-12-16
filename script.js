function random_number() {
    return Math.floor(Math.random()*6+1);
}

var random_number1=random_number();
var random_number2=random_number();

var dice1=document.querySelector(".img1").getAttribute("src");
var new_dice1=document.querySelector(".img1").setAttribute("src" ,"./images/dice"+random_number1+dice1.slice(14));

var dice2=document.querySelector(".img2").getAttribute("src");
var new_dice1=document.querySelector(".img2").setAttribute("src" ,"./images/dice"+random_number2+dice2.slice(14));

if(random_number1>random_number2){
    document.querySelector("h1").innerHTML="Player 1 wins🥇";
}

else if(random_number1<random_number2){
    document.querySelector("h1").innerHTML="🥇Player 2 wins";
}

else {
    document.querySelector("h1").innerHTML="Draw";
}