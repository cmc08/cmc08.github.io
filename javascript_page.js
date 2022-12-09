// to determine whether or not loading animation is shown and whether to display the random pokemon
let flag1 = false;
let flag2 = false;

// a storage variable which will be used to keep the pokemon's typing
let pokemonType = "";

// a string array which contains different ways the opponent's pokemon can evade or brush off your attack. Just for funsies/ variation!
let losses = 
["", "dodges the attack.", "bounces out of the way just in the nick of time.", "runs away at a high speed.", "deflects the blow.",
"brushes off the blow.", "laughs at your very weak move.", "rolls its eyes and prepares a counter attack.", "glares at you, unfazed by your attack but quite angry.",
"jumps away from your move.", "calls the fire department and they show up in time to deflect your move with a hose.", "brushes a bit of dust off their shoulder, totally unharmed."];

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

// for displaying the outcomes of battles
const pokemonMove = document.querySelector('.pokemon-move');
const battleResult = document.querySelector('.battle-result')

// to get / display the pokemon which represents the user
const randomPokemon = document.querySelector('.random-pokemon');
const pokemonButton = document.querySelector('.new-pokemon');
const loaderContainer = document.querySelector('.loader-container');

// to get / display the pokemon which represents the computer
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

// gets the 1st random pokemon, also gets its move at index one (which is different from the getRandomPokemon2 function)
const getRandomPokemon = () => {
    displayLoading();
    randomPokemon.style.display = 'none';
    const fullUrl = apiData.apiUrl + apiData.endpoint + getRandomNumber(649);
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
    const fullUrl = apiData.apiUrl + apiData.endpoint + getRandomNumber(649);
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
    const html = `<h4><span style="color:#2D6A4F">You chose </span><span style="color:#1B4332"> ${name}!</span></h4>
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
    
    // display the move the pokemon uses
    delay(500).then(() => {
        const html2 = `<h4><span style="color:#2D6A4F">${name} uses </span><span style="color:#1B4332"> ${move}!</span></h4>`
        pokemonMove.innerHTML = html2;
        pokemonMove.style.display = 'flex';
    })
};

// displays the random pokemon got by getRandomPokemon2
const displayPokemon2 = (name, image) => {
    // hide the spinning pokeball
    hideLoading2();
    const html = `<h4><span style="color:#2D6A4F">Your opponent has chosen </span><span style="color:#1B4332"> ${name}!</span></h4>
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
    
    let winNum = getRandomNumber(2);

    delay(500).then(() => {
        if (winNum === 1) // 50% chance of this being the case
        {
            // display failure as well as a random loss condition
            const html2 = `<h4><span style="color:#2D6A4F">${name} ${losses[getRandomNumber(11)]} </span><span style="color:#1B4332"> You failed! Try again by clicking "Battle!"</span></h4>`
            battleResult.innerHTML = html2;
            battleResult.style.display = 'flex';
        }
        else
        {
            // display a win
            const html2 = `<h4><span style="color:#2D6A4F">${name} has been struck hard by the blow and faints. </span><span style="color:#1B4332"> You win!</span></h4>`
            battleResult.innerHTML = html2;
            battleResult.style.display = 'flex';
        }
    })
};

// get a random number between 1 and max.
// In the case of getting a pokemon, we want max to be 649. (Bulbasaur through Genesect). We want through the Black & White era since the images displayed are "dream world" forms, which was a side game implemented for the Gen 5 games
// In the case of a battle, we want max to be 2. There should be a 50/50 shot to win or lose a pokemon battle.
// In the case of a battle being lost, and the array "losses" called upon, max should be 11. Technically the array has 12 elements but I just made the first one empty because indexing starts at 0 and the minimum for this function is 1 and I didn't want to make a whole other function
const getRandomNumber = (max) => 
    Math.floor((Math.random() * max + 1))

// add an event listener to pokemonButton so the user can get a random pokemon and the opponent gets one
pokemonButton.addEventListener('click', getRandomPokemon);
pokemonButton.addEventListener('click', getRandomPokemon2);
