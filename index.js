// WEATHER APP

const weatherForm = document.quierySelector(".weatherform");
const cityInput = document.quierySelector(".cityInput");
const card = document.quierySelector(".card")
const apikey = "f3844dab1fcd61c89609555ec750bbcc";


weatherForm.addEventListener{"submit", event => {
    
    event.preventDefault();

    const city = cityInput.value;
    
    if(city) {

    }
    else{
        displayError("Please enter a city")
    }
}};

async function getweatherData(City){

}

functiion displayWeatherInfo(data){

}

function getWeatherEmojij(weather){

}

function displayError(Message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");


    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errordisplay)
}

