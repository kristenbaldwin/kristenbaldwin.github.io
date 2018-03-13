// Images to load to HTML

var pics = [
    {
        href:'jj-watt-1.jpg',
        src: 'jj-watt-1.jpg'
    },
    {
        href:'jj-watt-2.jpg',
        src: 'jj-watt-2.jpg'
    },
    {
        href:'jj-watt-3.jpg',
        src: 'jj-watt-3.jpg'
    },
    {
        href:'jj-watt-4.jpg',
        src: 'jj-watt-4.jpg'
    },
    {
        href:'jj-watt-5.jpg',
        src: 'jj-watt-5.jpg'
    },
    {
        href:'jj-watt-6.jpg',
        src: 'jj-watt-6.jpg'
    },
];

// Add images from the array to the div in HTML
// Using a Bootstrap container for spacing and grid and flex-wrap

var picsContainer = document.querySelector('.pics-container');
pics.forEach(function(pic) {
    var anchorElement = document.createElement('a');
    var picElement = document.createElement('img');
    picElement.setAttribute('src', pic.src);
    anchorElement.setAttribute('href', pic.href);
    anchorElement.setAttribute('data-lightbox', 'jj-gallery');
    picsContainer.appendChild(anchorElement);
    anchorElement.appendChild(picElement);
});
