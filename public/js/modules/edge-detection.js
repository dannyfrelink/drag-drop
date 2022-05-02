const anchors = document.querySelectorAll('a');

let selected;

document.addEventListener('mousemove', (e) => {
    if (selected) {
        selected.style.left = e.clientX - selected.offsetWidth / 2 + 'px';
        selected.style.top = e.clientY - selected.offsetHeight / 2 + 'px';
    }
})

for (anchor of anchors) {
    console.log(anchor)
    anchor.addEventListener('click', (e) => {
        if (selected) {
            for (node of e.path) {
                if (node.nodeName === 'SECTION') {
                    selected.classList.remove('dragged')
                    selected.style.left = ''
                    selected.style.top = ''
                    node.querySelector('ul').appendChild(selected)

                    selected = null
                }
            }
        } else {
            for (node of e.path) {
                if (node.nodeName === 'LI') {
                    selected = node
                    selected.classList.add('dragged')
                    selected.style.left = e.clientX - selected.offsetWidth / 2 + 'px';
                    selected.style.top = e.clientY - selected.offsetHeight / 2 + 'px';
                }
            }
        }
    })
}