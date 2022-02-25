//Import data and functions 
import data from './data/ghibli/ghibli.js';
import {filmPosters, sortMovies, cutDescription, createBtnLink} from './data.js'

//Create an array with poster, title, description, release_date, rating score and id.
let allFilms = []; 
for(let i = 0; i < data.films.length; i++){ 
    allFilms.push(filmPosters(data.films[i]));
}


//Create movie cards
 function createPoster(array) {
    document.getElementById("moviesList").innerHTML = '';
    for (let j = 0; j < array.length; j++) {
        let divGlobal = document.createElement("div");
        divGlobal.className = "globalCard";
        let divCreation = document.createElement("div");
        divCreation.className = "card";
        let filmPoster = document.createElement("img");
        filmPoster.setAttribute("src", array[j][0]);
        let movieYr = document.createElement("p");
        movieYr.className = "movieYr";
        movieYr.innerHTML = ("<strong>" + array[j][3] + "</strong>");
        let movieTitle = document.createElement("p");
        movieTitle.className = "movieTitle";
        movieTitle.innerHTML = "<strong>" + array[j][1] + "</strong>";
        divCreation.appendChild(filmPoster);
        divCreation.appendChild(movieYr);
        divCreation.appendChild(movieTitle);
  
        //Backcard
        let backCard = document.createElement("div");
        backCard.className = "back-card";
        let pSinopsys = document.createElement("p");
        pSinopsys.className = "pSinopsys";
        pSinopsys.innerHTML = "<strong>" + "Sinopsys" + "</strong>";
        backCard.appendChild(pSinopsys);
  
        let filmDescription = document.createElement("p");
        filmDescription.className = "filmDescription";
        filmDescription.innerHTML = cutDescription(array[j][2]);
        let btnMoreInfo = document.createElement("button");
        btnMoreInfo.className = "btnMoreInfo";
        
        btnMoreInfo.addEventListener("click", function()
        {createBtnLink(array[j][5])
        });
        
        btnMoreInfo.innerHTML = "More Info";
        backCard.appendChild(filmDescription);
        backCard.appendChild(btnMoreInfo);
        divGlobal.appendChild(divCreation);
        divGlobal.appendChild(backCard);
        document.getElementById("moviesList").appendChild(divGlobal);
    }
  }
  
createPoster(allFilms); 


//Use the selected value to filter the movies 
document.getElementById("selectFilter").addEventListener("change", function (){
    sortMovies(this.value, allFilms), createPoster(allFilms) })


//boton ScrollTop
const btnSelector = document.querySelector(".scrollTopBtn");
//Button srollTop 
//Show button
function backToTop(){
    // window.scrollTo(0,0);
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
      })
  }
    
  //hide button
 function hideBtn(){
    
    if(window.pageYOffset > 900){
      document.getElementById("scrollTop").classList.remove("hidden");
    }else{
      document.getElementById("scrollTop").classList.add("hidden")
    }
  }
    

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






