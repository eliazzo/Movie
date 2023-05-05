// Access DOM
const movieNameList = document.getElementById("movie-name-list");
const movieDropdown = document.getElementById("movie-dropdown");





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





// create a template div
function newPoster(num, backgroundImg) {

  console.log('newPoster')

  const poster = document.createElement('div');
  poster.style.border = "solid 1px red" ;
  poster.style.height = '500px'
  poster.style.width = '300px';
  poster.style.backgroundImage = `url(${backgroundImg})`;

// create a text-box div
  const textBoxDiv = document.createElement('div');
  textBoxDiv.id = 'text-box';
// textBoxDiv.className = 'text-box'; // add z index to text box to send to back
  textBoxDiv.style.border = "solid 1px blue";

// create paragraph elements for name, plot, rating, and user rating
  const infoParagraph = document.createElement('p');
  infoParagraph.id = 'movie-info';
  infoParagraph.innerText = `${movieNamesArray[num]} \n` + "Plot: " + `${plotArr[num]}\n` + "Rating: " + `${ratingArr[num]}\n`;
  
  const myRating = document.createElement('p');
  myRating.className = 'user-rating'
  console.log(myRating)
  myRating.innerText = "My rating: " 

// append the paragraph elements to the text-box div

textBoxDiv.appendChild(infoParagraph);
textBoxDiv.appendChild(myRating)
poster.appendChild(textBoxDiv);

const gallery = document.getElementById("gallery");
console.log(gallery)
gallery.appendChild(poster)

console.log(poster)

}

newPoster(0, 'Img/darjeeling.jpg');
newPoster(1, "Img/tenenbaums.jpg");
newPoster(2, "/Mr Fox.jpg");
newPoster(3, 'Img/budapest.jpg');

const ratingElementList = document.querySelectorAll(".user-rating");
console.log(ratingElementList)


function addUserRating(event) { // event is an object that contains the html properties about the user event (form submit event)
  event.preventDefault(); // prevents default form behaviour is to refresh the page when the form is submitted // calls preventDefault method on the submit event
  const userRating = document.getElementById("input-rating").value; // sets userRating variable to the user's rating
  const chosenFilm = movieDropdown.value; // selects the chosen film (the key name string e.g., "The Grand Budapest Hotel") from the dropdown list
  console.log(chosenFilm)

  if (chosenFilm === movieNamesArray[0] || chosenFilm === movieNamesArray[1] || chosenFilm === movieNamesArray[2] || chosenFilm === movieNamesArray[3]) {
    // Find the index of the chosenFilm in the movieNamesArray
    var i = movieNamesArray.indexOf(chosenFilm);
    // Return the movieNamesArray element at the index i
    console.log(movieNamesArray[i]);

    ratingElementList[i].innerText = "My rating: " + userRating;
  }
}

// create a button element and set its attributes
// const button = document.createElement('button');
// button.id = 'movie-year';
// button.className = 'button-text';
// button.innerHTML = '&#9733';

// append the image, text-box, and button elements to the darjeeling-image div
// poster.appendChild(image);
// image.appendChild(textBoxDiv);
// imageDiv.appendChild(button);

// append the darjeeling-image div to the wrapper div
// console.log(poster);

// const outputLocation = document.getElementById("movie-output");
// console.log(outputLocation);
// outputLocation.appendChild(poster);


