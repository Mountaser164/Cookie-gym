
let score = 0;
let AutoClickers = 0;
let Upgrad = 0;
let second = 3000;
let gosetInterval = 0;
let upgradseninterval = 0;
let second2 = 2000;




function addPoint(){
   
    score++;
    showScore();
    
    
}


function buy(){
    if(score >= 10 ){         
        score = score -10;
        AutoClickers++;   
        showScore();
        showhand();

        document.getElementById("Overzicht").innerHTML=AutoClickers;
        document.getElementById("AantalClickers").innerHTML=AutoClickers; 

           console.log("Your buy is successfull");
           alert("Your buy is successful");

           startOutocliker()


    }else{

          console.log("You don't have enough cookies");
          alert("You don't have enough cookies");
    }
        
}
 
function showScore(){

    document.getElementById("scoor").innerHTML=score;

}



function Upgrades(){
    if(score >= 20){
        score = score -20;
        Upgrad++;
        showhand2()
        showScore();
        

        document.getElementById("overzicht2").innerHTML=Upgrad;
        document.getElementById("showupgrades").innerHTML= Upgrad; 

        alert("Your buy is successfull");
        
        startUpgradcliker()

    }else{
        alert("You don't have enough cookies");

    }

}


// setInterval(addPoint, 1000);

function startOutocliker(){

    if( gosetInterval == 0)
        gosetInterval = setInterval(handenaddpoint, second);

}

function showhand(){
document.getElementById("handen").innerHTML +=' <img class = "hand"src="icons8-hand-48.png" alt="handfoto">'
}

function handenaddpoint(){
    score = score + AutoClickers;
    score = score + Upgrad;
    showScore();
}





function startUpgradcliker(){

    if(upgradseninterval == 0)
        upgradseninterval = setInterval(handenaddpoint, second2);
        

}


function showhand2(){
    document.getElementById("handen2").innerHTML +=' <img class = "hand"src="icons8-hand-24.png" alt="handfoto">'
    }

