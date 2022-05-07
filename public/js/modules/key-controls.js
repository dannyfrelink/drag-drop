import { title, sections, arrayBeerAnchors, arrayBookAnchors, currentThemeText } from './variables.js';

let counterTab = 0;
let counterThemeSelector = 0;

// Eventlisteners on keypress
window.addEventListener('keyup', e => {
    const keyCode = e.keyCode;

    // On click 'O'
    if (keyCode === 79) {
        counterTab--;
        if (counterTab < 0) {
            counterTab = 14
        }
    }
    // On click 'P'
    if (keyCode === 80) {
        counterTab++;
        if (counterTab === 15) {
            counterTab = 0
        }
    }
    // Add focus to next anchor
    if (counterThemeSelector % 2 === 1) {
        arrayBookAnchors[counterTab].focus();
    } else {
        arrayBeerAnchors[counterTab].focus();
    }

    // On click 'spacebar'
    if (keyCode === 32) {
        counterThemeSelector++;
        sections.forEach(section => {
            section.classList.toggle('hidden');
            if (counterThemeSelector % 2 === 1) {
                currentThemeText.textContent = 'Huidig thema: Boeken';
                title.textContent = 'Waardeer de boeken';
                arrayBookAnchors[counterTab].focus();
            } else {
                currentThemeText.textContent = 'Huidig thema: Bier';
                title.textContent = 'Waardeer de pils';
                arrayBeerAnchors[counterTab].focus();
            }
        });
    }
});