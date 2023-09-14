// Sample photo data (replace with your own)
const exclusivePhotos = [
    { src: 'karina1.jpeg', caption: 'Day 1 ' },
    { src: 'karina2.jpeg', caption: 'Exclusive Pic 2' },
    { src: 'karina3.jpeg', caption: 'Exclusive Pic 3' }
];

const memoriesPhotos = [
    { src: 'karina4.jpeg', caption: 'Spending Memory 1' },
    { src: 'karina5.jpeg', caption: 'Spending Memory 2' },
    { src: 'karina6.jpeg', caption: 'Spending Memory 3' }
];

const ownZonePhotos = [
    { src: 'karina7.jpeg', caption: 'Own Zone Pic 1' },
    { src: 'karina8.jpeg', caption: 'Own Zone Pic 2' },
    { src: 'karina9.jpeg', caption: 'Own Zone Pic 3' }
];

function createGallery(containerId, photos) {
    const photoGallery = document.getElementById(containerId);

    photos.forEach(photo => {
        const photoDiv = document.createElement('div');
        photoDiv.className = 'photo';

        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.caption;

        const caption = document.createElement('div');
        caption.className = 'photo-caption';
        caption.textContent = photo.caption;

        photoDiv.appendChild(img);
        photoDiv.appendChild(caption);

        photoGallery.appendChild(photoDiv);
    });
}

createGallery('exclusiveGallery', exclusivePhotos);
createGallery('memoriesGallery', memoriesPhotos);
createGallery('ownZoneGallery', ownZonePhotos);
