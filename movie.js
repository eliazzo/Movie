function setNewImage(){
    document.getElementById("Darjeeling").src = "Wes Anderson.jpg"
    }

function setOldImage(){ 
    document.getElementById("Darjeeling").src = "Darjeeling limited.jpg"
}

function sortList() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("id01");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      b = list.getElementsByTagName("LI");
      // Loop through all list items:
      for (i = 0; i < (b.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Check if the next item should
        switch place with the current item: */
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          /* If next item is alphabetically lower than current item,
          mark as a switch and break the loop: */
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark the switch as done: */
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  }


  let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        "Meryl Streep",
        "Bill Murray",
        "Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
  }

  /*document.getElementById("movie-name-list") This line is pointless after line 80 is introduced */
  
  const movieNameList = document.getElementById("movie-name-list")
console.log(movieNameList)
  const movieNames = Object.keys(movieData)

  for (let i = 0; i < movieNames.length; i++){
    const listItem = document.createElement("li") 
    listItem.textContent = movieNames[i]
    movieNameList.appendChild(listItem)
  }

  // querySelectorAll(".movie-list-item")
  // querySelector     
  //let listItem = document.querySelector("li");
  //let listItems = document.querySelectorAll("li");
  //console.log(listItem);
  //console.log(listItems);
 
 /* for (let filmYear in movieData.year) {
   console.log(`${filmYear} : ${movieData.year[filmYear].year}`)
}

function getFilmData () {
    console.log(year)
}
Object.defineProperty(movieData, 'year')

getFilmData()
 

/*is not doing anything
function displayAbc(){
document.getElementById("abc").innerHTML = movieData.year
}

movieData.year = displayAbc
movieData.year()

let filmYear = movieData.year
document.getElementById("abc").innerHTML = filmYear */



