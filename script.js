// Variabelen declareren
let Upgrad = 0;
let second = 1000;
let gosetInterval = 0;
let upgradseninterval = 0;
let second2 = 1000;
let level = 0;
let rechedDiamond = false;




// Start de game
function startGyme() {
    
    if (localStorage.getItem('score') !== null && localStorage.getItem('score') == NaN) {
        showScore();
    } else {
        localStorage.setItem("score", 0);
        
    }



    if (localStorage.getItem("AutoClickers1") !== null) {

        document.getElementById("auto-clickers-1").style.backgroundImage = "url('images/zee.jpeg')";

       for(let i = 1; i <= localStorage.getItem("AutoClickers1"); i++)
            document.getElementById("auto-clickers-1").innerHTML += '<img class="hand" src="images/icons8-hand-24.png" alt="handfoto">';
    } else {
        localStorage.setItem("AutoClickers1", 0);
    }

    if (localStorage.getItem("AutoClickers2") !== null) {
        document.getElementById("auto-clickers-2").style.backgroundImage = "url('images/blankBG.jpg')";
        for(let i = 1; i <= localStorage.getItem("AutoClickers2"); i++)
            document.getElementById("auto-clickers-2").innerHTML += '<img class="hand" src="images/Banden.png" alt="handfoto">';
    } else {
        localStorage.setItem("AutoClickers2", 0);
    }
    
    if (localStorage.getItem("AutoClickers3") !== null) {
        for(let i = 1; i <= localStorage.getItem("AutoClickers3"); i++)
            document.getElementById("auto-clickers-3").innerHTML += '<img class="hand" src="images/auto.png" alt="handfoto">';
    } else {
        localStorage.setItem("AutoClickers3", 0);
    }

    if (localStorage.getItem("AutoClickers4") !== null) {
        for(let i = 1; i <= localStorage.getItem("AutoClickers4"); i++)
            document.getElementById("auto-clickers-4").innerHTML += '<img class="hand" src="images/auto-clicker-4.png" alt="handfoto">';
    } else {
        localStorage.setItem("AutoClickers4", 0);
    }

    if (localStorage.getItem("AutoClickers5") !== null) {
        for(let i = 1; i <= localStorage.getItem("AutoClickers5"); i++)
            document.getElementById("auto-clickers-5").innerHTML += '<img class="hand" src="images/auto-clicker-5.png" alt="handfoto">';
    } else {
        localStorage.setItem("AutoClickers5", 0);
    }

    if (localStorage.getItem("AutoClickers6") !== null) {
        for(let i = 1; i <= localStorage.getItem("AutoClickers6"); i++)
            document.getElementById("auto-clickers-6").innerHTML += '<img class="hand" src="images/auto-clicker-6.png" alt="handfoto">';
    } else {
        localStorage.setItem("AutoClickers6", 0);
    }

    if (localStorage.getItem("AutoClickers7") !== null) {
        for(let i = 1; i <= localStorage.getItem("AutoClickers7"); i++)
            document.getElementById("auto-clickers-7").innerHTML += '<img class="hand" src="images/auto-clicker-7.png" alt="handfoto">';
    } else {
        localStorage.setItem("AutoClickers7", 0);
    }

    if (localStorage.getItem("AutoClickers8") !== null) {
        for(let i = 1; i <= localStorage.getItem("AutoClickers8"); i++)
            document.getElementById("auto-clickers-8").innerHTML += '<img class="hand" src="images/auto-clicker-8.png" alt="handfoto">';
    } else {
        localStorage.setItem("AutoClickers8", 0);
    }


    if(localStorage.getItem("autoUbgrade1")!==null) {

        document.getElementById("autoUbgrade1").innerHTML = localStorage.getItem("autoUbgrade1")
    }else{
        localStorage.setItem("autoUbgrade1" , 1);
    }


    if(localStorage.getItem("autoUbgrade2")!==null) {

        document.getElementById("autoUbgrade2").innerHTML = localStorage.getItem("autoUbgrade2")
    }else{
        localStorage.setItem("autoUbgrade2" , 2);
    }


    if(localStorage.getItem("autoUbgrade3")!==null) {

        document.getElementById("autoUbgrade3").innerHTML = localStorage.getItem("autoUbgrade3")
    }else{
        localStorage.setItem("autoUbgrade3" , 4);
    }

    if(localStorage.getItem("autoUbgrade4")!==null) {

        document.getElementById("autoUbgrade4").innerHTML = localStorage.getItem("autoUbgrade4")
    }else{
        localStorage.setItem("autoUbgrade4" , 8);
    }



    if(localStorage.getItem("autoUbgrade5")!==null) {

        document.getElementById("autoUbgrade5").innerHTML = localStorage.getItem("autoUbgrade5")
    }else{
        localStorage.setItem("autoUbgrade5" , 16);
    }


    if(localStorage.getItem("autoUbgrade6")!==null) {

        document.getElementById("autoUbgrade6").innerHTML = localStorage.getItem("autoUbgrade6")
    }else{
        localStorage.setItem("autoUbgrade6" , 32);
    }


    if(localStorage.getItem("autoUbgrade7")!==null) {

        document.getElementById("autoUbgrade7").innerHTML = localStorage.getItem("autoUbgrade7")
    }else{
        localStorage.setItem("autoUbgrade7" , 64);
    }


    if(localStorage.getItem("autoUbgrade8")!==null) {

        document.getElementById("autoUbgrade8").innerHTML = localStorage.getItem("autoUbgrade8")
    }else{
        localStorage.setItem("autoUbgrade8" , 128);
    }

 



    showCookiePreSecond();
    startOutocliker();
}


// Punten toevoegen
function addPoint() {
    let score = parseInt(localStorage.getItem("score"));
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
function buy(sort){
    let score = parseInt(localStorage.getItem("score"));
    let cost = 0; 
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
        cost = 1500;
    }

    if(sort == 'auto-clickers-5') {
        cost = 2000;
    }

    if(sort == 'auto-clickers-6') {
        cost = 4000;
    }

    if(sort == 'auto-clickers-7') {
        cost = 8000;
    }

    if(sort == 'auto-clickers-8') {
        cost = 16000;
    }

    if (score >= cost) {
        score -= cost;
        localStorage.setItem("score", score);

        if(sort == 'auto-clickers-1') {
            let AutoClickers1 = parseInt(localStorage.getItem("AutoClickers1"));
            AutoClickers1++;
            localStorage.setItem("AutoClickers1", AutoClickers1);

            document.getElementById("auto-clickers-1").style.backgroundImage = "url('images/zee.jpeg')";

        }
        
        if(sort == 'auto-clickers-2') {
            let AutoClickers2 = parseInt(localStorage.getItem("AutoClickers2"));
            AutoClickers2++;
            localStorage.setItem("AutoClickers2", AutoClickers2);

            document.getElementById("auto-clickers-2").style.backgroundImage = "url('images/blankBG.jpg')";
        }
    
        if(sort == 'auto-clickers-3') {
            let AutoClickers3 = parseInt(localStorage.getItem("AutoClickers3"));
            AutoClickers3++;
            localStorage.setItem("AutoClickers3", AutoClickers3);
            document.getElementById("auto-clickers-3").style.backgroundImage = "url('images/zee.jpeg')";
        }

        if(sort == 'auto-clickers-4') {
            let AutoClickers4 = parseInt(localStorage.getItem("AutoClickers4"));
            AutoClickers4++;
            localStorage.setItem("AutoClickers4", AutoClickers4);
            document.getElementById("auto-clickers-4").style.backgroundImage = "url('images/blankBG.jpg')";
        }

        if(sort == 'auto-clickers-5') {
            let AutoClickers5 = parseInt(localStorage.getItem("AutoClickers5"));
            AutoClickers5++;
            localStorage.setItem("AutoClickers5", AutoClickers5);
            document.getElementById("auto-clickers-5").style.backgroundImage = "url('images/zee.jpeg')";
        }

        if(sort == 'auto-clickers-6') {
            let AutoClickers6 = parseInt(localStorage.getItem("AutoClickers6"));
            AutoClickers6++;
            localStorage.setItem("AutoClickers6", AutoClickers6);
            document.getElementById("auto-clickers-6").style.backgroundImage = "url('images/blankBG.jpg')";
        }

        if(sort == 'auto-clickers-7') {
            let AutoClickers7 = parseInt(localStorage.getItem("AutoClickers7"));
            AutoClickers7++;
            localStorage.setItem("AutoClickers7", AutoClickers7);
            document.getElementById("auto-clickers-7").style.backgroundImage = "url('images/zee.jpeg')";
        }

        if(sort == 'auto-clickers-8') {
            let AutoClickers8 = parseInt(localStorage.getItem("AutoClickers8"));
            AutoClickers8++;
            localStorage.setItem("AutoClickers8", AutoClickers8);
            document.getElementById("auto-clickers-8").style.backgroundImage = "url('images/blankBG.jpg')";
        }

        showScore();
        showAutoClickersImg(sort);
        //showhand();
        //showAutoClickers();

        alert("Your buy is successful");

        showCookiePreSecond();
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
function Upgrades(soort) {
    let score = parseInt(localStorage.getItem("score"));

    let cost = 0; 
    if(soort == 'autoUbgrade1') {
        cost = 20;
    }

    if(soort == 'autoUbgrade2') {
        cost = 60;
    }

    if(soort == 'autoUbgrade3') {
        cost = 120;
    }

    if(soort == 'autoUbgrade4') {
        cost = 1500;
    }

    if(soort == 'autoUbgrade5') {
        cost = 2200;
    }


    if(soort == 'autoUbgrade6') {
        cost = 4200;
    }

    if(soort == 'autoUbgrade7') {
        cost = 8200;
    }

    if(soort == 'autoUbgrade8') {
        cost = 16200 ;
    }


    if (score >= cost) {
        score -= cost;
        localStorage.setItem("score", score);

        // Upgrad++;

        if(soort == "autoUbgrade1" ){
            let autoUbgrade1 = localStorage.getItem( "autoUbgrade1")

        autoUbgrade1 = autoUbgrade1 * 2 ;

        localStorage.setItem("autoUbgrade1", autoUbgrade1);

        document.getElementById("autoUbgrade1").innerHTML = autoUbgrade1;
    }



        if(soort == "autoUbgrade2" ){
            let autoUbgrade2 = localStorage.getItem( "autoUbgrade2")

            autoUbgrade2 = autoUbgrade2 * 2 ;
    
            localStorage.setItem("autoUbgrade2", autoUbgrade2);
            document.getElementById("autoUbgrade2").innerHTML = autoUbgrade2;
        }


        
        if(soort == "autoUbgrade3" ){
            let autoUbgrade3 = localStorage.getItem( "autoUbgrade3")

            autoUbgrade3 = autoUbgrade3 * 2 ;
    
            localStorage.setItem("autoUbgrade3", autoUbgrade3);
            document.getElementById("autoUbgrade3").innerHTML = autoUbgrade3;
        }


        if(soort == "autoUbgrade4" ){
            let autoUbgrade4 = localStorage.getItem( "autoUbgrade4")

            autoUbgrade4 = autoUbgrade4 * 2 ;
    
            localStorage.setItem("autoUbgrade4", autoUbgrade4);
            document.getElementById("autoUbgrade4").innerHTML = autoUbgrade4;
        }



        if(soort == "autoUbgrade5" ){
            let autoUbgrade5 = localStorage.getItem( "autoUbgrade5")

            autoUbgrade5 = autoUbgrade5 * 2 ;
    
            localStorage.setItem("autoUbgrade5", autoUbgrade5);
            document.getElementById("autoUbgrade5").innerHTML = autoUbgrade5;
        }
     

        if(soort == "autoUbgrade6" ){
            let autoUbgrade6 = localStorage.getItem( "autoUbgrade6")

            autoUbgrade6 = autoUbgrade6 * 2 ;
    
            localStorage.setItem("autoUbgrade6", autoUbgrade6);
            document.getElementById("autoUbgrade6").innerHTML = autoUbgrade6;
        }


        if(soort == "autoUbgrade7" ){
            let autoUbgrade7 = localStorage.getItem( "autoUbgrade7")

            autoUbgrade7 = autoUbgrade7 * 2 ;
    
            localStorage.setItem("autoUbgrade7", autoUbgrade7);
            document.getElementById("autoUbgrade7").innerHTML = autoUbgrade7;
        }



        if(soort == "autoUbgrade8" ){
            let autoUbgrade8 = localStorage.getItem( "autoUbgrade8")

            autoUbgrade8 = autoUbgrade8 * 2 ;
    
            localStorage.setItem("autoUbgrade8", autoUbgrade8);
            document.getElementById("autoUbgrade8").innerHTML = autoUbgrade8;
        }
     

        // showhand2();
        showScore();
        showCookiePreSecond()

        

        // document.getElementById("overzicht2").innerHTML = Upgrad;
        // document.getElementById("showupgrades").innerHTML = Upgrad;

        alert("Your buy is successful");

        //startUpgradcliker();
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
        document.getElementById("auto-clickers-2").innerHTML += '<img class="Banden" src="images/Banden.png" alt="handfoto">';

    if(sort == 'auto-clickers-3')
        document.getElementById("auto-clickers-3").innerHTML += '<img class="auto" src="images/auto.png" alt="handfoto">';

    if(sort == 'auto-clickers-4')
        document.getElementById("auto-clickers-4").innerHTML += '<img class="auto" src="images/auto-clicker-4.png" alt="handfoto">';
    
    if(sort == 'auto-clickers-5')
        document.getElementById("auto-clickers-5").innerHTML += '<img class="auto" src="images/auto-clicker-5.png" alt="handfoto">';
    
    if(sort == 'auto-clickers-6')
        document.getElementById("auto-clickers-6").innerHTML += '<img class="auto" src="images/auto-clicker-6.png" alt="handfoto">';
    
    if(sort == 'auto-clickers-7')
        document.getElementById("auto-clickers-7").innerHTML += '<img class="auto" src="images/auto-clicker-7.png" alt="handfoto">';
    
    if(sort == 'auto-clickers-8')
        document.getElementById("auto-clickers-8").innerHTML += '<img class="auto" src="images/auto-clicker-8.png" alt="handfoto">';

}

// Punten toevoegen voor elke hand-icoon
function handenaddpoint() {
    let score = parseInt(localStorage.getItem("score"));
    let AutoClickers1 = parseInt(localStorage.getItem("AutoClickers1"));
    let AutoClickers2 = parseInt(localStorage.getItem("AutoClickers2"));
    let AutoClickers3 = parseInt(localStorage.getItem("AutoClickers3"));
    let AutoClickers4 = parseInt(localStorage.getItem("AutoClickers4"));
    let AutoClickers5 = parseInt(localStorage.getItem("AutoClickers5"));
    let AutoClickers6 = parseInt(localStorage.getItem("AutoClickers6"));
    let AutoClickers7 = parseInt(localStorage.getItem("AutoClickers7"));
    let AutoClickers8 = parseInt(localStorage.getItem("AutoClickers8"));

    let autoUbgrade1 = parseInt(localStorage.getItem("autoUbgrade1"));
    let autoUbgrade2 = parseInt(localStorage.getItem("autoUbgrade2"));
    let autoUbgrade3 = parseInt(localStorage.getItem("autoUbgrade3"));
    let autoUbgrade4 = parseInt(localStorage.getItem("autoUbgrade4"));
    let autoUbgrade5 = parseInt(localStorage.getItem("autoUbgrade5"));
    let autoUbgrade6 = parseInt(localStorage.getItem("autoUbgrade6"));
    let autoUbgrade7 = parseInt(localStorage.getItem("autoUbgrade7"));
    let autoUbgrade8 = parseInt(localStorage.getItem("autoUbgrade8"));



    score = score + (AutoClickers1 * autoUbgrade1 + AutoClickers2 * autoUbgrade2 + AutoClickers3 * autoUbgrade3 + AutoClickers4 * autoUbgrade4
                    + AutoClickers5 * autoUbgrade5 + AutoClickers6 * autoUbgrade6 + AutoClickers7 * autoUbgrade7 + AutoClickers8 * autoUbgrade8);
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

function showCookiePreSecond() {
    let AutoClickers1 = parseInt(localStorage.getItem("AutoClickers1"));
    let AutoClickers2 = parseInt(localStorage.getItem("AutoClickers2"));
    let AutoClickers3 = parseInt(localStorage.getItem("AutoClickers3"));
    let AutoClickers4 = parseInt(localStorage.getItem("AutoClickers4"));
    let AutoClickers5 = parseInt(localStorage.getItem("AutoClickers5"));
    let AutoClickers6 = parseInt(localStorage.getItem("AutoClickers6"));
    let AutoClickers7 = parseInt(localStorage.getItem("AutoClickers7"));
    let AutoClickers8 = parseInt(localStorage.getItem("AutoClickers8"));

    let autoUbgrade1 = parseInt(localStorage.getItem("autoUbgrade1"));
    let autoUbgrade2 = parseInt(localStorage.getItem("autoUbgrade2"));
    let autoUbgrade3 = parseInt(localStorage.getItem("autoUbgrade3"));
    let autoUbgrade4 = parseInt(localStorage.getItem("autoUbgrade4"));
    let autoUbgrade5 = parseInt(localStorage.getItem("autoUbgrade5"));
    let autoUbgrade6 = parseInt(localStorage.getItem("autoUbgrade6"));
    let autoUbgrade7 = parseInt(localStorage.getItem("autoUbgrade7"));
    let autoUbgrade8 = parseInt(localStorage.getItem("autoUbgrade8"));

    CookieCount = AutoClickers1 * autoUbgrade1 + AutoClickers2 * autoUbgrade2 + AutoClickers3 * autoUbgrade3 + AutoClickers4 * autoUbgrade4
                    + AutoClickers5 * autoUbgrade5 + AutoClickers6 * autoUbgrade6 + AutoClickers7 * autoUbgrade7 + AutoClickers8 * autoUbgrade8;

    

    document.getElementById('cookie-per-second').innerHTML = CookieCount;
}

// Start de game bij het laden van de pagina
startGyme();


function reStart(){
    localStorage.clear();
    localStorage.setItem('score' , 0);
}