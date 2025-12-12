const params = new URLSearchParams(window.location.search);
const breed = params.get("breed");

const title = document.getElementById("breed-title");
const gallery = document.getElementById("breed-gallery");

title.textContent = breed;

const URL_BREED = `https://dog.ceo/api/breed/${breed}/images`;

fetch(URL_BREED)
  .then(res => res.json())
  .then(data => {
    const images = data.message;

    images.forEach(imgSrc => {
      const item = document.createElement("div");
      item.className = "grid-item";

      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = breed;

      item.appendChild(img);
      gallery.appendChild(item);
    });

    // Esperar a que las imágenes carguen antes de iniciar Masonry
    imagesLoaded(gallery, function () {
      new Masonry(gallery, {
        itemSelector: ".grid-item",
        columnWidth: ".grid-item",
        gutter: 10,
        fitWidth: true
      });
    });
  });
