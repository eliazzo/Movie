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
  
  const movieNameList = document.getElementById("movie-name-list")
  console.log(movieNameList)
  const movieNames = Object.keys(movieData) // returns the four movie name keys of the movieData object as an array

  const movieDropdown = document.getElementById("movie-dropdown")
  // const movieDropdown = document.querySelectorAll("[name=films]") 

  for (let i = 0; i < movieNames.length; i++){
    const listItem = document.createElement("li"); 
    listItem.textContent = movieNames[i];
    movieNameList.appendChild(listItem);

    const optionItem = document.createElement("option");
    optionItem.textContent = movieNames[i];
    optionItem.value = movieNames[i];
    movieDropdown.appendChild(optionItem);

  }



// Setting buttons to display movie names

let darjeelingNameHolder = document.getElementById("darjeeling-name"); // selects the p "darjeeling-name" element
let darjeelingName = Object.keys(movieData)[0]; // selects "the Darjeeling Limited" from the Object.keys(movieData) array
console.log(darjeelingName);
darjeelingNameHolder.innerText = darjeelingName; // sets the inner text of the p "darjeeling-name" element to the darjeelingName variable

document.getElementById("royal-name").innerHTML = Object.keys(movieData)[1];

document.getElementById("fox-name").innerText = Object.keys(movieData)[2];

document.getElementById("budapest-name").innerText = Object.keys(movieData)[3];


//Revert to original button text

function buttonTextOriginal(){
  const buttonList = document.querySelectorAll(".button-text");
  console.log(buttonList)

  for(let i = 0; i < buttonList.length; i++){
      buttonList[i].innerHTML = Object.keys(movieData)[i];

}
}

// const buttonList = document.querySelectorAll(".button-text")
// buttonList.addEventListener("onmouseout", function(){
//   for(let i = 0; i < buttonList.length; i++){
//     buttonList[i].innerHTML = Object.keys(movieData)[i]
//     }
//   })



 
 // User rating

  const darjeelingRatingElement = document.getElementById("darjeeling-user-rating"); // selects the p element with the id "darjeeling-user-rating" 
  darjeelingRatingElement.innerText = "My rating: ";

  const royalRatingElement = document.getElementById("royal-user-rating");
  royalRatingElement.innerText = "My rating: ";

  const foxRatingElement = document.getElementById ("fox-user-rating");
  foxRatingElement.innerText = "My rating: ";

  const budapestRatingElement = document.getElementById("budapest-user-rating"); // sets budapestRatingElement variable to the p element "budapest-user-rating"
  budapestRatingElement.innerText = "My rating: "; // sets the text of the p elements to "User rating: "


  function addUserRating(event){
      event.preventDefault();
      const userRating = document.getElementById("user-rating").value; // sets userRating variable to the user's rating
      const chosenFilm = movieDropdown.value // selects the chosen film (the key name string e.g., "The Grand Budapest Hotel") from the dropdown list
      movieData[chosenFilm].userRating = userRating // sets the userRating variable equal to the userRating property of the key e.g., "The Grand Budapest Hotel" {userRating:}

      if(chosenFilm === "The Darjeeling Limited"){
        darjeelingRatingElement.innerText = "My rating: " + userRating;
      }

      if(chosenFilm === "The Royal Tenenbaums"){
        royalRatingElement.innerText = "My rating: " + userRating;
      }

      if(chosenFilm === "Fantastic Mr. Fox"){
        foxRatingElement.innerText = "My rating: " + userRating;
      }
      
      if (chosenFilm === "The Grand Budapest Hotel") {
        budapestRatingElement.innerText = "My rating: " + userRating;
      }
     
      

  }

  // Working with the movieData object - plot text and movie rating on image hover

  document.getElementById("darjeeling-plot").innerHTML = "Plot: " + movieData["The Darjeeling Limited"].plot
  document.getElementById("royal-plot").innerHTML = "Plot: " + movieData["The Royal Tenenbaums"].plot
  document.getElementById("fox-plot").innerHTML = "Plot: " + movieData["Fantastic Mr. Fox"].plot
  document.getElementById("budapest-plot").innerHTML = "Plot: " + movieData["The Grand Budapest Hotel"].plot

  
  document.getElementById("darjeeling-rating").innerHTML = "IMDB rating: " + movieData["The Darjeeling Limited"].rating;
  document.getElementById("royal-rating").innerHTML = "IMDB rating: " + movieData["The Royal Tenenbaums"].rating;
  document.getElementById("fantastic-rating").innerHTML = "IMDB rating: " + movieData["Fantastic Mr. Fox"].rating;
  document.getElementById("budapest-rating").innerHTML = "IMDB rating: " + movieData["The Grand Budapest Hotel"].rating;

//END



  //Buttons to reveal year "click" and cast "dblclick"

  const DarjeelingButton = document.getElementById('darjeeling-year')
      DarjeelingButton.addEventListener("click", function(){
      document.getElementById('darjeeling-year').innerText = "Year: " + movieData["The Darjeeling Limited"].year
      })
      DarjeelingButton.addEventListener("dblclick", function(){
      document.getElementById('darjeeling-year').innerText = "Cast: " + movieData["The Darjeeling Limited"].cast
      })

  const RoyalButton = document.getElementById('royal-year')
      RoyalButton.addEventListener("click", function(){
        document.getElementById('royal-year').innerText = "Year: " + movieData["The Royal Tenenbaums"].year
      })
      RoyalButton.addEventListener("dblclick", function(){
        document.getElementById('royal-year').innerText = "Cast: " + movieData["The Royal Tenenbaums"].cast
      })

  const foxButton = document.getElementById('fox-year')
      foxButton.addEventListener("click", function(){
        document.getElementById('fox-year').innerText = "Year: " + movieData["Fantastic Mr. Fox"].year
      })
      foxButton.addEventListener("dblclick", function(){
        document.getElementById('fox-year').innerText = "Cast: " + movieData["Fantastic Mr. Fox"].cast
      })
      
  const budapestButton = document.getElementById('budapest-year')
      budapestButton.addEventListener("click", function(){
        document.getElementById('budapest-year').innerText = "Year: " + movieData["The Grand Budapest Hotel"].year
      })
      budapestButton.addEventListener("dblclick", function(){
        document.getElementById('budapest-year').innerText = "Cast: " + movieData["The Grand Budapest Hotel"].cast
      })

// END









  



