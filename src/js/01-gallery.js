import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import createGalleryMarkup from './utils/createGalleryMarkup';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML(
  'beforeend',
  createGalleryMarkup(galleryItems)
);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
