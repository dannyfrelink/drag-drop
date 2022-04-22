const anchors = document.querySelectorAll('a');
const articles = document.querySelectorAll('article');
for (let i = 0; i < articles.length; i++) {
    articles[i].style.top = `${Math.floor(Math.random() * 400) + 100}px`;
    articles[i].style.left = `${Math.floor(Math.random() * 500) + 100}px`;
}

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
        if(keyCode === 37 || keyCode === 72) {
            articles[i].style.left = parseInt(articles[i].style.left) - 10 + "px";
        } else if(keyCode === 38 || keyCode === 75) {
            articles[i].style.top = parseInt(articles[i].style.top) - 10 + "px";
        } else if(keyCode === 39 || keyCode === 76) {
            articles[i].style.left = parseInt(articles[i].style.left) + 10 + "px";
        } else if(keyCode === 40 || keyCode === 74) {
            articles[i].style.top = parseInt(articles[i].style.top) + 10 + "px";
        }
    }
}