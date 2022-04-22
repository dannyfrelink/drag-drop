const anchors = document.querySelectorAll('a');
const articles = document.querySelectorAll('article');
for (let i = 0; i < articles.length; i++) {
    articles[i].style.top = "100px";
    articles[i].style.left = "100px";
}
let clickCounter = 0;

for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('focus', event => {
        event.preventDefault();

        clickCounter = clickCounter + 1;
        if(clickCounter > 1) {
            articles[i].removeEventListener('keydown', moveKeys);
            clickCounter = 0;
            articles.forEach(article => {
                article.classList.remove('dragged');
            });
        } else {
            articles[i].classList.remove('dragged');
            articles[i].classList.add('dragged');
            articles[i].addEventListener('keydown', moveKeys);
        }
    });

    const moveKeys = e => {
        const keyCode = e.keyCode;
        if(keyCode === 37) {
            articles[i].style.left = parseInt(articles[i].style.left) - 10 + "px";
        } else if(keyCode === 38) {
            articles[i].style.top = parseInt(articles[i].style.top) - 10 + "px";
        } else if(keyCode === 39) {
            articles[i].style.left = parseInt(articles[i].style.left) + 10 + "px";
        } else if(keyCode === 40) {
            articles[i].style.top = parseInt(articles[i].style.top) + 10 + "px";
        }
    }
}