import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');


galleryList.insertAdjacentHTML('beforeend', createGalleryMarkUp(galleryItems));

function createGalleryMarkUp(item) {
    return item.map(({ original, preview, description } = {}) => `
       <li>
            <a class="gallery__item" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                />
            </a>
        </li>`
    )
    .join('');
}



let lightbox = new SimpleLightbox('.gallery a',
    {
    /* options */
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});


    
