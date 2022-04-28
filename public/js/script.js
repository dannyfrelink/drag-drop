const sections = document.querySelectorAll('section');
const anchors = document.querySelectorAll('a');
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

let counter = 0;

window.addEventListener('keyup', e => {
    const keyCode = e.keyCode;
    // console.log(e.keyCode)

    if (keyCode === 80) {
        for (let i = 0; i < anchors.length; i++) {
            console.log(anchors[i].nextSibling.nextSibling)
            // anchors[i].nextSibling.nextSibling.focus()
            // e.target.nextSibling.nextSibling.focus();

            // for (var i = 0; i < anchors.length; i++) {
            //     var anchor = anchors[i];
            // }
        }
    }

    if (keyCode === 32) {
        counter++;
        sections.forEach(section => {
            section.classList.toggle('hidden');
            if (counter % 2 === 1) {
                currentThemeText.textContent = 'Current theme: Books';
            } else {
                currentThemeText.textContent = 'Current theme: Beers';
            }
        });
    }
});