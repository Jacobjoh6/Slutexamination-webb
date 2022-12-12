import { addRemoveBtn, getMovies } from "./firebase.js"
const movieSection = document.querySelector(`#movieSection`)
const showBtn      = document.querySelector(`#showBtn`)


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
            
            movieSection.insertAdjacentHTML(`beforeend`, movieListElem)
            addRemoveBtn();
        });
    })
}


 
// showMovieList();

export { showMovieList }