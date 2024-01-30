let dogImage = document.getElementById('dogImage');
let btn = document.getElementById('btn');

btn.addEventListener('click', randomDogImage);
const url="https://dog.ceo/api/breeds/image/random";

function randomDogImage() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        dogImage.innerHTML = `<img src ="${data.message}"/>`;
        
    })
}