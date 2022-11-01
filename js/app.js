

// Nav Button Hover ////////////

document.addEventListener('mouseover', (e) => {
    
    if(e.target.classList.contains('nav-hover')) {     
        console.log(e.target);
        let navChild = e.target.querySelector(':nth-child(1)'); 
        navChild.classList.add('dot-active');
    }  
})

document.addEventListener('mouseout', (e) => {   
    if(e.target.classList.contains('nav-hover')) {     
        console.log(e.target);
        let navChild = e.target.querySelector(':nth-child(1)'); 
        navChild.classList.remove('dot-active');
    }  
})

// Hamburger Menu Nav Spin

const hamburger = document.querySelector('.hamburger-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
});

// Calm coffee steam

const path = document.querySelector('.coffee-steam-two');
const length = path.getTotalLength();
const steam = document.getElementById('coffee-steam');
const steamTwo = document.getElementById('coffee-steam-two');


function steamRotation() {
    steamOn();
    setTimeout(steamTwoOn, 5000);
    setTimeout(steamOff, 5000);
    setTimeout(steamTwoOff, 8000);
}




function steamOn() {
    if (steam.classList.contains('steam-inactive')) {
        steam.classList.remove('steam-inactive');
    }
}

function steamOff() {
    if (!steam.classList.contains('steam-inactive')) {
        steam.classList.add('steam-inactive');
    }
}

function steamTwoOff() {
    if (!steamTwo.classList.contains('steam-inactive')) {
        steamTwo.classList.add('steam-inactive');
    }
}

function steamTwoOn() {
    if (steamTwo.classList.contains('steam-inactive')) {
        steamTwo.classList.remove('steam-inactive');
    }
}

steamRotation();
setInterval(steamRotation, 10000);