const numberOfFilms = +prompt("How many movies you watched");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const movie = prompt("One of the last watched movies"),
          raiting = prompt("How you rate this movie");

    if (movie != null 
        && movie.length < 50 
        && movie != '' 
        && raiting != '') {
        personalMovieDB.movies[movie] = raiting;
        console.log("Done!");
    } else {
        console.log("Error!");
        i--;
    }
}

if (personalMovieDB.count < 10 && personalMovieDB.count < 0) {
    console.log("Watched quite a few movies");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You are a classic spectator");
} else if (personalMovieDB.count >= 30) {
    console.log("You are movie buff");
} else {
    console.log("Error!");
}

console.log(personalMovieDB);