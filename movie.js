// Access DOM
const movieNameList = document.getElementById("movie-name-list");
const movieDropdown = document.getElementById("movie-dropdown");
// const movieDropdown = document.querySelectorAll("[name=films]")
const ratingElementList = document.querySelectorAll(".user-rating");
const buttonList = document.querySelectorAll(".button-text");
const plotList = document.querySelectorAll(".movie-plot");
const ratingList = document.querySelectorAll(".rating");


// Access object
const movieNamesArray = Object.keys(movieData); // returns the four movie name keys of the movieData object as an array
let plotArr = Object.values(movieData).map((movie) => movie.plot);
let years = Object.values(movieData).map((movie) => movie.year);
let castArr = Object.values(movieData).map((movie) => movie.cast);
let ratingArr = Object.values(movieData).map((movie) => movie.rating);

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


// Dynamic poster
// create a darjeeling-image div
const imageDiv = document.createElement('div');
imageDiv.className = 'darjeeling-image';

// create an image element and set its attributes
const image = document.createElement('div');
image.id = 'Darjeeling';
image.style.border = "solid 1px red" ;
image.style.height = '500px'
image.style.width = '300px';

// create a text-box div
const textBoxDiv = document.createElement('div');
textBoxDiv.id = 'text-box';
textBoxDiv.className = 'text-box';

// create paragraph elements for name, plot, rating, and user rating
const nameParagraph = document.createElement('p');
nameParagraph.id = 'darjeeling-name';
nameParagraph.innerText = `${movieNamesArray[0]}`;

const plotParagraph = document.createElement('p');
plotParagraph.id = 'darjeeling-plot';
plotParagraph.className = 'movie-plot';
plotParagraph.innerText = "Plot: " + `${plotArr[0]}`;

const ratingParagraph = document.createElement('p');
ratingParagraph.id = 'darjeeling-rating';
ratingParagraph.className = 'rating';
ratingParagraph.innerText = "Rating: " + `${ratingArr[0]}`;

const userRatingParagraph = document.createElement('p');
userRatingParagraph.id = 'darjeeling-user-rating';
userRatingParagraph.className = 'user-rating';
userRatingParagraph.innerText = "User rating:";

// append the paragraph elements to the text-box div
textBoxDiv.appendChild(nameParagraph);
textBoxDiv.appendChild(plotParagraph);
textBoxDiv.appendChild(ratingParagraph);
textBoxDiv.appendChild(userRatingParagraph);

// create a button element and set its attributes
const button = document.createElement('button');
button.id = 'darjeeling-year';
button.className = 'button-text';
button.innerHTML = '&#9733';

// append the image, text-box, and button elements to the darjeeling-image div
imageDiv.appendChild(image);
imageDiv.appendChild(textBoxDiv);
imageDiv.appendChild(button);

// append the darjeeling-image div to the wrapper div
const output = document.getElementById("output");
output.appendChild(imageDiv);