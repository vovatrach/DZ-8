import galleryItems from "./gallery-items.js";

const jsGalleryRef = document.querySelector("ul.js-gallery");
const modalRef = document.querySelector(".js-lightbox");
const imgModalRef = document.querySelector(".lightbox__image");
const btnCloseModalRef = document.querySelector(
  "button[data-action='close-lightbox']"
);
const backDropRef = document.querySelector(".lightbox__content");

const galleryArry = galleryItems.map((galleryItem) => {
  const liRef = document.createElement("li");
  const aRef = document.createElement("a");
  const imgRef = document.createElement("img");
  liRef.classList.add("gallery__item");
  aRef.classList.add("gallery__link");
  aRef.href = galleryItem.original;
  imgRef.classList.add("gallery__image");
  imgRef.setAttribute("src", `${galleryItem.preview}`);
  imgRef.setAttribute("data-sourse", `${galleryItem.original}`);
  imgRef.setAttribute("alt", `${galleryItem.description}`);
  // imgRef.src = galleryItem.preview;
  // imgRef.dataset.source = galleryItem.original;
  // imgRef.alt = galleryItem.description;

  liRef.appendChild(aRef);
  aRef.appendChild(imgRef);
  return liRef;
});

jsGalleryRef.append(...galleryArry);

jsGalleryRef.addEventListener("click", (event) => {
  event.preventDefault();
  modalRef.classList.add("is-open");
  imgModalRef.setAttribute("src", event.target.getAttribute("data-sourse"));
});
const closeModal = function (event) {
  modalRef.classList.remove("is-open");
  imgModalRef.setAttribute("src", "");
};
const backD = function (event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};
btnCloseModalRef.addEventListener("click", closeModal);
backDropRef.addEventListener("click", backD);
