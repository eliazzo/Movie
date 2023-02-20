//Object

let movieData = { // object made up of 4 keys and 4 values
    "The Darjeeling Limited": { // key (mostly a string)
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", " Owen Wilson", " Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      userRating: "",
      year: 2007, // lines 5-10 value of "The Darjeeling Limited" key of movieData object but also an object itself made up of 6 key value pairs
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", " Gwnyeth Paltrow", " Anjelica Huston"],
      runtime: 170,
      userRating: "",
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        " Meryl Streep",
        " Bill Murray",
        " Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
      userRating: "",
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", " F. Murray Abraham", " Mathieu Amalric"],
      userRating: "",
    },
  }


  //Transferring object data (movie names) to html list
  
  const movieNameList = document.getElementById("movie-name-list");
  console.log(movieNameList);
  const movieNamesArray = Object.keys(movieData); // returns the four movie name keys of the movieData object as an array

  const movieDropdown = document.getElementById("movie-dropdown")
  // const movieDropdown = document.querySelectorAll("[name=films]") 

  for (let i = 0; i < movieNamesArray.length; i++){
    const listItem = document.createElement("li"); 
    listItem.textContent = movieNamesArray[i];
    movieNameList.appendChild(listItem);

    const optionItem = document.createElement("option");
    optionItem.textContent = movieNamesArray[i];
    optionItem.value = movieNamesArray[i];
    movieDropdown.appendChild(optionItem);

  }


// Set buttons to display movie names

// Revert to original button text
const buttonList = document.querySelectorAll(".button-text");

function buttonTextOriginal(){
  for(let i = 0; i < buttonList.length; i++){
      buttonList[i].innerHTML = Object.keys(movieData)[i];
}
}



 // User rating

 const ratingElementList = document.querySelectorAll(".user-rating");
 for(let i = 0; i < ratingElementList.length; i++){
  ratingElementList[i].innerText = "My rating: "; // sets the text of the p elements to "User rating: "
 }

  const darjeelingRatingElement = document.getElementById("darjeeling-user-rating"); // selects the p element with the id "darjeeling-user-rating" 

  const royalRatingElement = document.getElementById("royal-user-rating");
  
  const foxRatingElement = document.getElementById ("fox-user-rating");
 
  const budapestRatingElement = document.getElementById("budapest-user-rating"); // sets budapestRatingElement variable to the p element "budapest-user-rating"



  function addUserRating(event){ // event is an object that contains the html properties about the user event (form submit event)
      console.log(event);
      event.preventDefault(); // prevents default form behaviour is to refresh the page when the form is submitted // calls preventDefault method on the submit event
      const userRating = document.getElementById("user-rating").value; // sets userRating variable to the user's rating
      const chosenFilm = movieDropdown.value // selects the chosen film (the key name string e.g., "The Grand Budapest Hotel") from the dropdown list
      movieData[chosenFilm].userRating = userRating // sets the userRating variable equal to the userRating property of the key e.g., "The Grand Budapest Hotel" {userRating:}

      for (let i = 0; i < movieNamesArray; i++) {
        if (chosenFilm === movieNamesArray[i]){
          console.log(userRating)
        }
      }
      
      // if(chosenFilm === "The Darjeeling Limited"){
      //   darjeelingRatingElement.innerText = "My rating: " + userRating;
      // }

      // if(chosenFilm === "The Royal Tenenbaums"){
      //   royalRatingElement.innerText = "My rating: " + userRating;
      // }

      // if(chosenFilm === "Fantastic Mr. Fox"){
      //   foxRatingElement.innerText = "My rating: " + userRating;
      // }
      
      // if (chosenFilm === "The Grand Budapest Hotel") {
      //   budapestRatingElement.innerText = "My rating: " + userRating;
      // }
     
      

  }
  
  // Plot text on hover

  const plotFromObjectArr = [movieData["The Darjeeling Limited"].plot,  movieData["The Royal Tenenbaums"].plot, movieData["Fantastic Mr. Fox"].plot,movieData["The Grand Budapest Hotel"].plot];
  for (let i=0; i<plotFromObjectArr.length; i++){ // Iterates through Object movie plot information

  const plotList = document.querySelectorAll(".movie-plot");
  for (let i=0; i<plotList.length; i++){ // Iterates through .movie-plot elements
    plotList[i].innerText = "Plot: " + plotFromObjectArr[i]; // Applies "Plot: " + Object movie plot information to the elements inner text
  }
}

  // Movie rating on hover
  
const ratingFromObjectArr = [movieData["The Darjeeling Limited"].rating, movieData["The Royal Tenenbaums"].rating, movieData["Fantastic Mr. Fox"].rating, movieData["The Grand Budapest Hotel"].rating];
const ratingList = document.querySelectorAll(".rating");
for (let i = 0; i < ratingList.length; i++){
  ratingList[i].innerText = "IMDB rating: " + ratingFromObjectArr[i];
}



//Buttons to reveal year "click" and cast "dblclick"

  
  const yearFromObjectArr = [movieData["The Darjeeling Limited"].year, movieData["The Royal Tenenbaums"].year, movieData["Fantastic Mr. Fox"].year, movieData["The Grand Budapest Hotel"].year]

  function displayYear(){
    for (let i = 0; i < buttonList.length; i ++) {
      buttonList[i].innerText = yearFromObjectArr[i];
    }
  } 

  const castFromObjectArr = [movieData["The Darjeeling Limited"].cast, movieData["The Royal Tenenbaums"].cast, movieData["Fantastic Mr. Fox"].cast, movieData["The Grand Budapest Hotel"].cast];

  function displayCast (){
    for(let i = 0; i < buttonList.length; i++) {
      buttonList[i].innerText = castFromObjectArr[i];
    }  
  }











  



