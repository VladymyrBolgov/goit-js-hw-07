import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// 1. Создаем рендерную разметку

const gallery = document.querySelector('.gallery');

const createGalleryCardsMarkup = items => items.map(
    ({ preview, original, description }) => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}"> 
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

// 2
gallery.addEventListener('click', clickHandler);

function clickHandler(event) {
    event.preventDefault();
   // const targetElement = event.target;
   // const targetValue = targetElement.dataset.source;
    const targetValue = event.target.dataset.source;
    
    if (!targetValue) {
        return;
    }

    const instance = basicLightbox.create(
        `<img src="${targetValue}" width="800" height="600">`, {
    });
    instance.show();
    }
    // 3 Выход через Esc
    window.addEventListener('keydown', clickEscape);
    
    function clickEscape(event) {
        if (event.code === 'Escape') {
            window.removeEventListener('keydown', clickEscape)
            instance.close();
        }
      }

 
