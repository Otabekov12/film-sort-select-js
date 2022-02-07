// const elFilmsList = document.querySelector('.films__list');
// const elFilmTemplate = document.querySelector('#film-template').content;
// const elGenreTemplate = document.querySelector('#film-genre-template').content;
// const elFilmsFilterForm = document.querySelector('.films-form');
// const elFilmsSelect = document.querySelector('.film-select');
// const elFilmsSearchInput = document.querySelector('.film-search-input');
// const elFilmSortSelect = document.querySelector('.film-select-sort');


// // Render Genre

// const renderGenre =(array=>{
    
//     let allGenre = []
    
//     array.forEach(film=>{
//         film.genres.forEach(genre=>{
//             if(!allGenre.includes(genre)){
//                 allGenre.push(genre)
                
//             }
//         })
//     })
//     return allGenre;
// })


// const genreSelect =((selecter, element)=>{
//     element.innerHTML=null;
//     selecter.forEach(genre=>{
//         const newOption = document.createElement('option');
//         newOption.value=genre;
//         newOption.textContent = genre;
        
//         element.appendChild(newOption)
//     })
    
// });

// genreSelect(renderGenre(films),elFilmsSelect)

// // Normalaze Date

// const normalazeDate = (fortmat=>{
//     const time = new Date(fortmat)
//     const day = String (time.getDay()).padStart(2,0);
//     const month = String (time.getMonth()+1).padStart(2,0);
//     const year = time.getFullYear();
    
//     return day + '.' + month + '.' + year
// })


// // Render Films

// const renderFilm = ((array, element)=>{
//     element.innerHTML=null;

//     array.forEach(film =>{
//         const newTemplate = elFilmTemplate.cloneNode(true);
        
//         newTemplate.querySelector('.film__title').textContent = film.title;
//         newTemplate.querySelector('.film__image').src = film.poster;
//         newTemplate.querySelector('.film__overview').textContent = film.overview;
//         newTemplate.querySelector('.film__time').textContent = normalazeDate(film.release_date) ;
//         newTemplate.querySelector('.film__genres').textContent = film.genres;
        
        
//         element.appendChild(newTemplate);
//     })
// });
// renderFilm(films, elFilmsList);

// // elFilmsFilterForm.addEventListener('submit', evt=>{
// //     evt.preventDefault();

// //     const secondArray=[]

//     // films.forEach(film=>{
//     //     if(film.genres.includes(elFilmsSelect.value)){
//     //         secondArray.push(film);
//     //     }
//     // })

// //     const generateGenres = (films) => {
// //         const genres = [];
        
// //         films.forEach((film) => {
// //             film.genres.forEach((genre) => {
// //                 if (!genres.includes(genre)) {
// //                     genres.push(genre);
// //                 }
// //             });
// //         });
        
// //         return genres;
// //     };
// //     renderFilm(secondArray,elFilmsList)     
// // })


// elFilmsFilterForm.addEventListener("submit", (evt)=>{
//     evt.preventDefault();
//     const secondArray = [];
    
//     films.forEach(film=>{
//         if(film.genres.includes(elFilmsSelect.value)){
//             secondArray.push(secondArray);
//         }
//     });
    
//     renderFilm(secondArray, elFilmsList);
//     console.log(secondArray)

// })