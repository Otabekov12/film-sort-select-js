// Gets elements from DOM
const elFilmsList = document.querySelector('.films__list');
const elFilmTemplate = document.querySelector('#film-template').content;
const elGenreTemplate = document.querySelector('#film-genre-template').content;
const elFilmsFilterForm = document.querySelector('.films-form');
const elFilmsSelect = document.querySelector('.film-select');
const elFilmsSearchInput = document.querySelector('.film-search-input');
const elFilmSortSelect = document.querySelector('.film-select-sort');

const elAddFilmsForm = document.querySelector('.add-films-form');
const elAddNewFilmName = document.querySelector('.film-name-input');
const elAddNewFilmPoster = document.querySelector('.film-poster-input');
const elAddNewFilmOverview = document.querySelector('.film-overview-input');
const elAddNewFilmDate = document.querySelector('.film-date-input');
const elAddNewFilmGenres = document.querySelector('.film-genres-input');


// Generates array of unique genres
const generateGenres = (films) => {
	const genres = [];
	
	films.forEach((film) => {
		film.genres.forEach((genre) => {
			if (!genres.includes(genre)) {
				genres.push(genre);
			}
		});
	});
	
	return genres;
};


// Renders genres to select
const renderGenresSelect = (genres, element) => {
	genres.forEach((genre) => {
		const newOption = document.createElement('option');
		newOption.value = genre;
		newOption.textContent = genre;
		
		element.appendChild(newOption);
	});
};

// Renders genres to film's item
var renderGenres = ((array, element) => {
	element.innerHTML = null;
	
	const genreFragment = document.createDocumentFragment();
	
	array.forEach((genre) => {
		var genreTemplate = elGenreTemplate.cloneNode(true);
		
		genreTemplate.querySelector('.film-genre').textContent = genre;
		
		genreFragment.appendChild(genreTemplate);
	});
	
	element.appendChild(genreFragment);
});

// Normalaze Date

const normalazeDate = (fortmat=>{
	const time = new Date(fortmat)
	const day = String (time.getDay()).padStart(2,0);
	const month = String (time.getMonth()+1).padStart(2,0);
	const year = time.getFullYear();
	
	return day + '.' + month + '.' + year
})


// Renders films
var renderFilms = (array, element) => {
	element.innerHTML = null;
	
	const filmFragment = document.createDocumentFragment();
	
	array.forEach((film) => {
		const filmTemplate = elFilmTemplate.cloneNode(true);
		
		filmTemplate.querySelector('.film__title').textContent = film.title;
		filmTemplate.querySelector('.film__image').src = film.poster;
		filmTemplate.querySelector('.film__overview').textContent =
		film.overview;
		filmTemplate.querySelector('.film__time').textContent =
		normalazeDate(film.release_date);
		
		const elGenres = filmTemplate.querySelector('.film__genres');
		
		renderGenres(film.genres, elGenres);
		
		filmFragment.appendChild(filmTemplate);
	});
	
	element.appendChild(filmFragment);
};

renderFilms(films, elFilmsList);
renderGenresSelect(generateGenres(films), elFilmsSelect);


elFilmsFilterForm.addEventListener('submit', (evt) => {
	evt.preventDefault();
	
	const selectValue = elFilmsSelect.value.trim();
	const searchValue = elFilmsSearchInput.value.trim();
	const sortValue   = elFilmSortSelect.value.trim();
	
	
	let filteredByGenre = [];
	
	if (selectValue === 'All') {
		filteredByGenre = films;
	} else {
		filteredByGenre = films.filter((film) =>
		film.genres.includes(selectValue),
		);
	}
	
	// SEARCH
	const regex = new RegExp(searchValue, 'gi');
	
	const filteredBySearch = filteredByGenre.filter((film) =>
	film.title.match(regex),
	);
	
	// SORT
	
	let sorted =[];
	if(sortValue === 'a_z'){
		sorted = filteredBySearch.sort((a,b) => {
			if(a.title > b.title){
				return 1;
			}else if (a.title < b.title){
				return-1;
			}else{
				return 0;
			}
		});
		
		
	}else if(sortValue === 'z_a'){
		sorted = filteredBySearch.sort((a,b) => {
			if(a.title < b.title){
				return 1;
			}else if (a.title > b.title){
				return-1;
			}else{
				return 0;
			}
		});
		
	}else if(sortValue === 'old_new'){
		sorted = filteredBySearch.sort((a,b) => {
			if(a.title > b.title){
				return 1;
			}else if (a.title < b.title){
				return-1;
			}else{
				return 0;
			}
		});
		
	}else if(sortValue === 'new_old'){
		sorted = filteredBySearch.sort((a,b) => {
			if(normalazeDate(a.time) < normalazeDate(b.time)){
				return 1;
			}else if (normalazeDate(a.time) > normalazeDate(b.time)){
				return-1;
			}else{
				return 0;
			}
		});
	}
	
	renderFilms(filteredBySearch, elFilmsList);
});


// function addNewPokemon(name, type, weight, , url, pokemonList) {
// 	var newPokemonName = name.value.trim();
// 	var newPokemonType = type.value.trim();
// 	var newPokemonWeight = weight.value.trim();
// 	var newPokemonHeight = height.value.trim();
// 	var newPokemonUrl = url.value.trim();
	
// 	var newPokemon = {
// 		name: newPokemonName,
// 		type: newPokemonType,
// 		weight: newPokemonWeight,
// 		height: newPokemonHeight,
// 		img: newPokemonUrl,
// 	};
	
// 	pokemonList.unshift(newPokemon);
// }


function addNewFilm(title, poster, overview, release_date, genres, addingFilmList){
	const newFilmName = title.value.trim();
	const newFilmPoster = poster.value.trim();
	const newFilmOverview = overview.value.trim();
	const newFilmRealeaseDate = release_date.value.trim();
	const newFilmGenres = genres = genres.value.trim();
	

	const newFilm = {
		title : newFilmName,
		poster : newFilmPoster,
		overview : newFilmOverview,
		release_date : newFilmRealeaseDate,
		genres : newFilmGenres.split("."),
	};

	addingFilmList.unshift(newFilm);
}


const handdleSubmit=(evt=>{
	evt.preventDefault();

	
	addNewFilm(elAddNewFilmName, elAddNewFilmPoster, elAddNewFilmOverview, elAddNewFilmDate, elAddNewFilmGenres,films);
	renderFilms(films, elFilmsList);
})	
elAddFilmsForm.addEventListener("submit",handdleSubmit)







// function renderNewPokemon(evt) {
// 	evt.preventDefault();
	
// 	addNewPokemon(elName, elType, elWeight, elHeight, elUrl, pokemons);
	
// 	renderPokemon(pokemons);
// }

// elForm.addEventListener("submit", renderNewPokemon);

// renderPokemon(pokemons);


