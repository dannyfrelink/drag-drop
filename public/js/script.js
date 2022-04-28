const sections = document.querySelectorAll('section');
const anchors = document.querySelectorAll('a');
const beerAnchors = document.querySelectorAll('#beers a');
const bookAnchors = document.querySelectorAll('#books a');
const arrayBeerAnchors = [...beerAnchors];
const arrayBookAnchors = [...bookAnchors];
arrayBeerAnchors.reverse();
arrayBookAnchors.reverse();
const currentThemeText = document.querySelector('#current-theme');

anchors.forEach(anchor => {
    anchor.style.top = `${Math.floor(Math.random() * 250) + 100}px`;
    anchor.style.left = `${Math.floor(Math.random() * 650) + 200}px`;
});


anchors.forEach(anchor => {
    anchor.addEventListener('focus', event => {
        event.preventDefault();
        anchors.forEach(a => {
            a.classList.remove('dragged');
            a.removeEventListener('keydown', moveKeys);
        });
        anchor.classList.add('dragged');
        anchor.addEventListener('keydown', moveKeys);
    });

    const moveKeys = e => {
        const keyCode = e.keyCode;
        if (keyCode === 37 || keyCode === 72) {
            anchor.style.left = parseInt(anchor.style.left) - 15 + "px";
        } else if (keyCode === 38 || keyCode === 75) {
            anchor.style.top = parseInt(anchor.style.top) - 15 + "px";
        } else if (keyCode === 39 || keyCode === 76) {
            anchor.style.left = parseInt(anchor.style.left) + 15 + "px";
        } else if (keyCode === 40 || keyCode === 74) {
            anchor.style.top = parseInt(anchor.style.top) + 15 + "px";
        }
    }
});

let counterTab = 0;
let counterThemeSelector = 0;

window.addEventListener('keyup', e => {
    const keyCode = e.keyCode;

    if (counterThemeSelector % 2 === 1) {
        arrayBookAnchors[counterTab].focus();
    } else {
        arrayBeerAnchors[counterTab].focus();
    }
    if (keyCode === 79) {
        counterTab--;
        if (counterTab < 0) {
            counterTab = 14
        }
    }
    if (keyCode === 80) {
        counterTab++;
        if (counterTab === 15) {
            counterTab = 0
        }
    }

    if (keyCode === 32) {
        counterThemeSelector++;
        sections.forEach(section => {
            section.classList.toggle('hidden');
            if (counterThemeSelector % 2 === 1) {
                currentThemeText.textContent = 'Current theme: Books';
            } else {
                currentThemeText.textContent = 'Current theme: Beers';
            }
        });
    }
});