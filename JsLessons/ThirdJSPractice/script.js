let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    numberOfFilms = +prompt("How many movies you watched");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many movies you watched");
    }

    personalMovieDB.count = numberOfFilms;
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const movie = prompt("One of the last watched movies"),
            raiting = prompt("How you rate this movie");

        if (movie != null && movie.length < 50 
            && movie != '' && raiting != '') {
            personalMovieDB.movies[movie] = raiting;
            console.log("Done!");
        } else {
            console.log("Error!");
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count < 0) {
        console.log("Watched quite a few movies");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("You are a classic spectator");
    } else if (personalMovieDB.count >= 30) {
        console.log("You are movie buff");
    } else {
        console.log("Error!");
    }
}

function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre is number ${i}`);
    }
}

start();
rememberMyFilms();
detectPersonalLevel();
showMyDb(personalMovieDB.privat);
writeYourGenres();