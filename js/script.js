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
        li_about.classList.toggle('link__active', window.scrollY > 1280 && window.scrollY < 1800)
    });
});

/*Get DOM elements*/
/*Static*/
const apot__cont = document.querySelector('.apot'); //Contenedor principal
const apod__titleDate = document.querySelector('.date__title');
const apod__date = document.querySelector('.date__search');
/*Data*/
const apod__title = document.querySelector('.title__apod');
const apod__description = document.querySelector('.desc__container');
const apod__image = document.querySelector('.apod__img');

/*Set max value to date input*/
const date = new Date();
//console.log(date);
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${year}-0${month}-${day}`;
apod__date.setAttribute('value', currentDate);
apod__date.setAttribute('max', currentDate);
apod__date.setAttribute('min', '1995-06-16');

const myapikey = 'oCpQ0U9g3fPD67rGbDl2TrhpLT6L4ieahPOZHZmh';
//Fetch API
async function fetchInfo() {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${myapikey}`);
    const data = await res.json();
    console.log(data);

    //Title
    apod__title.innerHTML = '"' + data.title + '"';
    //IMG
    apod__image.src = data.url;
    //Description
    apod__description.innerHTML = data.explanation;
}

//Fetch API + date
async function fetchInfoDate(dateSearch) {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${myapikey}&date=${dateSearch}`);
    const data = await res.json();

    console.log(data);
    //Date Title
    apod__titleDate.innerHTML = dateAPOD + ' picture:';
    //Title
    apod__title.innerHTML = '"' + data.title + '"';
    //IMG
    apod__image.src = data.url;
    //Description
    apod__description.innerHTML = data.explanation;

    if (!res.ok) {
        removeChildNodes(apod__titleDate);
        removeChildNodes(apod__title);
        apod__image.remove;
        apod__description.innerHTML = 'Date must be between Jun 16, 1995 and today';
    }
}

//Search APOD
function searchAPOD() {
    //removeChildNodes(apot__cont);
    //Get date
    dateAPOD = apod__date.value;
    fetchInfoDate(dateAPOD);
}

//To delete childs (I mean, elements, not real childs)
function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

fetchInfo();