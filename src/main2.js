//Import data and functions 
import data from './data/ghibli/ghibli.js';
import {average} from './data.js';
// import {createElements} from './data2.js';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const page_type = urlParams.get('id')

const found = data.films.find(element => element.id === page_type);

//Poster
let poster = found.poster
let imgPoster = document.getElementById("moviePoster")
imgPoster.src = poster;

//Title
let titleh1 = document.getElementById("movieTitle")
let saveTitle = found.title;
titleh1.innerHTML = saveTitle;

//Rating 
let score = document.getElementById("score")
let saveRating = parseInt(found.rt_score);
let rating = `${average(saveRating)}/5` 
score.innerHTML = rating;

//Year
let year = document.getElementById("year")
let saveYear = found.release_date; 
year.innerHTML = saveYear;

// Director
let director = document.getElementById("director"); 
let saveDirector = found.director;
director.innerHTML = `Directed by: ${saveDirector}`;

//Producer
let producer = document.getElementById("producer"); 
let saveProducer = found.producer;
producer.innerHTML = `Produced by: ${saveProducer}`;

//Description 
let description = document.getElementById("description")
let saveDescription= found.description; 
description.innerHTML = saveDescription;

 const createElements = (classSection, elementTitle, array, divId) =>{
    let elementSection = document.querySelector(classSection);
    let title = document.createElement("h2");
    title.innerHTML = elementTitle;
    elementSection.insertBefore(title, elementSection.firstChild);
    
    for(let element of array){
       let card = document.createElement("figure")
       let elementImg = document.createElement("img");
       elementImg.setAttribute("src", element.img);
       let elementName = document.createElement("figcaption");
       elementName.innerHTML = element.name;
       card.appendChild(elementImg); 
       card.appendChild(elementName)
 
       let elementList = document.getElementById(divId);
       elementList.appendChild(card)
    }
 }
 
//Characters 
if(found.people.length >0){
    createElements(".characters", "Characters", found.people, "characterPictures")
}

//Locations
if(found.locations.length >0){
    createElements(".locations", "Locations", found.locations, "locationPictures")
}

//Vehicles
if(found.vehicles.length >0){
    createElements(".vehicles", "Vehicles", found.vehicles, "vehiclePictures")
}


//Movie button 

let linkMovie = document.getElementById("linkMovie")
linkMovie.setAttribute("href", found.movie);

//   //INTERACCION DE LOS BOTONES
//boton ScrollTop
const btnSelector = document.querySelector(".scrollTopBtn");


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
