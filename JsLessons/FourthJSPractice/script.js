const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt("How many movies you watched");

        while (personalMovieDB.count == '' || personalMovieDB.count == null 
            || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many movies you watched");
        }
    },

    rememberMyFilms:() => {
        for (let i = 0; i < 2; i++) {
            const movie = prompt("One of the last watched movies"),
                raiting = prompt("How you rate this movie");

            if (movie != null && movie.length < 50 &&
                movie != '' && raiting != '') {
                personalMovieDB.movies[movie] = raiting;
                console.log("Done!");
            } else {
                console.log("Error!");
                i--;
            }
        }
    },

    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10 && personalMovieDB.count < 0) {
            console.log("Watched quite a few movies");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("You are a classic spectator");
        } else if (personalMovieDB.count >= 30) {
            console.log("You are movie buff");
        } else {
            console.log("Error!");
        }
    },

    showMyDb: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: () => {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Your favorite genre is number ${i}`).toLowerCase();

            if (genre === '' || genre == null) {
                console.log("Error");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorite gende ${i} - is ${item}`);
        });
    },

    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDb(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();