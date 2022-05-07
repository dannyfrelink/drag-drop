const body = document.querySelector('body');
const title = document.querySelector('h1');
const sections = document.querySelectorAll('section:not(:first-of-type)');
const anchors = document.querySelectorAll('a');
const beerAnchors = document.querySelectorAll('#beers a');
const bookAnchors = document.querySelectorAll('#books a');
const arrayBeerAnchors = [...beerAnchors];
const arrayBookAnchors = [...bookAnchors];
arrayBeerAnchors.reverse();
arrayBookAnchors.reverse();
const currentThemeText = document.querySelector('#current-theme');

// Remove image dragging animation
const images = document.querySelectorAll('img');
images.forEach(image => {
    image.ondragstart = () => {
        return false;
    }
});

export { body, title, sections, anchors, arrayBeerAnchors, arrayBookAnchors, currentThemeText }