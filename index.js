let characters = [];

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
      characterCard.classList.toggle('liked');
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', () => {
      characterCard.classList.add('deleted');
    });

      characterCard.addEventListener('mouseover', () => {
        characterCard.style.transform = 'scale(1.05)';
        characterCard.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
      });
      characterCard.addEventListener('mouseout', () => {
        characterCard.style.transform = 'scale(1)';
        characterCard.style.boxShadow = 'none';
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

document.getElementById('all').addEventListener('click', () => filterCharacters('all'));
document.getElementById('humans').addEventListener('click', () => filterCharacters('humans'));
document.getElementById('aliens').addEventListener('click', () => filterCharacters('aliens'));
document.getElementById('alive').addEventListener('click', () => filterCharacters('alive'));
document.getElementById('dead').addEventListener('click', () => filterCharacters('dead'));

document.addEventListener('DOMContentLoaded', fetchData);
