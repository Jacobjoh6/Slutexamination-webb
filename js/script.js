
// Det är i denna modul som allting hämtas och körs från. exempelvis sp fins alla knappar som hämtar diverse funktioner
// jag har vidare delat upp i tre olika moduler som alla har olika funktioner för att hålla rörigheten minimal



import { displaySearch } from "./modules/display.js";
import {  saveToDatabase, getMovies, checkIfMovieExists } from "./modules/firebase.js"

// import {  } from "./modules/display.js";


const movieNameInput  = document.querySelector(`#movieNameInput`);
const movieGenreInput = document.querySelector(`#movieGenreInput`);
const movieDateInput  = document.querySelector(`#movieDateInput`);
const submitBtn       = document.querySelector(`#submitBtn`);
const searchBtn       = document.querySelector(`#searchBtn`);
const searchInput     = document.querySelector(`#searchInput`);
const mainElem        = document.querySelector(`main`)
const showBtn         = document.querySelector(`#showBtn`)
const backBtn         = document.querySelector(`.backBtn`)
const movieSection    = document.querySelector(`#movieSection`)

let movie = {
  name: ``,
  genre: ``,
  date: ``
}

backBtn.classList.add(`hide`);

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

    showBtn.addEventListener(`click`, () => {
      mainElem.classList.add(`hide`)
      backBtn.classList.remove(`hide`)
      movieSection.classList.remove(`hide`)
    })

    backBtn.addEventListener(`click`, () => {
      mainElem.classList.remove(`hide`)
      movieSection.classList.add(`hide`)
      backBtn.classList.add(`hide`)
    })


  getMovies();

    // checkIfMovieExists(userInput);
