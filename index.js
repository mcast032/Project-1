document.addEventListener('DOMContentLoaded', () => fetchData());

function fetchData() {
    fetch('https://rickandmortyapi.com/api/character')
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data); // Log the data here
        });
}

console.log(fetchData); // This will log the fetchData function definition, not the fetched data
