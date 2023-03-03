// Access DOM
const movieNameList = document.getElementById("movie-name-list");
const movieDropdown = document.getElementById("movie-dropdown");
// const movieDropdown = document.querySelectorAll("[name=films]")
const ratingElementList = document.querySelectorAll(".user-rating");
const buttonList = document.querySelectorAll(".button-text");
const plotList = document.querySelectorAll(".movie-plot");
const ratingList = document.querySelectorAll(".rating");
const movieInfo = document.getElementById("dar-info");
const movieInfoList = document.querySelectorAll(".info");

console.log(movieInfoList)



// Access object
const movieNamesArray = Object.keys(movieData); // returns the four movie name keys of the movieData object as an array
let plotArr = Object.values(movieData).map((movie) => movie.plot);
let years = Object.values(movieData).map((movie) => movie.year);
let castArr = Object.values(movieData).map((movie) => movie.cast);
let ratingArr = Object.values(movieData).map((movie) => movie.rating);

let movieIndex = 0;
movieInfo.innerText = movieNamesArray[movieIndex] + "\n Plot: " + plotArr[movieIndex] + "\n IMDB rating: " + ratingArr[movieIndex] + "\n My rating: ";



// Transferring movieNamesArray to dropdown
for (let i = 0; i < movieNamesArray.length; i++) {
  const optionItem = document.createElement("option");
  optionItem.textContent = movieNamesArray[i];
  optionItem.value = movieNamesArray[i];
  movieDropdown.appendChild(optionItem);
}

// User rating
for (let i = 0; i < ratingElementList.length; i++) {
  ratingElementList[i].innerText = "My rating: "; // sets the text of the p elements to "User rating: "
}

function addUserRating(event) {
  // event is an object that contains the html properties about the user event (form submit event)
  console.log(event);
  event.preventDefault(); // prevents default form behaviour is to refresh the page when the form is submitted // calls preventDefault method on the submit event
  const userRating = document.getElementById("input-rating").value; // sets userRating variable to the user's rating
  const chosenFilm = movieDropdown.value; // selects the chosen film (the key name string e.g., "The Grand Budapest Hotel") from the dropdown list
  movieData[chosenFilm].userRating = userRating; // sets the userRating variable equal to the userRating property of the key e.g., "The Grand Budapest Hotel" {userRating:}
  
  ratingElementList.forEach((rating, i) => {
    rating.innerText = "My rating: " + userRating;
  })
}

// Plot text on hover

for (let i = 0; i < plotList.length; i++) { // Iterates through .movie-plot elements
  plotList[i].innerText = "Plot: " + plotArr[i]; // Applies "Plot: " + Object movie plot information to the elements inner text
}

// Movie rating on hover
for (let i = 0; i < ratingList.length; i++) {
  ratingList[i].innerText = "IMDB rating: " + ratingArr[i];
}


// Revert to movieName button text

function buttonTextOriginal() {
  for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].innerHTML = Object.keys(movieData)[i];
  }
}

//Reveal year and "cast" on "click"


const displayYear = (index) => {
  buttonList[index].innerText =
    "Year: " + years[index] + "\n Cast: " + castArr[index];
};

// Call functions
buttonList.forEach((button, i) => {
  button.addEventListener("click", () => {
    displayYear(i);
  });
  button.addEventListener("mouseout", () => {
    buttonTextOriginal(i);
  })
});


// Template

// if ('content' in document.createElement('template')){
//   const tname = document.getElementById("name");
//   const template = document.querySelector("#wrapper-template");

//   const testName = "test name template";
//   tname.textContent = testName;
// }

// Dynamic poster
for (let movie in movieData) {
  console.log(`Movie: ${movie}`);
  console.log(`Plot: ${movieData[movie].plot}`);
  console.log(`Cast: ${movieData[movie].cast.join(', ')}`);
  console.log(`Runtime: ${movieData[movie].runtime}`);
  console.log(`Rating: ${movieData[movie].rating}`);
  console.log(`User Rating: ${movieData[movie].userRating}`);
  console.log(`Year: ${movieData[movie].year}`);
}
// create a darjeeling-image div
const poster = document.createElement('div');
poster.className = 'darjeeling-image';
poster.style.border = "solid 1px red" ;
poster.style.height = '500px'
poster.style.width = '300px';

// create an image element and set its attributes
const image = document.createElement('div');


// create a text-box div
const textBoxDiv = document.createElement('div');
textBoxDiv.id = 'text-box';
textBoxDiv.className = 'text-box';

// create paragraph elements for name, plot, rating, and user rating
const infoParagraph = document.createElement('p');
infoParagraph.id = 'movie-info';
infoParagraph.innerText = `${movieNamesArray[0]} \n` + "Plot: " + `${plotArr[0]}\n` + "Rating: " + `${ratingArr[0]}\n` + "User rating:";

// append the paragraph elements to the text-box div
textBoxDiv.appendChild(infoParagraph);

// create a button element and set its attributes
// const button = document.createElement('button');
// button.id = 'movie-year';
// button.className = 'button-text';
// button.innerHTML = '&#9733';

// append the image, text-box, and button elements to the darjeeling-image div
poster.appendChild(image);
image.appendChild(textBoxDiv);
// imageDiv.appendChild(button);

// append the darjeeling-image div to the wrapper div
console.log(poster);

const outputLocation = document.getElementById("movie-output");
console.log(outputLocation);
outputLocation.appendChild(poster);


