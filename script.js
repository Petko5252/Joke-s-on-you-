// Function to fetch a random joke from the API
async function fetchJoke() {
    try {
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: { 'Accept': 'application/json' }
        });
        const data = await response.json();
        // Display the joke in the joke container
        document.getElementById('joke').innerText = data.joke;
    } catch (error) {
        console.error('Error fetching joke:', error);
        document.getElementById('joke').innerText = 'Oops! Something went wrong. Try again later.';
    }
}

// Load a joke when the page is first loaded
window.onload = fetchJoke;

// Add event listener to the button to fetch a new joke when clicked
document.getElementById('new-joke-btn').addEventListener('click', fetchJoke);
