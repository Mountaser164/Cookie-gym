let score = 0;
let autoClickerCount = 0;
let upgradesCount = 0;
let pointsPerClick = 1;
let clicksNeededForAutoClicker = 10; // Aantal klikken voor een Auto-Clicker
let clicksMade = 0; // Telt het aantal klikken dat de speler heeft gemaakt

// Selecteer de elementen
const scoreDisplay = document.getElementById('score');
const cookie = document.getElementById('cookie');
const autoClickerCountDisplay = document.getElementById('autoClickerCount');
const autoClickersOverviewDisplay = document.getElementById('autoClickersOverview');
const upgradesOverviewDisplay = document.getElementById('upgradesOverview');
const buyAutoClickerButton = document.getElementById('buyAutoClicker');

// Functie om punten toe te voegen bij een klik
cookie.addEventListener('click', () => {
    score += pointsPerClick;
    clicksMade += 1; // Tel de klikken
    scoreDisplay.textContent = score;

    // Controleer of de speler genoeg klikken heeft voor een Auto-Clicker
    if (clicksMade >= clicksNeededForAutoClicker) {
        buyAutoClickerButton.disabled = false; // Maak de knop actief
    }
});

// Auto-Clicker functie
setInterval(() => {
    score += autoClickerCount; // Voeg punten toe op basis van het aantal auto-clickers
    scoreDisplay.textContent = score;
}, 1000); // Elke seconde

// Auto-Clicker kopen
buyAutoClickerButton.addEventListener('click', () => {
    if (clicksMade >= clicksNeededForAutoClicker) {
        clicksMade -= clicksNeededForAutoClicker; // Verminder de klikken
        autoClickerCount += 1; // Verhoog het aantal Auto-Clickers
        autoClickerCountDisplay.textContent = autoClickerCount;
        autoClickersOverviewDisplay.textContent = autoClickerCount;
        scoreDisplay.textContent = score;

        // Reset de knop als de speler niet genoeg klikken heeft
        if (clicksMade < clicksNeededForAutoClicker) {
            buyAutoClickerButton.disabled = true; // Deactiveer de knop
        }
    } else {
        alert('Niet genoeg klikken voor de Auto-Clicker!');
    }
});

// Upgrade kopen
document.getElementById('buyUpgrade').addEventListener('click', () => {
    if (score >= 20) {
        score -= 20;
        pointsPerClick += 1;
        upgradesCount += 1;
        upgradesOverviewDisplay.textContent = upgradesCount;
        scoreDisplay.textContent = score;
        alert(`Upgrade gekocht! Je krijgt nu ${pointsPerClick} punten per klik.`);
    } else {
        alert('Niet genoeg punten voor de Upgrade!');
    }
});
