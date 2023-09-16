// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);



const galleryList = document.querySelector(".gallery");

const cardsMarkup = createImgCardMarkup(galleryItems);
galleryList.insertAdjacentHTML("beforeend", cardsMarkup);

galleryList.addEventListener("click", onImgClick);

function createImgCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `  
      <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}

function onImgClick(evt) {
  evt.preventDefault();
  const isImgCardEl = evt.target.classList.contains("gallery__image");

  if (!isImgCardEl) {
    return;
  }
}

let gallery = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  scrollZoom: false,
});
