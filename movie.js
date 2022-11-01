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


  /* let movieNameArray = Object.keys(movieData)
  console.log(movieNameArray)
  movieNameArray.forEach(function(movieName){
    console.log(movieName)
  }) // Prints a list of the movie Names */





 
  //Displaying movie data on webpage

  const movieDataArrayList = document.getElementById("movie-info")

  let movieDataArray = Object.keys(movieData)
  console.log(movieDataArray)

  for (let i in movieData){movieData[i].plot}

  /*for (let i = 0; i < movieDataArray.length; i++){
    const listData = document.createElement("li")
    listData.textContent = movieDataArray [i]
    movieDataArrayList.appendChild(listData)*/
  


  let movieDataArrayPrint = movieDataArray.forEach(function(printMovieInfo){
    console.log(printMovieInfo)
  }) //Prints the data of each movie individually (separated by movie)
  
  
    
    
  
    
  

  //Transferring object data (movie names) to html list
  
  const movieNameList = document.getElementById("movie-name-list")
  console.log(movieNameList)
  const movieNames = Object.keys(movieData)


  for (let i = 0; i < movieNames.length; i++){
    const listItem = document.createElement("li") 
    listItem.textContent = movieNames[i]
    movieNameList.appendChild(listItem)
  }



  /*for (let i = 0; i < movieInfo.length; i++){
    const listItem = document.createElement("li")
    listItem.textContent = movieInfo[i]
    movieInfoList.appendChild(listItem)
  } */


  //Transfering object data (movie cast) to html list  **************** working but I don't know how to create this using Object. ***************************

  const movieCastList = document.getElementById("movie-cast-list")
  //console.log(movieCastList)
  const movieCast = [movieData["The Darjeeling Limited"].cast, movieData["The Royal Tenenbaums"].cast, movieData["Fantastic Mr. Fox"].cast, movieData["Fantastic Mr. Fox"].cast]

  for (let i = 0; i < movieCast.length; i++){
    const listItem = document.createElement("li")
    listItem.textContent = movieCast[i]
    movieCastList.appendChild(listItem)
  }
 

  //Buttons to reveal year

  

  const DarjeelingButton = document.getElementById('darjeeling-year')
      DarjeelingButton.addEventListener("click", function(){
      document.getElementById('darjeeling-year').innerText = movieData["The Darjeeling Limited"].year
      })
      
         /* const darjeelingMouseover = document.getElementById("darjeeling-year")
              darjeelingMouseover.addEventListener("mouseover", function(){
                document.getElementById("darjeeling-year").innerText = movieData["The Darjeeling Limited"].rating
              }) */

  const RoyalButton = document.getElementById('royal-year')
      RoyalButton.addEventListener("click", function(){
        document.getElementById('royal-year').innerText = movieData["The Royal Tenenbaums"].year
      })

        /*  const royalMouseover= document.getElementById('royal-year')
              royalMouseover.addEventListener("mouseover", function(){
                document.getElementById('royal-year').innerText = movieData["The Royal Tenenbaums"].rating
              }) */

  const foxButton = document.getElementById('fox-year')
      foxButton.addEventListener("click", function(){
        document.getElementById('fox-year').innerText = movieData["Fantastic Mr. Fox"].year
      })

        /*  const foxMouseover = document.getElementById('fox-year')
          foxMouseover.addEventListener("mouseover", function(){
              document.getElementById('fox-year').innerText = movieData["Fantastic Mr. Fox"].rating
           }) */
  
  const budapestButton = document.getElementById('budapest-year')
      budapestButton.addEventListener("click", function(){
        document.getElementById('budapest-year').innerText = movieData["The Grand Budapest Hotel"].year
      })

        /*   const budapestMouseover = document.getElementById('budapest-year')
           budapestMouseover.addEventListener("mouseover", function(){
                document.getElementById('budapest-year').innerText = movieData["The Grand Budapest Hotel"].rating
          }) */
  
// END



//Separating the Royal Tenenbaums into a new object

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


 //END
  





// Working with the movieData object - plot text under image

    document.getElementById("darjeeling-plot").innerHTML = movieData["The Darjeeling Limited"].plot
    document.getElementById("royal-plot").innerHTML = movieData["The Royal Tenenbaums"].plot
    document.getElementById("fox-plot").innerHTML = movieData["Fantastic Mr. Fox"].plot
    document.getElementById("budapest-plot").innerHTML = movieData["The Grand Budapest Hotel"].plot

// END


// Form 


// END



  
//List of ratings
  
  document.getElementById("darjeeling-rating").innerHTML = movieData["The Darjeeling Limited"].rating
  document.getElementById("royal-rating").innerHTML = movieData["The Royal Tenenbaums"].rating
  document.getElementById("fantastic-rating").innerHTML = movieData["Fantastic Mr. Fox"].rating
  document.getElementById("budapest-rating").innerHTML = movieData["The Grand Budapest Hotel"].rating

//END

/*Wes Anderson image change on mouse over

function setNewImage(){
  document.getElementById("Darjeeling").src = "darjeeling cast.jpg"
   }

function setOldImage(){ 
   document.getElementById("Darjeeling").src = "Darjeeling limited.jpg"
}

function setNewText(){
  const TenenbaumsRating = movieData["The Royal Tenenbaums"].rating
  document.getElementById("royal-plot").innerHTML = TenenbaumsRating 
}
//END*/

