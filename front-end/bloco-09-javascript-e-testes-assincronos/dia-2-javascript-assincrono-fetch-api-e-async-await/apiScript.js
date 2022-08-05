// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const result = fetch(API_URL, myObject)
    .then((response) => response.json())
    .then(({ id, joke}) => document.getElementById('jokeContainer').innerText = joke)
    .catch((error) => console.log(error))
};

window.onload = () => {
  fetchJoke();
};
