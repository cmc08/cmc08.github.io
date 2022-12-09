// to determine whether or not loading animation is shown and whether to display the random pokemon
let flag1 = false;
let flag2 = false;

// a storage variable which will be used to keep the pokemon's typing
let pokemonType = "";

// get the api data
const apiData = {
    apiUrl: 'https://pokeapi.co/api/v2/',
    endpoint: 'pokemon/',
};

// add in a delay function to give the appearance of "loading" with the spinning pokeball gif
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

// to get audio file
var myAudio = document.getElementById("myAudio");

// to play the audio file or pause it
function togglePlay() {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};

// definining const variables which map to different things defined in the css
const pokemonMove = document.querySelector('.pokemon-move');

const randomPokemon = document.querySelector('.random-pokemon');
const pokemonButton = document.querySelector('.new-pokemon');
const loaderContainer = document.querySelector('.loader-container');

const randomPokemon2 = document.querySelector('.random-pokemon2');
const loaderContainer2 = document.querySelector('.loader-container2');

// displays the 1st spinning pokeball animation
const displayLoading = () => {
    loaderContainer.style.display = 'block';
    flag1 = false;
};

// hides the 1st spinning pokeball animation
const hideLoading = () => {
    delay(500).then(() => loaderContainer.style.display = 'none');
    flag1 = true;
};

// displays the 2nd spinning pokeball animation
const displayLoading2 = () => {
    loaderContainer2.style.display = 'block';
    flag2 = false;
};

// hides the 2nd spinning pokeball animation
const hideLoading2 = () => {
    delay(500).then(() => loaderContainer2.style.display = 'none');
    flag2 = true;
};

// gets the 1st random pokemon
const getRandomPokemon = () => {
    displayLoading();
    randomPokemon.style.display = 'none';
    const fullUrl = apiData.apiUrl + apiData.endpoint + getRandomNumber();
    fetch(fullUrl)
        .then((data) => data.json())
        .then((pokemon) =>
            displayPokemon(pokemon.name, pokemon.sprites.other.dream_world.front_default, pokemon.moves[1].move.name)
        )
        .catch((gotError) => {
            console.error(gotError);
        });
};

// gets a 2nd random pokemon
const getRandomPokemon2 = () => {
    displayLoading2();
    randomPokemon2.style.display = 'none';
    const fullUrl = apiData.apiUrl + apiData.endpoint + getRandomNumber();
    fetch(fullUrl)
        .then((data) => data.json())
        .then((pokemon) =>
            displayPokemon2(pokemon.name, pokemon.sprites.other.dream_world.front_default)
        )
        .catch((gotError) => {
            console.error(gotError);
        });
};

// displays the random pokemon got by getRandomPokemon, as well as taking an additional variable (the pokemon's move at index 1, scraped by the api) to attack the other pokemon with
const displayPokemon = (name, image, move) => {
    // hide the spinning pokeball
    hideLoading();
    const html = `<h4>You chose ${name}!</h4>
    <img src="${image}" width="200" alt="${name}">`;
    randomPokemon.innerHTML = html;
    console.log(name, image);
    
    // wait to show the pokemon for loading effect
    delay(500).then(() => {
        if (flag1)
        {
            randomPokemon.style.display = 'flex';
        }
    })
    
    delay(500).then(() => {
        const html2 = `<h4>${name} uses ${move}!</h4>`;
        pokemonMove.innerHTML = html2;
        pokemonMove.style.display = 'flex';
    })
};

// displays the random pokemon got by getRandomPokemon2
const displayPokemon2 = (name, image) => {
    // hide the spinning pokeball
    hideLoading2();
    const html = `<h4>Your opponent has chosen ${name}!</h4>
    <img src="${image}" width="200" alt="${name}">`;
    randomPokemon2.innerHTML = html;
    console.log(name, image);
    
    // wait to show the pokemon for loading effect
    delay(500).then(() => {
        if (flag2)
        {
            randomPokemon2.style.display = 'flex';
        }
    })
};

// get a random number between 1 and 649 (Bulbasaur through Genesect). We want through the Black & White era since the images displayed are "dream world" forms, which was a side game implemented for the Gen 5 games
const getRandomNumber = () => 
    Math.floor((Math.random() * 649 + 1))

// add an event listener to pokemonButton so the user can get a random pokemon and the opponent gets one
pokemonButton.addEventListener('click', getRandomPokemon);
pokemonButton.addEventListener('click', getRandomPokemon2);
