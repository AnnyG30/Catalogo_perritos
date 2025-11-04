document.addEventListener("DOMContentLoaded", () => {
const APIDog = document.getElementById("dogAPI");

fetch("https://dog.ceo/api/breed/hound/images") //uso esto para conectarme a la API
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

        for (let i = 1; i <=10; i++) { //Dentro del bucle for, creo un nuevo <div>
        let nuevoDiv = document.createElement("div"); // creo el div
        let img = document.createElement("img"); // creo el img
        nuevoDiv.appendChild(img); // le digo que es el hijo de div
        APIDog.appendChild(nuevoDiv); // creo al padre div
        }




});





