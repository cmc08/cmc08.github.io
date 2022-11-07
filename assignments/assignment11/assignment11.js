let flag = false;

const apiData = {
    apiUrl: 'https://pokeapi.co/api/v2/',
    endpoint: 'pokemon/',
};

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

var myAudio = document.getElementById("myAudio");

function togglePlay() {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};

const randomPokemon = document.querySelector('.random-pokemon');
const pokemonButton = document.querySelector('.new-pokemon');
const loaderContainer = document.querySelector('.loader-container');

const displayLoading = () => {
    loaderContainer.style.display = 'block';
    flag = false;
};

const hideLoading = () => {
    delay(500).then(() => loaderContainer.style.display = 'none');
    flag = true;
};

const getRandomPokemon = () => {
    displayLoading();
    randomPokemon.style.display = 'none';
    const fullUrl = apiData.apiUrl + apiData.endpoint + getRandomNumber();
    fetch(fullUrl)
        .then((data) => data.json())
        .then((pokemon) =>
            displayPokemon(pokemon.name, pokemon.sprites.other.dream_world.front_default)
        )
        .catch((gotError) => {
            console.error(gotError);
        });
};

const displayPokemon = (name, image) => {
    hideLoading();
    const html = `<h2 class="fix-stroke">It's ... ${name}!</h2>
    <img src="${image}" width="200" alt="${name}">`;
    randomPokemon.innerHTML = html;
    console.log(name, image);
    
    delay(500).then(() => {
        if (flag)
        {
            randomPokemon.style.display = 'flex';
        }
    })
};

const getRandomNumber = () => 
    Math.floor((Math.random() * 649 + 1))

pokemonButton.addEventListener('click', getRandomPokemon);
