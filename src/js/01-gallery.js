// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
const pictureMarkup = createPictureMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', pictureMarkup);
galleryContainer.addEventListener('click', onImageClick);


function createPictureMarkup(pictures){
  const markup =  pictures.map(({ description, original, preview } ) => {
 return `
 <a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
}).join("");
  return markup;

}

function onImageClick(event) {
  event.preventDefault();
}

let gallery = new SimpleLightbox('.gallery a', {captionsData: `alt`,  captionDelay: 250});