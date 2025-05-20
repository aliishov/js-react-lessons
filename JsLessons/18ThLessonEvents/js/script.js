const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() { // Old
//     alert('Click');
// };


btn.addEventListener('click', () => {
    alert('First Click');
});

btn.addEventListener('click', () => {
    alert('Second Click');
});

btn.addEventListener('mouseenter', (e) => {
    console.log(e);
    // e.target.remove();
});

let i = 0;
const deleteElement = (e) => {
    // console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

btn.addEventListener('click', deleteElement, {once: true});
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
});