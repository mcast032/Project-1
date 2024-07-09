//fetch data 
function fetchData() {
    fetch('https://rickandmortyapi.com/api/character')
      .then((resp) => resp.json())
      .then((data) => {
        const characterContainer = document.getElementById('character-container');
        characterContainer.innerHTML = '';
        // iterate thriugh data and display on the dom. each data beccomes a div
        data.results.forEach(character => {
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

          characterCard.appendChild(nameElement);
          characterCard.appendChild(imageElement);
          characterCard.appendChild(statusElement);
          characterCard.appendChild(speciesElement);

          characterContainer.appendChild(characterCard);
        });
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      });
  }

  // Fetch data when the document is fully loaded
  document.addEventListener('DOMContentLoaded', fetchData);