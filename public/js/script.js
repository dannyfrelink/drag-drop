const anchors = document.querySelectorAll('a');
const themeSelector = document.querySelectorAll('input[type="radio"]')
const images = document.querySelectorAll('a>img');

window.onload = () => {
    themeSelector[0].focus();
}

anchors.forEach(anchor => {
    anchor.style.top = `${Math.floor(Math.random() * 250) + 100}px`;
    anchor.style.left = `${Math.floor(Math.random() * 650) + 200}px`;
})

anchors.forEach(anchor => {
    anchor.addEventListener('focus', event => {
        event.preventDefault();
        anchors.forEach(d => {
            d.classList.remove('dragged');
            d.removeEventListener('keydown', moveKeys);
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

for (let i = 0; i < images.length; i++) {
    themeSelector.forEach(theme => {
        if (theme.checked) {
            images[i].src = `images/${theme.id}s/${theme.id}-${[i]}.png`
        }
        theme.addEventListener('click', () => {
            images[i].src = `images/${theme.id}s/${theme.id}-${[i]}.png`
        })
    });
}