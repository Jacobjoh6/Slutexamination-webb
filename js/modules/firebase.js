  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, query, where } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
  import { showMovieList } from "./display.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDJktHTa6ivBxGn5CQwD3Xi_9MqMmzD1BE",
    authDomain: "moviebase-3a24c.firebaseapp.com",
    projectId: "moviebase-3a24c",
    storageBucket: "moviebase-3a24c.appspot.com",
    messagingSenderId: "933478861997",
    appId: "1:933478861997:web:2d7a459d03e3460fd48a24"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db  = getFirestore(app)

//   const delBtns = document.querySelectorAll(`#delBtn`)


  async function saveToDatabase(movie) {
    console.log(movie);
      try {
          await addDoc(collection(db,`movieCollection`),movie)
      } catch (error) {
          console.log(`error`, error);
      }
  }

  async function getMovies() {
    const movieList = await getDocs(collection(db, `movieCollection`));
    showMovieList(movieList)
    }

    async function removeFromDatabase(movieId) {
        try {
            await deleteDoc(doc(db, `movieCollection`, movieId));
        } catch (error) {
            console.log(`error`);
        }
    } 

    function addRemoveBtn() {
        const delBtns = document.querySelectorAll(`.delBtn`)

        delBtns.forEach((delBtn) => {
            delBtn.addEventListener(`click`, async (event) => {
                const movieId = event.target.getAttribute(`data-movie-id`)
                await removeFromDatabase(movieId)
                
            })
        })
    }

    async function checkIfMovieExists(movie) {
        console.log(movie);
        try {
            const movieQuery = query(collection(db, `movieCollection`), where(`name`, `==`, movie));
            const result = await getDocs(movieQuery);
            let resultMovie = {};

            result.forEach((movie) => {
            resultMovie = movie;
        });

        console.log(resultMovie.data());
        return resultMovie;
        } catch (error) {
            console.log(`error`);
        }
    }

    // async function compareSearch(movie) {

    // }
    // resultMovie.data() används för att visa det som en användare matar in
    

  export { saveToDatabase, getMovies, addRemoveBtn, checkIfMovieExists }        
