/*Get DOM elements*/
const apod__title = document.querySelector('.title__apod');
const apod__description = document.querySelector('.desc__container');
const apod__image = document.querySelector('.apod__img');

$(document).ready(function() {
    //Starting AOS Library
    AOS.init();

    //NAVBAR SCROLL MENU
    var tohome = $('#pageHome').offset().top,
        toabout = $('#pageAbout').offset().top;

    $('#myhome').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: tohome - 200
        }, 400);
        console.log('entre a ' + tohome);
    });

    $('#myabout').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: toabout - 100
        }, 500);
        console.log('entre a ' + toabout);
    });

    //SCROLL ACTIVE EFFECT
    const menu = document.querySelector(".div__container");
    const li_home = document.querySelector('#myhome');
    const li_about = document.querySelector('#myabout');

    window.addEventListener('scroll', function() {
        menu.classList.toggle('menu__scroll', window.scrollY > 500)
    });

    window.addEventListener('scroll', function() {
        li_home.classList.toggle('link__active', window.scrollY > -10 && window.scrollY < 600)
    });

    window.addEventListener('scroll', function() {
        li_about.classList.toggle('link__active', window.scrollY > 1200 && window.scrollY < 1600)
    });
});

//Get API
async function fetchInfo() {
    const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=oCpQ0U9g3fPD67rGbDl2TrhpLT6L4ieahPOZHZmh');
    const data = await res.json();
    console.log(data);

    //Title
    apod__title.innerHTML = '"' + data.title + '"';
    //IMG
    apod__image.src = data.url;
    //Description
    apod__description.innerHTML = data.explanation;
}


fetchInfo();