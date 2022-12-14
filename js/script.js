import { displaySearch } from "./modules/display.js";
import {  saveToDatabase, getMovies, checkIfMovieExists } from "./modules/firebase.js"

import { displaySearch } from "./modules/display.js";
import {  saveToDatabase, getMovies, checkIfMovieExists } from "./modules/firebase.js"
// import {  } from "./modules/display.js";


const movieNameInput  = document.querySelector(`#movieNameInput`);
const movieGenreInput = document.querySelector(`#movieGenreInput`);
const movieDateInput  = document.querySelector(`#movieDateInput`);
const submitBtn       = document.querySelector(`#submitBtn`);
const searchBtn       = document.querySelector(`#searchBtn`);
const searchInput     = document.querySelector(`#searchInput`);

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

  searchBtn.addEventListener(`click`, () => {
    const userInput = searchInput.value
    checkIfMovieExists(userInput);
    displaySearch(userInput);
    })


  // searchBtn.addEventListener(`click`, () => {
  //   const userInput = searchInput.value
  //   // const resultMovie = movie
  //   displaySearch(userInput);
  //   })

  getMovies();

    // checkIfMovieExists(userInput);
