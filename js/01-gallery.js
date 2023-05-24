import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryListEl = document.querySelector(".gallery");

function createGallery(galleryItems) {
  let srtGalleryHTML = galleryItems
    .map(
      (galleryItem) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${galleryItem.original}">
                <img class="gallery__image"
                    src="${galleryItem.preview}"
                    data-source="${galleryItem.original}"
                    alt="${galleryItem.description}"
                />
            </a>
        </li>`
    )
    .join("");

  galleryListEl.insertAdjacentHTML("beforeend", srtGalleryHTML);
}

function onImgClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  modalEvent(event);
}

function modalEvent(event) {
  const imgSrc = event.target.dataset.source;
  const modal = basicLightbox.create(`<img src="${imgSrc}">`);
  modal.show();
  document.addEventListener("keydown", () => {
    onEscClose(modal);
  });
}

function onEscClose(modal) {
  if (event.code === "Escape") {
    modal.close();
  }
}

console.log(createGallery(galleryItems));
galleryListEl.addEventListener("click", onImgClick);
