import images from './js/gallery-items.js';

console.log(images[0].description);

const galleryRef = document.querySelector('.js-gallery');

const makeImgMarcup = img => {
    return `
<li class="gallery__item">
  <a
    class="gallery__link"
    href="${img.original}"
  >
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</li>
`;
};

const makeGalleryImages = images.map(makeImgMarcup).join('');
galleryRef.insertAdjacentHTML('afterbegin', makeGalleryImages);



const lightboxRef = document.querySelector('.js-lightbox');
const lightboxOverlay = document.querySelector('.lightbox__overlay');
const lightboxImgRef = document.querySelector('.lightbox__image');
const closeModalBtnRef = document.querySelector('button[data-action="close-lightbox"]');

galleryRef.addEventListener('click', handleImgClick);
closeModalBtnRef.addEventListener('click', closeModal);
lightboxOverlay.addEventListener('click', onOverlayClick);


function handleImgClick(e) {
    e.preventDefault();

    if (!e.target.classList.contains('gallery__image')) return;
  console.log(e.target.dataset.source);
  console.log(e.target);

    lightboxImgRef.src = e.target.dataset.source;
    lightboxImgRef.alt = e.target.alt;
  openModal();
};

function openModal() {
lightboxRef.classList.add('is-open');
};

function closeModal() {
  lightboxRef.classList.remove('is-open');
  if (lightboxImgRef) {
    lightboxImgRef.src = '';
  lightboxImgRef.alt = '';
  };
};

function onOverlayClick(e) {
  if (e.target === e.currentTarget) {
     closeModal();
  };
};

