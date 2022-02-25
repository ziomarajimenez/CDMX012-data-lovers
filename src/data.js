//Create an array with different characteristics
export const filmPosters = (movies) => {
  let movie = [movies.poster, movies.title, movies.description, movies.release_date, movies.rt_score, movies.id];
  return movie;
};

//Cut the description up to 400 characters
export const cutDescription = (description) => {
  let descriptionLength = description.length;
  if (descriptionLength > 400){
    return description.slice(0, 400) + "..."
  } else{
    return description
  }
};

//
export function createPoster(array) {
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

//Create a link for each movie
export const createBtnLink = function (id){
  document.location.href = "./movies.html?id=" + id;
}

//Button srollTop 
//Show button
export function backToTop(){
  // window.scrollTo(0,0);
  window.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth"
    })
}
  
//hide button
export function hideBtn(){
  
  if(window.pageYOffset > 900){
    document.getElementById("scrollTop").classList.remove("hidden");
  }else{
    document.getElementById("scrollTop").classList.add("hidden")
  }
}
  
//filter movies
export function sortMovies(userSelection, array) {
    
  if (userSelection =="AZ"){
       array.sort(function (a,b){   
          return  a[1] > b[1] ? 1 : -1
      })

  } else if (userSelection == "ZA"){
       array.sort(function (a,b){   
          return  a[1] < b[1] ? 1 : -1
      })
  } else if (userSelection == "rating") {
       array.sort(function (a,b){   
          return Number(b[4]) - Number(a[4])
      })
  } else if( userSelection == "year"){
       array.sort(function (a,b){   
          return Number(b[3]) - Number(a[3])
      })
  }
  
}