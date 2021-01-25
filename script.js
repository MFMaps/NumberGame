// Variables
var random = Math.floor(Math.random() * 100) + 1;
var guess = false;

// Actual Game
function randomNum() {
    while (guess != true) {
       if(random == 29) {
            document.getElementById('win-or-lost').innerHTML = "You Win!";
            alert('You Win!');
            guess = true;
        }
        else {
            document.getElementById('win-or-lost').innerHTML = "You lost!";
            alert('You lost!');
            guess = true; 
        }
    }
}

// Reset Function
function reset() {
    location.reload()
}

// Light and Dark Mode
function darkMode() {
    document.getElementById('dark').style.background = "black";
    document.getElementById('win-or-lost').style.color = "red";
    document.getElementById('how-to-play').style.color = "aqua";
    document.getElementById('copyright').style.color = "white";
}

function lightMode() {
    document.getElementById('dark').style.background = "white";
    document.getElementById('win-or-lost').style.color = "black";
    document.getElementById('how-to-play').style.color = "black";
    document.getElementById('copyright').style.color = "black";
}