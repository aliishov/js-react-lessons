'use strict';

// console.dir(document);
const box = document.querySelector('.box'),
      btn = document.querySelector('button');

const width = box.clientWidth;
const height = box.clientHeight;
console.log(width, height);

const offsetWidth = box.offsetWidth;
const offsetHeight = box.offsetHeight;
console.log(offsetWidth, offsetHeight);

const scrollWidth = box.scrollWidth;
const scrollHeight = box.scrollHeight;
console.log(scrollWidth, scrollHeight);

btn.addEventListener('click', () => {
    // box.style.height = scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);
console.log(style);
console.log(style.display);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);
