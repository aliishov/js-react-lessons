document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeCganges = () => {
        genre.textContent = 'DRAMA';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newMovie = addInput.value;
        const favorite = checkbox.checked;

        if (newMovie) {
            newMovie = (newMovie.length > 21) ? newMovie.substring(0, 22) + '...' : newMovie;
            (favorite) ? console.log('Add new favorite movie') : console.log();

            movieDB.movies.push(newMovie);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
            event.target.reset();
        } else {
            alert('Empty Input');
        }
    });

    function createMovieList(movies, parent) {
        parent.innerHTML = '';
        sortArr(movies);
        movies.forEach((movie, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${movie}
                    <div class="delete"></div>
                </li>
            `
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(movies, parent);
            });
        });
    }

    deleteAdv(adv);
    makeCganges();
    createMovieList(movieDB.movies, movieList);
});