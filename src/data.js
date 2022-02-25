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

//Create a link for each movie
export const createBtnLink = function (id){
  document.location.href = "./movies.html?id=" + id;
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
  return array;
}

//Calculate rating second page
export const  average = (rating) =>{
  let fs = (rating*5)/100
  return fs;
}