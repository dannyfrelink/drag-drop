import { anchors } from "./variables.js";

// Randomize position of images
anchors.forEach(anchor => {
    anchor.style.top = `${Math.floor(Math.random() * 150) + 175}px`;
    anchor.style.left = `${Math.floor(Math.random() * 700) + 250}px`;
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
        const xPosition = e.target.style.left.split('px')[0];
        const yPosition = e.target.style.top.split('px')[0];
        const minWidth = (e.target.clientWidth / 2) + 20
        const maxWidth = window.innerWidth - (e.target.clientWidth / 2) - 130;
        const minHeight = (e.target.clientHeight / 2) - 50
        const maxHeight = window.innerHeight - (e.target.clientHeight / 2) - 340;
        // const maxWidth = window.innerWidth - 125;
        // const maxHeight = window.innerHeight - 450;

        console.log(e.target)

        // On click 'H' or 'left arrow'
        if (keyCode === 37 || keyCode === 72) {
            if (xPosition > minWidth) {
                anchor.style.left = parseInt(anchor.style.left) - 15 + "px";
            }
        }
        // On click 'K' or 'top arrow'
        else if (keyCode === 38 || keyCode === 75) {
            if (yPosition > minHeight) {
                anchor.style.top = parseInt(anchor.style.top) - 15 + "px";
            }
        }
        // On click 'L' or 'right arrow'
        else if (keyCode === 39 || keyCode === 76) {
            if (xPosition < maxWidth) {
                anchor.style.left = parseInt(anchor.style.left) + 15 + "px";
            }
        }
        // On click 'J' or 'bottom arrow'
        else if (keyCode === 40 || keyCode === 74) {
            if (yPosition < maxHeight) {
                anchor.style.top = parseInt(anchor.style.top) + 15 + "px";
            }
        }
    }

    const mouseMove = e => {
        const xPosition = e.clientX;
        const yPosition = e.clientY;
        const minWidth = (e.target.clientWidth / 2) + 60
        const maxWidth = window.innerWidth - (e.target.clientWidth / 2) - 65;
        const minHeight = (e.target.clientHeight / 2) + 170
        const maxHeight = window.innerHeight - (e.target.clientHeight / 2) - 110;

        const edgeDetectionQuery = (xPosition < maxWidth && xPosition > minWidth) && (yPosition < maxHeight && yPosition > minHeight);

        if (edgeDetectionQuery) {
            anchor.style.left = `${xPosition - (e.target.clientWidth / 2)}px`;
            anchor.style.top = `${yPosition - (e.target.clientHeight / 2)}px`;
        }
    }
});

