import {  saveToDatabase, getMovies } from "./modules/firebase.js"
// import {  } from "./modules/display.js";


const movieNameInput  = document.querySelector(`#movieNameInput`);
const movieGenreInput = document.querySelector(`#movieGenreInput`);
const movieDateInput  = document.querySelector(`#movieDateInput`);
const submitBtn       = document.querySelector(`#submitBtn`);
let movie = {
  name: ``,
  genre: ``,
  date: ``
}


submitBtn.addEventListener(`click`, () => {
    movie.name  = movieNameInput.value
    movie.genre = movieGenreInput.value
    movie.date  = movieDateInput.value

    console.log(movie);

    saveToDatabase(movie);

  })

  getMovies();

