import { anchors } from "./variables.js";

// Randomize position of images
anchors.forEach(anchor => {
    anchor.style.top = `${Math.floor(Math.random() * 250) + 100}px`;
    anchor.style.left = `${Math.floor(Math.random() * 650) + 250}px`;
});

// Add focus styling and move anchors with keyboard
anchors.forEach(anchor => {
    anchor.addEventListener('focus', event => {
        event.preventDefault();
        anchors.forEach(a => {
            a.classList.remove('dragged');
            a.removeEventListener('keydown', moveKeys);
            a.removeEventListener('mousemove', mouseMove);
        });
        anchor.classList.add('dragged');
        anchor.addEventListener('keydown', moveKeys);
    });

    // Mouse dragging
    anchor.addEventListener('mousedown', () => {
        anchor.addEventListener('mousemove', mouseMove);
    });
    anchor.addEventListener('mouseup', () => {
        anchor.removeEventListener('mousemove', mouseMove);
    });

    const moveKeys = e => {
        const keyCode = e.keyCode;
        // On click 'H' or 'left arrow'
        if (keyCode === 37 || keyCode === 72) {
            anchor.style.left = parseInt(anchor.style.left) - 15 + "px";
        }
        // On click 'K' or 'top arrow'
        else if (keyCode === 38 || keyCode === 75) {
            anchor.style.top = parseInt(anchor.style.top) - 15 + "px";
        }
        // On click 'L' or 'right arrow'
        else if (keyCode === 39 || keyCode === 76) {
            anchor.style.left = parseInt(anchor.style.left) + 15 + "px";
        }
        // On click 'J' or 'bottom arrow'
        else if (keyCode === 40 || keyCode === 74) {
            anchor.style.top = parseInt(anchor.style.top) + 15 + "px";
        }
    }

    const mouseMove = e => {
        const xPosition = e.clientX;
        const yPosition = e.clientY;
        const maxWidth = window.innerWidth - 60;
        const maxHeight = window.innerHeight - 220;
        const edgeDetectionQuery = (xPosition < maxWidth && xPosition > 60) && (yPosition < window.innerHeight && yPosition < maxHeight && yPosition > 220)

        if (edgeDetectionQuery) {
            anchor.style.left = `${xPosition - 60}px`;
            anchor.style.top = `${yPosition - 220}px`;
        }
    }
});

