/*Get DOM elements*/
const apod__title = document.querySelector('.title__apod');
const apod__description = document.querySelector('.desc__container');
const apod__image = document.querySelector('.apod__img');

$(document).ready(function() {
    //Starting AOS Library
    AOS.init();
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