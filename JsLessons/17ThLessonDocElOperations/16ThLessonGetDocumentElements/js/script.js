const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

// Changing Element Style
box.style.backgroundColor = 'blue';
box.style.width = '500px';
box.style.cssText = 'background-color: yellow; width: 500px'

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'green';
}

hearts.forEach(item => {
    item.style.backgroundColor = 'white';
});

// Creating Document Elements
const div = document.createElement('div');
const text = document.createTextNode('Hello World');

div.classList.add('black');
// document.body.append(div);
// wrapper.append(div);
// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

// Old Code
wrapper.appendChild(div);
wrapper.insertBefore(div, hearts[0]);
wrapper.removeChild(hearts[1]);
wrapper.replaceChild(div, hearts[0]);

// Adding Text or HTML Code
div.innerHTML = `<h1>Hello World</h1>`;
// div.textContent = 'Hello';

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>')