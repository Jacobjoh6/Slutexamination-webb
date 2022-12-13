import { addRemoveBtn, getMovies, checkIfMovieExists } from "./firebase.js"
const movieSection = document.querySelector(`#movieSection`);
const showBtn      = document.querySelector(`#showBtn`);
const movieSearch  = document.querySelector(`#movieSearch`);



function showMovieList(movieList) {
    showBtn.addEventListener(`click`, async () => {
        
        await getMovies();
        
        console.log(movieList)
        movieList.forEach((movie) => {
            console.log(movie.id);
            console.log(movie.data());
            
        const movieListElem = 
        `
        <li>Name: ${movie.data().name}</li>
        <li>Genre: ${movie.data().genre}</li>
        <li>Released: ${movie.data().date}</li>
        <button class="delBtn" data-movie-id="${movie.id}">Delete movie</button>
        `
            
            movieSection.insertAdjacentHTML(`afterbegin`, movieListElem)
            addRemoveBtn();
        });
    })
}

function displaySearch(movie) {
    let template = 
    `
    <article>
        <h2>${movie.data().name}</h2>
        <p>${movie.data().genre}</p>
        <p>${movie.data().date}</p>
    </article>
    `
    movieSearch.insertAdjacentHTML(`beforeend`, template)
}
 
// showMovieList();

export { showMovieList, displaySearch }