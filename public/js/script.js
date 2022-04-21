const anchor = document.querySelector('a');
const article = document.querySelector('article');
article.style.top = "100px";
article.style.left = "100px";
let clickCounter = 0;

anchor.addEventListener('click', event => {
    event.preventDefault();

    clickCounter = clickCounter + 1;
    if(clickCounter > 1) {
        document.removeEventListener('keydown', moveKeys);
        clickCounter = 0;
    } else {
        document.addEventListener('keydown', moveKeys);
    }
});

const moveKeys = e => {
    const keyCode = e.keyCode;
    if(keyCode === 37) {
        article.style.left = parseInt(article.style.left) - 10 + "px";
    } else if(keyCode === 38) {
        article.style.top = parseInt(article.style.top) - 10 + "px";
    } else if(keyCode === 39) {
        article.style.left = parseInt(article.style.left) + 10 + "px";
    } else if(keyCode === 40) {
        article.style.top = parseInt(article.style.top) + 10 + "px";
    }
}