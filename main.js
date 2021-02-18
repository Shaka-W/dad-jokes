const joke = document.querySelector('.joke');
const jokeBtn = document.querySelector('.btn-joke');

const options = {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
};

async function getJoke() {
  try {
    const response = await fetch('https://icanhazdadjoke.com', options);
    const data =  await response.json();
    joke.textContent = data.joke;
  }
  catch (err){
    console.error(err);
  }
}

getJoke();

jokeBtn.addEventListener('click', getJoke);