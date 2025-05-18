// 1 - By ID
const box = document.getElementById('box')
console.log(box);

// 2 - By Tag Name
const buttons = document.getElementsByTagName('button'); 
console.log(buttons);
console.log(buttons[0]);

const secButton = document.getElementsByTagName('button')[1];
console.log(secButton);

// 3 - By Class
const circles = document.getElementsByClassName('circle');
console.log(circles);

// 4 - By CSS Selector
const hearts = document.querySelectorAll('.heart');
console.log(hearts);
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);