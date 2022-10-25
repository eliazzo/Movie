//Object

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


  //Transferring object data (movie names) to html list
  
  const movieNameList = document.getElementById("movie-name-list")
  const movieNames = Object.keys(movieData)


  for (let i = 0; i < movieNames.length; i++){
    const listItem = document.createElement("li") 
    listItem.textContent = movieNames[i]
    movieNameList.appendChild(listItem)
  }

  //Buttons

  const DarjeelingButton = document.getElementById('darjeeling-year')
      DarjeelingButton.addEventListener("click", function(){
      document.getElementById('darjeeling-year').innerText = movieData["The Darjeeling Limited"].year
      })
  

  

/*Transfering movie years to html NOT WORKING

  const movieYearList = document.getElementById("movie-year-list")
  const movieYears = Object.keys(movieData)
 
  for (let i = 0; i < movieYears.length; i++){
    const listItem1 = document.createElement("li1")
    listItem1.textContent = movieYears[i]
    movieYearList.appendChild(listItem1)
  }*/



  const theRoyalTenenbaums = {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
  }

  document.getElementById("demo2").innerHTML = Object.values(theRoyalTenenbaums)

  document.getElementById("demo3").innerHTML = Object.keys(theRoyalTenenbaums)

  document.getElementById("demo4").innerHTML = Object.entries(theRoyalTenenbaums)
  console.log(document.getElementById("demo4"))

    //
    document.getElementById("demo").innerHTML = movieData["The Darjeeling Limited"].plot
    console.log(document.getElementById("demo").innerHTML)

    document.getElementById("demo1").innerHTML = movieData["The Darjeeling Limited"]
    console.log(document.getElementById("demo1").innerHTML)







//Wes Anderson image change on mouse over

function setNewImage(){
  document.getElementById("Darjeeling").src = "Wes Anderson.jpg"
   }

function setOldImage(){ 
   document.getElementById("Darjeeling").src = "Darjeeling limited.jpg"
}




