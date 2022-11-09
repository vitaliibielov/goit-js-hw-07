import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const galleryEl = document.querySelector('.gallery__item'); 
let instance;

galleryList.insertAdjacentHTML('beforeend', createGalleryMarkUp(galleryItems));

function createGalleryMarkUp(item) {
    return item.map(({ original, preview, description } = {}) => `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`
    )
    .join('');
}

function showModal (e) {

    instance = basicLightbox.create(`
         <img src="${e.dataset.source}" width="800" height="600">
    `, {
        onShow: () => document.addEventListener('keydown', onEscClickBtn),
        onClose: () => document.removeEventListener('keydown', onEscClickBtn)
    });

    instance.show();
    
    // console.log(e.target.dataset.source, e.currentTarget)
}

galleryList.addEventListener('click', onElClick);


function onElClick(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return;
    }
    showModal(e.target);
}

function onEscClickBtn (e) {
    if (e.code !== 'Escape') {
        return
    }
    instance.close();

    
}


// {/* <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div> */}

// const galleryArr = galleryItems
//     .map(({ original, preview, description } = {}) => `
//         <div class="gallery__item">
//             <a class="gallery__link" href="${original}">
//                 <img
//                 class="gallery__image"
//                 src="${preview}"
//                 data-source="${original}"
//                 alt="${description}"
//                 />
//             </a>
//         </div>`
//     )
//     .join('');

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()