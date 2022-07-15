import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// 1. Создаем рендерную разметку

const galleryEl = document.querySelector('.gallery');

const createGalleryCardsMarkup = gallery => gallery.map(
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

galleryEl.insertAdjacentHTML('beforeend', galleryItemsCards);
//console.log(galleryItemsCards)

// gallery__link навесить 
/*
1 нужно сделать розметку по массиву
2 при рендери галереи нужно поставить в розметку правильные поля
3 повесить клик на галерею используя делегирование
4 вызначиты елемент на який кликнули через evtyt.target
5 о считати дани с атрибута