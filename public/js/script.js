const themeSelector = document.querySelectorAll('input[type="radio"]');
const sections = document.querySelectorAll('section');
const anchors = document.querySelectorAll('a');

window.onload = () => {
    themeSelector[0].focus();
}

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
            anchor.style.left = parseInt(anchor.style.left) - 10 + "px";
        } else if (keyCode === 38 || keyCode === 75) {
            anchor.style.top = parseInt(anchor.style.top) - 10 + "px";
        } else if (keyCode === 39 || keyCode === 76) {
            anchor.style.left = parseInt(anchor.style.left) + 10 + "px";
        } else if (keyCode === 40 || keyCode === 74) {
            anchor.style.top = parseInt(anchor.style.top) + 10 + "px";
        }
    }
});

console.log(sections)

themeSelector.forEach(theme => {
    sections.forEach(section => {
        if (theme.checked && section.id === `${theme.id}s`) {
            console.log('test')
            section.classList.remove('hidden');
        }
        theme.addEventListener('click', () => {
            if (section.id === `${theme.id}s`) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });
    });
});