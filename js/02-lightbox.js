import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery'); 

const createGalleryCardsMarkup = items => items.map(
    ({ preview, original, description }) => 
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" 
  src="${preview}"
  alt="${description}" />
</a>`
).join('');

const galleryItemsCards = createGalleryCardsMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryItemsCards);

const lightBox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    animationSpeed: 250,
  });
   