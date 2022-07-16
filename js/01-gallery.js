import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// 1. Создаем рендерную разметку

const gallery = document.querySelector('.gallery');

const createGalleryCardsMarkup = items => items.map(
    ({ preview, original, description }) => 
    `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg"> 
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`
).join('');

const galleryItemsCards = createGalleryCardsMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryItemsCards);

// 2. Делегирование 
gallery.addEventListener('click', clickHandler);
let instance = null;
function clickHandler(event) {
    event.preventDefault();
 
    const targetElement = event.target;
    const targetValue = targetElement.dataset.source;

    if (!targetValue) {
        return;
    }

    const instance = basicLightbox.create(
        `<img src="${targetValue}" width="800" height="600">`, {
        onShow: () => window.addEventListener("keydown", escClick),
        onClose: () => window.removeEventListener("keydown", escClick),
    });
    instance.show();
}
    
    function escClick(event) {
        if (event.code === 'Escape') {
            instance.click();
        }
      }

 
