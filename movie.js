// Access DOM
const movieNameList = document.getElementById("movie-name-list");
const movieDropdown = document.getElementById("movie-dropdown");
// const movieDropdown = document.querySelectorAll("[name=films]")


// Access object
const movieNamesArray = Object.keys(movieData); // returns the four movie name keys of the movieData object as an array

// Transferring movieNamesArray to dropdown
for (let i = 0; i < movieNamesArray.length; i++) {
  const optionItem = document.createElement("option");
  optionItem.textContent = movieNamesArray[i];
  optionItem.value = movieNamesArray[i];
  movieDropdown.appendChild(optionItem);
}

// User rating

const ratingElementList = document.querySelectorAll(".user-rating");
for (let i = 0; i < ratingElementList.length; i++) {
  ratingElementList[i].innerText = "My rating: "; // sets the text of the p elements to "User rating: "
}

const darjeelingRatingElement = document.getElementById("darjeeling-user-rating"); // selects the p element with the id "darjeeling-user-rating"

const royalRatingElement = document.getElementById("royal-user-rating");

const foxRatingElement = document.getElementById("fox-user-rating");

const budapestRatingElement = document.getElementById("budapest-user-rating"); // sets budapestRatingElement variable to the p element "budapest-user-rating"

function addUserRating(event) {
  // event is an object that contains the html properties about the user event (form submit event)
  console.log(event);
  event.preventDefault(); // prevents default form behaviour is to refresh the page when the form is submitted // calls preventDefault method on the submit event
  const userRating = document.getElementById("input-rating").value; // sets userRating variable to the user's rating
  const chosenFilm = movieDropdown.value; // selects the chosen film (the key name string e.g., "The Grand Budapest Hotel") from the dropdown list
  movieData[chosenFilm].userRating = userRating; // sets the userRating variable equal to the userRating property of the key e.g., "The Grand Budapest Hotel" {userRating:}

  // for (let i = 0; i < ratingElementList; i++) {
  //   if (ratingElementList[i] === chosenFilm[i]){
  //     console.log(userRating)
  //     ratingElementList[i].innerText = "My rating: " +  "hello";
  //   }
  // } Trying to replace below with more concise code

  
    ratingElementList.forEach((rating, i) => {
      rating.innerText = "My rating: " + userRating;
    })

}

// Plot text on hover
let plotArr = Object.values(movieData).map((movie) => movie.plot);
const plotList = document.querySelectorAll(".movie-plot");
for (let i = 0; i < plotList.length; i++) {
  // Iterates through .movie-plot elements
  plotList[i].innerText = "Plot: " + plotArr[i]; // Applies "Plot: " + Object movie plot information to the elements inner text
}

// Movie rating on hover
let ratingArr = Object.values(movieData).map((movie) => movie.rating);
const ratingList = document.querySelectorAll(".rating");
for (let i = 0; i < ratingList.length; i++) {
  ratingList[i].innerText = "IMDB rating: " + ratingArr[i];
}

// Set buttons to display movie names

// Revert to original button text
const buttonList = document.querySelectorAll(".button-text");
console.log(buttonList);

function buttonTextOriginal() {
  for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].innerHTML = Object.keys(movieData)[i];
  }
}

//Reveal year and "cast" on "click"

let years = Object.values(movieData).map((movie) => movie.year);
let castArr = Object.values(movieData).map((movie) => movie.cast);
const displayYear = (index) => {
  buttonList[index].innerText =
    "Year: " + years[index] + "\n Cast: " + castArr[index];
};

// Call functions
buttonList.forEach((button, i) => {
  button.addEventListener("click", () => {
    displayYear(i);
  });
});
