const anchors = document.querySelectorAll('a');
const articles = document.querySelectorAll('article');
const themeSelector = document.querySelectorAll('input[type="radio"]')
const images = document.querySelectorAll('article>img');

console.log(themeSelector[0])


window.onload = () => {
    themeSelector[0].focus();
}

articles.forEach(article => {
    article.style.top = `${Math.floor(Math.random() * 250) + 100}px`;
    article.style.left = `${Math.floor(Math.random() * 650) + 200}px`;
})

for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('focus', event => {
        event.preventDefault();
        articles.forEach(article => {
            article.classList.remove('dragged');
            article.removeEventListener('keydown', moveKeys);
        });
        articles[i].classList.add('dragged');
        articles[i].addEventListener('keydown', moveKeys);
    });

    const moveKeys = e => {
        const keyCode = e.keyCode;
        if (keyCode === 37 || keyCode === 72) {
            articles[i].style.left = parseInt(articles[i].style.left) - 10 + "px";
        } else if (keyCode === 38 || keyCode === 75) {
            articles[i].style.top = parseInt(articles[i].style.top) - 10 + "px";
        } else if (keyCode === 39 || keyCode === 76) {
            articles[i].style.left = parseInt(articles[i].style.left) + 10 + "px";
        } else if (keyCode === 40 || keyCode === 74) {
            articles[i].style.top = parseInt(articles[i].style.top) + 10 + "px";
        }
    }
}

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