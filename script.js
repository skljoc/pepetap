document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none'; // Hide loading screen
        showTab('play-tab'); // Show default tab (Play)
    }, 2000); // Adjust the timeout to simulate loading time
});

let coinCount = 0; // Initial coin count
let maxEnergy = 1000; // Maximum energy level
let energy = maxEnergy; // Initial energy level

function showTab(tabId) {
    document.querySelectorAll('.tab-container').forEach(container => {
        container.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');

    document.querySelectorAll('.menu-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`.menu-tab[onclick*="${tabId}"]`).classList.add('active');
}

function incrementCoins() {
    if (energy > 0) {
        coinCount++;
        document.getElementById('coin-count').textContent = coinCount;
        energy--;
        updateEnergyBar();
    }
}

function updateEnergyBar() {
    const energyBar = document.querySelector('.energy-bar');
    const energyPercentage = (energy / maxEnergy) * 100;
    energyBar.style.width = `${energyPercentage}%`;
}

// Call incrementCoins() function when large-coin.svg is tapped
document.querySelector('.large-coin').addEventListener('click', incrementCoins);

// Initialize the energy bar width on page load
document.addEventListener("DOMContentLoaded", function() {
    updateEnergyBar();
});
