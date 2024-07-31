Rick and Morty Character Viewer
This is a simple web application that fetches and displays characters from the Rick and Morty API. Users can filter characters by species (humans or aliens) and status (alive or dead). The app also allows users to like and delete character cards, and it includes interactive UI elements.

Features
Fetches character data from the Rick and Morty API.
Displays character cards with name, image, status, and species.
Allows users to filter characters by species and status.
Interactive like and delete buttons for each character card.
Hover effect on character cards for better user experience.

Usage
Upon loading the app, character data will be fetched and displayed.
Use the filter buttons to filter characters:
All: Show all characters.
Humans: Show only human characters.
Aliens: Show only non-human characters.
Alive: Show only characters that are alive.
Dead: Show only characters that are dead.
Click the "Like" button on a character card to mark it as liked.
Click the "Delete" button on a character card to mark it as deleted.
Hover over a character card to see the hover effect.
Code Overview
JavaScript
The main functionality is implemented in index.js. Here are the key parts of the code:

Global Variables
characters: An array to store fetched character data.
Functions
fetchData(): Fetches character data from the Rick and Morty API and calls displayCharacters.
displayCharacters(characterList): Displays character cards on the page.
filterCharacters(filter): Filters characters based on the selected filter and calls displayCharacters.
Event Listeners
Adds event listeners to filter buttons to call filterCharacters with the appropriate filter.
Adds an event listener to call fetchData when the DOM content is loaded.
HTML
The structure of the webpage is defined in index.html. Key elements include:

A container for character cards (#character-container).
Buttons for filtering characters.
CSS
Basic styling for the application is defined in styles.css. Key styles include:

.character-card: Styles for character cards.
.liked: Styles for liked character cards.
.deleted: Styles for deleted character cards.
Contributing
Feel free to fork the repository and submit pull requests. Contributions are welcome!

Acknowledgments
The Rick and Morty API for providing the character data.
Mario Castro for developing this application.
