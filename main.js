function plus() {
    const h2 = document.querySelector('h2');
    h2.classList.remove('minus', 'normal');
    h2.classList.add('plus');
}

function minus() {
    const h2 = document.querySelector('h2');
    h2.classList.remove('plus', 'normal');
    h2.classList.add('minus');
}

function normal() {
    const h2 = document.querySelector('h2');
    h2.classList.remove('plus', 'minus');
    h2.classList.add('normal');
}

document.querySelector('.plus-btn').onclick = plus;
document.querySelector('.minus-btn').onclick = minus;
document.querySelector('.normal-btn').onclick = normal;
