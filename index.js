let characters = [];

// Fetch characters from the Rick and Morty API
function fetchData() {
  fetch('https://rickandmortyapi.com/api/character')
    .then((resp) => resp.json())
    .then((data) => {
      characters = data.results;
      displayCharacters(characters);
    })
    .catch(error => {
      console.error('Error fetching characters:', error);
    });
}

// Display characters based on the provided list
function displayCharacters(characterList) {
  const characterContainer = document.getElementById('character-container');
  characterContainer.innerHTML = '';

  characterList.forEach(character => {
    const characterCard = document.createElement('div');
    characterCard.className = 'character-card';

    const nameElement = document.createElement('h2');
    nameElement.innerText = character.name;

    const imageElement = document.createElement('img');
    imageElement.src = character.image;
    imageElement.alt = character.name;

    const statusElement = document.createElement('p');
    statusElement.innerText = `Status: ${character.status}`;

    const speciesElement = document.createElement('p');
    speciesElement.innerText = `Species: ${character.species}`;

    const likeButton = document.createElement('button');
    likeButton.innerText = 'Like';
    likeButton.className = 'like-button';
    likeButton.addEventListener('click', () => {
      likeButton.classList.toggle('liked');
    
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', () => {
      characterCard.remove();
    });

    

    characterCard.appendChild(nameElement);
    characterCard.appendChild(imageElement);
    characterCard.appendChild(statusElement);
    characterCard.appendChild(speciesElement);
    characterCard.appendChild(likeButton);
    characterCard.appendChild(deleteButton);

    characterContainer.appendChild(characterCard);
  });
}

// Filter characters based on the selected filter
function filterCharacters(filter) {
    let filteredCharacters;
    switch (filter) {
        case 'humans':
            filteredCharacters = characters.filter(character => character.species === 'Human');
            break;
        case 'aliens':
            filteredCharacters = characters.filter(character => character.species !== 'Human');
            break;
        case 'alive':
            filteredCharacters = characters.filter(character => character.status === 'Alive');
            break;
        case 'dead':
            filteredCharacters = characters.filter(character => character.status === 'Dead');
            break;
        default:
            filteredCharacters = characters;
    }
    displayCharacters(filteredCharacters);
}


// Add event listeners to the buttons

document.getElementById('all').addEventListener('click', () => filterCharacters('all'));
document.getElementById('humans').addEventListener('click', () => filterCharacters('humans'));
document.getElementById('aliens').addEventListener('click', () => filterCharacters('aliens'));
document.getElementById('alive').addEventListener('click', () => filterCharacters('alive'));
document.getElementById('dead').addEventListener('click', () => filterCharacters('dead'));


// Fetch data when the document is fully loaded
document.addEventListener('DOMContentLoaded', ()=>{
  fetchData()
});
