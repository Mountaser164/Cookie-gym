let score = 0;
let AutoClickers = 0;
let Upgrad = 0;

function addPoint(){
    score++;
    showScore();
    
    
}


function buy(){
    if(score >= 10 ){
        score = score -10;
        AutoClickers++;

        showScore();
        document.getElementById("Overzicht").innerHTML=AutoClickers;
        document.getElementById("AantalClickers").innerHTML=AutoClickers;

        

        console.log("Your buy is succesful");
        alert("Your buy is succesful");

    }else{
        console.log("Your point is not enough");
        alert("Your point is not enough");
    }
        
}

function showScore(){

    document.getElementById("scoor").innerHTML=score;

}


function Upgrades(){
    if(score >= 20){
        score = score -20;
        Upgrad++;

        showScore();

        document.getElementById("overzicht2").innerHTML=Upgrad;
        alert("Your buy is succesful");

    }else{
        alert("Your point is not enough");

    }

}