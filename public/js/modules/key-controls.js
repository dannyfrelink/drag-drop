import { body, title, sections, arrayBeerAnchors, arrayBookAnchors, currentThemeText } from './variables.js';

let counterTab = 0;
let counterThemeSelector = 0;

// Eventlisteners on keypress
window.addEventListener('keyup', e => {
    const keyCode = e.keyCode;

    // On click 'backspace' (remove element)
    if (keyCode === 8) {
        if (counterThemeSelector % 2 === 1 && arrayBookAnchors.length > 0) {
            arrayBookAnchors[counterTab].remove();
            arrayBookAnchors.splice(counterTab, 1);
            if (counterTab < 0) {
                counterTab = arrayBookAnchors.length - 1
            }
            if (counterTab === arrayBookAnchors.length) {
                counterTab = 0
            }
        }

        else if (counterThemeSelector % 2 === 0 && arrayBeerAnchors.length > 0) {
            arrayBeerAnchors[counterTab].remove();
            arrayBeerAnchors.splice(counterTab, 1);

            if (counterTab < 0) {
                counterTab = arrayBeerAnchors.length - 1
            }
            if (counterTab === arrayBeerAnchors.length) {
                counterTab = 0
            }
        }
    }

    // On click 'O' (backwards TAB)
    if (keyCode === 79) {
        counterTab--;
        if (counterTab < 0) {
            if (counterThemeSelector % 2 === 1) {
                counterTab = arrayBookAnchors.length - 1
            } else {
                counterTab = arrayBeerAnchors.length - 1
            }
        }
    }
    // On click 'P' (forward TAB)
    if (keyCode === 80) {
        counterTab++;
        if (counterThemeSelector % 2 === 1) {
            if (counterTab === arrayBookAnchors.length) {
                counterTab = 0
            }
        } else {
            if (counterTab === arrayBeerAnchors.length) {
                counterTab = 0
            }
        }
    }
    // Add focus to next anchor
    if (counterThemeSelector % 2 === 1 && arrayBookAnchors.length > 0) {
        arrayBookAnchors[counterTab].focus();
    } else if (counterThemeSelector % 2 === 0 && arrayBeerAnchors.length > 0) {
        arrayBeerAnchors[counterTab].focus();
    }

    // On click 'spacebar' (change theme)
    if (keyCode === 32) {
        counterThemeSelector++;
        sections.forEach(section => {
            section.classList.toggle('hidden');
            // Book theme
            if (counterThemeSelector % 2 === 1) {
                body.classList.add('book');
                currentThemeText.textContent = 'Huidig thema: Boeken';
                title.textContent = 'Waardeer de boeken';
                if (arrayBookAnchors.length > 0) {
                    arrayBookAnchors[counterTab].focus();
                }
            }
            // Beer theme
            else if (counterThemeSelector % 2 === 0) {
                body.classList.remove('book');
                currentThemeText.textContent = 'Huidig thema: Bier';
                title.textContent = 'Waardeer de pils';
                if (arrayBeerAnchors.length > 0) {
                    arrayBeerAnchors[counterTab].focus();
                }
            }
        });
    }
});