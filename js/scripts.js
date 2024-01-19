
let pokemonRepository = (function () {

    let pokemonList = [
        {
            name: 'Pikachu',
            height: 3, // The height should be a number, not a string don't use ''
            type: ['electric'],
        },
        {
            name: 'Squirtle',
            height: 6, // 
            type: ['water'],
        },
        {
            name: 'Bulbasaur',
            height: 5, // 
            type: ['poison', 'grass'], // Correctly used an array of strings
        }];
    function getAll() {
        return pokemonList;
    }
    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list'); // Select the pokemon list element from the DOM
        let listpokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);

    }
    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
    }
})();

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);

});