document.addEventListener('DOMContentLoaded', () => {
    // touschstart
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start');
        console.log(e.touches); // findeg list(count)
        console.log(e.targetTouches);
        console.log(e.changedTouches);
    });

    // touchmove
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('Move');
        console.log(e.targetTouches[0].pageX);
    });

    // touchend
    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('End');
    });

    // touchenter
    // hammer.js
    // touchleave

    // touchcancel
});
