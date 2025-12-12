document.addEventListener("DOMContentLoaded", () => {

const BREEDS = [
    "appenzeller",
    "basenji",
    "beagle",
    "bluetick",
    "bouvier"
];

const URL_BREEDS = "https://dog.ceo/api/breed/{breed}/images";

BREEDS.forEach(breed => { //podemos poner el nombre que queramos es este caso ponemos breed
    let urlThisBreed = URL_BREEDS.replace("{breed}" , breed); //ponemos let porque en cada interaccion la vamos a modificar
            //el primer parametro ({breed}) se va a reemplazar por el segundo parametro breed
    getData("get", urlThisBreed, (data) => processData(data, breed));
})

function getData(method, url, callback) {
    const request = new XMLHttpRequest();

    request.onreadystatechange = (e) => {
        if (request.readyState !== 4) { // Si aún no se ha completado la petición, no se hace nada.
            return;
        }
        if (request.status === 200) {
            const response = request.response;
            const data = JSON.parse(response);
            callback(data);
        }
    };
    try{
        request.open(method,url);
        request.send();
    } catch(e) {
        console.log(e);
    }
}


function postData( url, callback) {
    const request = new XMLHttpRequest();

    request.onreadystatechange = (e) => {
        if (request.readyState !== 4) { // Si aún no se ha completado la petición, no se hace nada.
            return;
        }
        if (request.status === 200) {
            const response = request.response;
            const data = JSON.parse(response);
            callback(data);
        }
    };
    try{
        request.open("post",url, true);
        request.send();
    } catch(e) {
        console.log(e);
    }
}


function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

    function processData(data, breed) {
        //const message = data.message;
        //const status = data.status;
        const {message, status} = data; //esto es destructuracion
        const numDog = message.length;
        const posDog =  getRandomInt(numDog);
        const imgDog = message[posDog];
        createElement(imgDog, breed)


    }

    function createElement(img, breed){
        const tbodyElems = document.getElementsByTagName("tbody");
        const tbodyElem = tbodyElems[0];
        console.log(tbodyElem)
        const trElem = document.createElement("tr");
        const tdElem = document.createElement("td");
        tdElem.className = "container"

        const imgElem = document.createElement("img");
        imgElem.src = img;

        const pElem = document.createElement("p");
        pElem.textContent = breed;
        pElem.className = "nombre"


         tdElem.addEventListener("click", () => { //agregamos un addEventListener click
              window.location.href = `html/breed.html?breed=${breed}`;
              });

            tdElem.appendChild(imgElem);
            tdElem.appendChild(pElem);

            trElem.appendChild(tdElem);
         tbodyElem.appendChild(trElem);


    }

})





// parsear es transformar
//document.addEventListener("DOMContentLoaded", () => {
//const APIDog = document.getElementById("dogAPI");
//
//fetch("https://dog.ceo/api/breed/hound/images") //uso esto para conectarme a la API
//    .then(response => response.json())
//    .then(data => console.log(data))
//    .catch(error => console.error('Error:', error));
//
//        for (let i = 1; i <=10; i++) { //Dentro del bucle for, creo un nuevo <div>
//        let nuevoDiv = document.createElement("div"); // creo el div
//        let img = document.createElement("img"); // creo el img
//        nuevoDiv.appendChild(img); // le digo que es el hijo de div
//        APIDog.appendChild(nuevoDiv); // creo al padre div
//        }
//
//
//
//
//});





