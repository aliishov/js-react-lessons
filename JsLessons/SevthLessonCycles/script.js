let num = 50;

// WHILE
while (num < 55) {
    console.log(num++);
}

// DO WHILE
do {
    console.log(num++);
} while (num < 60);

// FOR
for (let i = 0; i < 10; i++) {
    if (i === 6) break;
    if (i === 3) continue;
    
    console.log(i);
}