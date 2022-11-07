const apiData = {
    apiUrl: 'https://pokeapi.co/api/v2/',
    endpoint: 'pokemon/',
};

const randomPokemon = document.querySelector('.random-pokemon');
const pokemonButton = document.querySelector('.new-pokemon');

const getRandomPokemon = () => {
    const fullUrl = apiData.apiUrl + apiData.endpoint + getRandomNumber();
    fetch(fullUrl)
        .then((data) => data.json())
        .then((pokemon) =>
            displayPokemon(pokemon.name, pokemon.sprites.other.dream_world.front_default)
        )
        .catch((err) => {
            console.error(err);
        });
};

const displayPokemon = (name, image) => {
    const html = `<h2 class="fix-stroke">It's ... ${name}!</h2>
                  <img src="${image}" alt="${name}">`;
    randomPokemon.innerHTML = html;
    console.log(name, image);
};

const getRandomNumber = () => 
    Math.floor((Math.random() * 649 + 1))

pokemonButton.addEventListener('click', getRandomPokemon);
