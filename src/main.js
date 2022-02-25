//Import data and functions 
import data from './data/ghibli/ghibli.js';
import {filmPosters, backToTop, hideBtn, createPoster, sortMovies} from './data.js'

//Create an array with poster, title, description, release_date, rating score and id.
let allFilms = []; 
for(let i = 0; i < data.films.length; i++){ 
    allFilms.push(filmPosters(data.films[i]));
}


console.log(allFilms); 

//Create movie cards
createPoster(allFilms); 


//Use the selected value to filter the movies 
document.getElementById("selectFilter").addEventListener("change", function (){
    sortMovies(this.value, allFilms), createPoster(allFilms) })


//boton ScrollTop
const btnSelector = document.querySelector(".scrollTopBtn");

btnSelector.addEventListener("click", backToTop);
window.addEventListener("scroll", hideBtn);


//Filter
let searchBar = document.getElementById("searchBar"); 

searchBar.addEventListener('keyup', (e)=>{
    const searchString = e.target.value.toLowerCase(); 

    const filteredMovies = data.films.filter(movie => { 
        return movie.title.toLowerCase().includes(searchString) || movie.description.toLowerCase().includes(searchString) || movie.director.toLowerCase().includes(searchString)   ;
    })
    document.getElementById("showMessage").innerText = " "
    let arraySearch = [];
    if (filteredMovies.length == 0){
        document.getElementById("showMessage").innerText = "Sorry! We couldn't find a movie for you. Try different movie title or director"; 
    } 
    for(let i = 0; i < filteredMovies.length; i++){ 
        arraySearch.push(filmPosters(filteredMovies[i])); 
    }
    
    createPoster(arraySearch);
    
    
})






