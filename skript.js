'use strict';

const btn = document.querySelector('.btn'),
    box = document.querySelector('.box');
let pos = 0;

const animate = () => requestAnimationFrame(animateBox);

const animateBox = () => {
    btn.removeEventListener('click', animate);

    pos++;
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(animateBox);
    }
    if (pos == 300) {
        pos = 0;
        btn.addEventListener('click', animate);
    }

};

btn.addEventListener('click', animate);

