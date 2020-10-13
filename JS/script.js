let body = document.getElementsByTagName('body');
let title = document.getElementsByTagName('h1');
let links = document.getElementsByTagName('a');
let dividers = document.getElementsByTagName('span');

function blackTheme() {
    let i;

    body[0].classList.add('background-black');
    for (i= 0; i < title.length; i++) {
        title[i].classList.add('color-white');
    }

    for (i= 0; i < links.length; i++) {
        links[i].classList.add('color-white');
        links[i].classList.add('a-color-white');
    }
    
    for (i= 0; i < dividers.length; i++) {
        dividers[i].classList.add('color-white');
    }
}

function whiteTheme() {
    let i;

    body[0].classList.add('background-white');
    for (i= 0; i < title.length; i++) {
        title[i].classList.add('color-black');
    }

    for (i= 0; i < links.length; i++) {
        links[i].classList.add('color-black');
        links[i].classList.add('a-color-black');
    }
    
    for (i= 0; i < dividers.length; i++) {
        dividers[i].classList.add('color-black');
    }
}

function selectTheme() {
    let randNum = Math.floor(Math.random() * 10);
    console.log(randNum);

    randNum < 5 ? blackTheme() : whiteTheme();
}