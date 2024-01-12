let pokemonList = [
    {
        name: 'Pikachu',
        height: 3, // The height should be a number, not a string
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
    
    console.log(pokemonList); 
    
    // Print the list of names from pokemonList and corresponding height of that name
    for (let i = 0; i < pokemonList.length; i++) {
        // Print a message if the height is bigger than 5
        if (pokemonList[i].height > 5) {
            document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - Wow, that\'s big!</p>');
        } else {
            document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')</p>');
        }
    }