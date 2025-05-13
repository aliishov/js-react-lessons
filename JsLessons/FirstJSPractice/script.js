const numberOfFilms = +prompt("How many movies you watched");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const movie1 = prompt("One of the last watched movies"),
      raiting1 = prompt("How you rate this movie"),
      movie2 = prompt("One of the last watched movies"),
      raiting2 = prompt("How you rate this movie");

personalMovieDB.movies[movie1] = raiting1;
personalMovieDB.movies[movie2] = raiting2;

console.log(personalMovieDB);