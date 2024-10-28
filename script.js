// Variabelen declareren
let Upgrad = 0;
let second = 1000;
let gosetInterval = 0;
let upgradseninterval = 0;
let second2 = 1000;
let level = 0;
let rechedDiamond = false;

let AutoClickers1 = 0;
let AutoClickers2 = 0;
let AutoClickers3 = 0;
let AutoClickers4 = 0;
let AutoClickers5 = 0;

// Start de game
function startGyme() {
    if (localStorage.getItem('score') !== null) {
        showScore();
    } else {
        localStorage.setItem("score", 0);
    }

    if (localStorage.getItem("AutoClickers1") !== null) {
        //showAutoClickers();
        //startOutocliker();
    } else {
        localStorage.setItem("AutoClickers1", 0);
    }

    if (localStorage.getItem("AutoClickers2") !== null) {
        //showAutoClickers();
        //startOutocliker();
    } else {
        localStorage.setItem("AutoClickers2", 0);
    }
    
    if (localStorage.getItem("AutoClickers3") !== null) {
        //showAutoClickers();
        //startOutocliker();
    } else {
        localStorage.setItem("AutoClickers3", 0);
    }

    


    if (localStorage.getItem("AutoClickers4") !== null) {
        //showAutoClickers();
        //startOutocliker();
    } else {
        localStorage.setItem("AutoClickers4", 0);
    }
}


// Punten toevoegen
function addPoint() {
    let score = parseInt(localStorage.getItem("score"));

    console.log(score);
    score++;
    localStorage.setItem("score", score);
    
    //if (level < 300) level++;
    showScore();
    //showlevel();

    /*if (level == 100) {
        alert("You passed the level zilver");
    }
    if (level == 200) {
        alert("You passed the level gold");
    }
    if (level == 300 && rechedDiamond == false) {
        alert("You passed the level diamond");
        rechedDiamond = true;
    }*/
}

// Score weergeven
function showScore() {
    document.getElementById("scoor").innerHTML = localStorage.getItem("score");
}

// Automatische clickers weergeven
function showAutoClickers() {
    document.getElementById("Overzicht").innerHTML = localStorage.getItem("AutoClickers1");
    document.getElementById("AantalClickers").innerHTML = localStorage.getItem("AutoClickers1");
}

// Automatische clicker kopen
function buy(sort) {
    let score = parseInt(localStorage.getItem("score"));
    let cost = 0
    if(sort == 'auto-clickers-1') {
        cost = 10;
    }

    if(sort == 'auto-clickers-2') {
        cost = 50;
    }

    if(sort == 'auto-clickers-3') {
        cost = 100;
    }

    if(sort == 'auto-clickers-4') {
        cost = 150;
    }

    if(sort == 'auto-clickers-5') {
        cost = 200;
    }

    if (score >= cost) {
        score -= cost;
        localStorage.setItem("score", score);

        if(sort == 'auto-clickers-1') {
            let AutoClickers1 = parseInt(localStorage.getItem("AutoClickers1"));
            AutoClickers1++;
            localStorage.setItem("AutoClickers1", AutoClickers1);
        }
        
        if(sort == 'auto-clickers-2') {
            let AutoClickers2 = parseInt(localStorage.getItem("AutoClickers2"));
            AutoClickers2++;
            localStorage.setItem("AutoClickers2", AutoClickers2);
        }
    
        if(sort == 'auto-clickers-3') {
            let AutoClickers3 = parseInt(localStorage.getItem("AutoClickers3"));
            AutoClickers3++;
            localStorage.setItem("AutoClickers3", AutoClickers3);
        }


        if(sort == 'auto-clickers-4') {
            let AutoClickers4 = parseInt(localStorage.getItem("AutoClickers4"));
            AutoClickers4++;
            localStorage.setItem("AutoClickers4", AutoClickers4);
        }

        if(sort == 'auto-clickers-5'){
            let AutoClickers5 = parseInt(localStorage.getItem("AutoClickers5"));
            AutoClickers5++;
            localStorage.setItem("AutoCickers5", AutoClickers5);
        }

        showScore();
        showAutoClickersImg(sort);
        //showhand();
        //showAutoClickers();

        alert("Your buy is successful");

        startOutocliker();
    } else {
        alert("You don't have enough cookies");
    }
}

// Niveau weergeven
function showlevel() {
    if (level <= 100) {
        document.getElementById("zilv").innerHTML = level + "%";
        document.getElementById("zilv").style.width = level + "%";
    }
    if (level <= 200 && level > 100) {
        document.getElementById("gold").innerHTML = (level - 100) + "%";
        document.getElementById("gold").style.width = (level - 100) + "%";
    }
    if (level <= 300 && level > 200) {
        document.getElementById("diamond").innerHTML = (level - 200) + "%";
        document.getElementById("diamond").style.width = (level - 200) + "%";
    }
}

// Upgrades kopen
function Upgrades() {
    let score = parseInt(localStorage.getItem("score"));

    if (score >= 20) {
        score -= 20;
        localStorage.setItem("score", score);

        Upgrad++;
        showhand2();
        showScore();

        document.getElementById("overzicht2").innerHTML = Upgrad;
        document.getElementById("showupgrades").innerHTML = Upgrad;

        alert("Your buy is successful");

        startUpgradcliker();
    } else {
        alert("You don't have enough cookies");
    }
}

// Automatische punten toevoegen met interval
function startOutocliker() {
    if (gosetInterval == 0) {
        gosetInterval = setInterval(handenaddpoint, second);
    }
}

// Hand-icoontje toevoegen voor de clicker
function showhand() {
    document.getElementById("handen").innerHTML += '<img class="hand" src="images/icons8-hand-48.png" alt="handfoto">';
}

function showAutoClickersImg(sort) {
    if(sort == 'auto-clickers-1')
        document.getElementById("auto-clickers-1").innerHTML += '<img class="hand" src="images/icons8-hand-24.png" alt="handfoto">';

    if(sort == 'auto-clickers-2')
        document.getElementById("auto-clickers-2").innerHTML += '<img class="hand" src="images/Banden.png" alt="handfoto">';

    if(sort == 'auto-clickers-3')
        document.getElementById("auto-clickers-3").innerHTML += '<img class="hand" src="images/auto.png" alt="handfoto">';


    if(sort == 'auto-clickers-4')
        document.getElementById("auto-clickers-4").innerHTML += '<img class="hand" src="images/vliegtuig.png" alt="handfoto">';

    if(sort == 'auto-clickers-5')
        document.getElementById("auto-clickers-5").innerHTML += '<img class="hand"  src="images/boot.png" alt=handfoto">';


}

// Punten toevoegen voor elke hand-icoon
function handenaddpoint() {
    let score = parseInt(localStorage.getItem("score"));
    let AutoClickers1 = parseInt(localStorage.getItem("AutoClickers1"));
    let AutoClickers2 = parseInt(localStorage.getItem("AutoClickers2"));
    let AutoClickers3 = parseInt(localStorage.getItem("AutoClickers3"));
    let AutoClickers4 = parseInt(localStorage.getItem("AutoClickers4"));
    let AutoClickers5 = parseInt(localStorage.getItem("AutoClickers5"));


    score = score + (AutoClickers1 * 1 + AutoClickers2 * 2 + AutoClickers3 * 4 + AutoClickers3 * 6 + AutoClickers3 * 8);
    localStorage.setItem("score", score);

    showScore();
}

// Automatische punten toevoegen door upgrades
function startUpgradcliker() {
    if (upgradseninterval == 0) {
        upgradseninterval = setInterval(handenaddpoint, second2);
    }
}

// Kleinere hand-icoontjes weergeven voor upgrades
function showhand2() {
    document.getElementById("handen2").innerHTML += '<img class="hand" src="images/icons8-hand-24.png" alt="handfoto">';
}

// Start de game bij het laden van de pagina
startGyme();

// Interval om elke seconde een punt toe te voegen
//setInterval(addPoint, 1000);
