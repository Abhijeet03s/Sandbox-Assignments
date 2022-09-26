let joke = document.getElementById("joke")
let jokeBtn = document.getElementById("jokeBtn")

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7328e277fdmsh672adc6c3a97ccfp131107jsn7b5642151bc3',
        'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
    }
};


jokeBtn.addEventListener("click", () => {
    fetch('https://jokeapi-v2.p.rapidapi.com/joke/Any?type=single', options)
        .then(response => response.json())
        .then(data => joke.innerHTML = data.joke)
        .catch(err => console.error(err));
})