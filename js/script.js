$(document).ready(function() {

    //Starting AOS Library
    AOS.init();

    //TODO: Get API
});

//Get API
async function fetchInfo() {
    const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=oCpQ0U9g3fPD67rGbDl2TrhpLT6L4ieahPOZHZmh');
    const data = await res.json();
    console.log(data);
}

fetchInfo();