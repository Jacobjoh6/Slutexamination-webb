


// Det är i denna modul som allt som exemplevis ändras i DOM finns. 
// Det är också här som all all info hämtad från de olika kollektionerna i firebase visas. 
// Dessa då hämtade från firebase modulen och sedan exoprterade till bl.a knapparna i script modulen.


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
        <p>Title: ${movie.data().name}</p>
        <p>Genre: ${movie.data().genre}</p>
        <p>Released: ${movie.data().date}</p>
        <button class="delBtn" data-movie-id="${movie.id}">X</button>
        `
            
            movieSection.insertAdjacentHTML(`afterbegin`, movieListElem)
            addRemoveBtn();
        });
    })
}

async function displaySearch(movie) {
    const viewMovie = await checkIfMovieExists(movie)
    let template = 
    `
    <article class="movieSearch">
        <h2>${viewMovie.data().name}</h2>
        <p>${viewMovie.data().genre}</p>
        <p>${viewMovie.data().date}</p>
    </article>
    `
    movieSearch.insertAdjacentHTML(`beforeend`, template)
}
 
// showMovieList();

export { showMovieList, displaySearch }