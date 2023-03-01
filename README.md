## Movie Data

This was a project set by FAC as part of its application process. They asked applicants to build a user interface and populate that with data from a ```JavaScript``` object. We were asked to include ways for the user to interact with the data.


**This has become an ongoing project which I am refactoring according with the course learnings**

### Current UI 

My latest version of the UI has been designed using a *mobile first* approach:
![screenshot](/README-images/1st%20Screenshot%202023-03-01.png)
![screenshot](/README-images/2nd%20Screenshot%202023-03-01.png)
![screenshot](/README-images/3rd%20Screenshot%202023-03-01.png)

An earlier version:
<img src="movieNames.png" width="300" alt="movie names"/>
<img src="TenenbaumsHover.png" width="300" alt="Tenenbaums hover"/>



## Developing the user interface

### Interactivity

#### Hover
Users can hover their mouse over the movie posters to reveal information manipulated from the javaScript [MovieData object](https://github.com/eliazzo/Movie-data/blob/main/movieObject.js).

### AddUserRating()
Users can input their own rating using the form. On submit, this information becomes visible on the chosen movie poster. Users can edit all the posters.
<img src="form.png" width="300" alt="form screenshot"/>
<img src="FoxUserRating.png" width="300" alt="fox user edit"/>


### Information buttons
Users can click on buttons to reveal additional information, currently, the year and the cast.

### Improvements
See below!

### Accessibility

### JS reconfiguration
I have been working to restructure the javaScript file:

Variables with global scope are declared at the top of the file and grouped according to whether they are accessing the HTMl file or the javaScript object (stored in a separate file).
![js restructure](/README-images/js%20restructure.png)

Replacing previously repetitive and uncessary code:
![rating old](/README-images/User%20rating%20old.png)
![rating new](/README-images/User%20rating%20nw.png)



### CSS reconfiguration
I plan to replace old CSS that deals with different elements with CSS primitive classes.





