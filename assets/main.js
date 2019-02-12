/// survey part
// 


$(document).ready(function(){

var infoArray = []


	$("#movieSurvey_container").hide();
    $("#end_container").hide();
    
    $("#start_button").on("click", function(){

		// Hide the start Div from the user
		$("#startContainer").hide();


		// Show the Game Div
		$("#movieSurvey_container").show();


     ;
    
    });

    $("#done_button").on("click", function(){

        $("#movieSurvey_container").hide();


        var userID = $("#userID").val();
        
        console.log(userID);
        
        var userZipcode = $("#userZipcode").val();
        
        console.log(userZipcode);

        var genreVar = $('input:radio[name="genreVar"]:checked').val();
        
        console.log(genreVar);

        var lengthVar = $('input:radio[name="lengthVar"]:checked').val();
        
        console.log(lengthVar);

        var ratingVar = $('input:radio[name="ratingVar"]:checked').val();
        
        console.log(ratingVar);

        infoArray.push(userID);
        infoArray.push(userZipcode);
     
var movieObject = {
    movie1: {
    name: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    genre: "Action",
    length: "Longer",
    rating: "PG",
    latLong: "36.827, 175.790",
},
    movie2: {
    name: 'Night at the Museum',
    genre: "Action",
    length: 'Shorter',
    rating: "PG",
    latLong: "40.781, 73.974",
},
 movie3: {  
    name: 'Avengers',
    genre: "Action",
    length: "Longer",
    rating: "PG13",
    latLong: "41.200, -81.687",
    },
 movie4: {
    name: 'Thor',
    genre: "Action",
    length: 'Shorter',
    rating: "PG13",
    latLong: "35.407, -105.947",
},
 movie7: {
    name: 'Zombieland',
    genre: "Action",
    length: 'Shorter',
    rating: "R",
    latLong: "44.974, -93.267",
},
 movie8: {
    name: 'Hot Fuzz',
    genre: "Action",
    length: "Longer",
    rating: "R",
    latLong: "51.209, -2.646", 

},
 movie9: {
    name: 'Beauty and the Beast',
    genre: 'Romance',
    length: "Longer",
    rating: "PG",
    latLong: "51.841, -0.605",
},
 movie10: {
    name: 'The Princess Bride',
    genre: 'Romance',
    length: "Shorter",
    rating: "PG",
    latLong: "52..934, -9.459",
},
 movie11: {
    name: 'Romeo + Juliet',
    genre: 'Romance',
    length: "Longer",
    rating: "PG13",
    latLong: "19.419, -99.189",
},
 movie12: {
    name: "Isn't It Romantic",
    genre: 'Romance',
    length: 'Shorter',
    rating: "PG13",
    latLong: "40.712, -74.005",
},
 movie13: {
    name: 'If Beale Street Could Talk',
    genre: 'Romance',
    length: 'Shorter',
    rating: "R",
    latLong: "40.936, -73.989",
},
 movie14: {
    name: 'The Ballad of Buster Scruggs',
    genre: 'Romance',
    length: "Longer",
    rating: "R",
    latLong: "41.938, -103.809", 
},
 movie15: {
    name: 'Meet the Patels',
    genre: 'Documentery',
    length: 'Shorter',
    rating: "PG",
    latLong: "21.335, 71.413",
},
 movie16: {
    name: 'The Sorrow and the Pity',
    genre: 'Documentery',
    length: "Longer",
    rating: "PG",
    latLong: "45.779, 3.086",
},
 movie17: {
    name: 'Human Flow',
    genre: 'Documentery',
    length: "Longer",
    rating: "PG13",
    latLong: "39.901, 46.397",
},
 movie18: {
    name: 'Freeheld',
    genre: 'Documentery',
    length: 'Shorter',
    rating: "PG13",
    latLong: "40.796, -73.699",
},
 movie5: {
    name: 'Keep the River on Your Right: A modern Cannibal Tale',
    genre: 'Documentery',
    length: 'Shorter',
    rating: "R",
    latLong: "-7.979, 42.630",
},
 movie6: {
    name: 'We Steal Secrets: The Story of WikiLeaks',
    genre: 'Documentery',
    length: "Longer",
    rating: "R",
    latLong: "51.513, -0.122",
    
},
};



    if (movieObject.movie1.genre === genreVar &&
         movieObject.movie1.length === lengthVar &&
         movieObject.movie1.rating ==ratingVar) {
        console.log("movie1 :" + "true");
        infoArray.push(movieObject.movie1.name);
    }
    else {
        console.log("movie1 :" + "false");
    };

    if (movieObject.movie2.genre === genreVar &&
        movieObject.movie2.length === lengthVar &&
        movieObject.movie2.rating ==ratingVar) {
       console.log("movie2 :" + "true");
       infoArray.push(movieObject.movie2.name);
   }
   else {
       console.log("movie2 :" + "false");
       };
    if (movieObject.movie3.genre === genreVar &&
         movieObject.movie3.length === lengthVar &&
         movieObject.movie3.rating ==ratingVar) {
        console.log("movie3 :" + "true");
        infoArray.push(movieObject.movie3.name);
    }
    else {
        console.log("movie3 :" + "false");
    };
    
    if (movieObject.movie4.genre === genreVar &&
        movieObject.movie4.length === lengthVar &&
        movieObject.movie4.rating ==ratingVar) {
       console.log("movie4 :" + "true");
       infoArray.push(movieObject.movie4.name);
   }
   else {
       console.log("movie4 :" + "false");
       };


    if (movieObject.movie5.genre === genreVar &&
        movieObject.movie5.length === lengthVar &&
        movieObject.movie5.rating ==ratingVar) {
       console.log("movie5 :" + "true");
       infoArray.push(movieObject.movie5.name);
   }
   else {
       console.log("movie5 :" + "false");
   };
   
   if (movieObject.movie6.genre === genreVar &&
       movieObject.movie6.length === lengthVar &&
       movieObject.movie6.rating ==ratingVar) {
      console.log("movie6 :" + "true");
      infoArray.push(movieObject.movie6.name);
  }
  else {
      console.log("movie6 :" + "false");
      };

      if (movieObject.movie7.genre === genreVar &&
        movieObject.movie7.length === lengthVar &&
        movieObject.movie7.rating ==ratingVar) {
       console.log("movie7 :" + "true");
       infoArray.push(movieObject.movie7.name);
   }
   else {
       console.log("movie7 :" + "false");
   };

   if (movieObject.movie8.genre === genreVar &&
       movieObject.movie8.length === lengthVar &&
       movieObject.movie8.rating ==ratingVar) {
      console.log("movie8 :" + "true");
      infoArray.push(movieObject.movie8.name);
  }
  else {
      console.log("movie8 :" + "false");
      };
   if (movieObject.movie9.genre === genreVar &&
        movieObject.movie9.length === lengthVar &&
        movieObject.movie9.rating ==ratingVar) {
       console.log("movie9 :" + "true");
       infoArray.push(movieObject.movie9.name);
   }
   else {
       console.log("movie9 :" + "false");
   };
   
   if (movieObject.movie10.genre === genreVar &&
       movieObject.movie10.length === lengthVar &&
       movieObject.movie10.rating ==ratingVar) {
      console.log("movie10 :" + "true");
      infoArray.push(movieObject.movie10.name);
  }
  else {
      console.log("movie10 :" + "false");
      };


   
   if (movieObject.movie11.genre === genreVar &&
       movieObject.movie11.length === lengthVar &&
       movieObject.movie11.rating ==ratingVar) {
      console.log("movie11 :" + "true");
      infoArray.push(movieObject.movie11.name);
  }
  else {
      console.log("movie11 :" + "false");
  };
  
  if (movieObject.movie12.genre === genreVar &&
      movieObject.movie12.length === lengthVar &&
      movieObject.movie12.rating ==ratingVar) {
     console.log("movie12 :" + "true");
     infoArray.push(movieObject.movie12.name);
 }
 else {
     console.log("movie12 :" + "false");
     };
     if (movieObject.movie13.genre === genreVar &&
        movieObject.movie13.length === lengthVar &&
        movieObject.movie13.rating ==ratingVar) {
       console.log("movie13 :" + "true");
       infoArray.push(movieObject.movie13.name);
   }
   else {
       console.log("movie13 :" + "false");
   };

   if (movieObject.movie14.genre === genreVar &&
       movieObject.movie14.length === lengthVar &&
       movieObject.movie14.rating ==ratingVar) {
      console.log("movie14 :" + "true");
      infoArray.push(movieObject.movie14.name);
  }
  else {
      console.log("movie14 :" + "false");
      };
   if (movieObject.movie15.genre === genreVar &&
        movieObject.movie15.length === lengthVar &&
        movieObject.movie15.rating ==ratingVar) {
       console.log("movie15 :" + "true");
       infoArray.push(movieObject.movie15.name);
   }
   else {
       console.log("movie15 :" + "false");
   };
   
   if (movieObject.movie16.genre === genreVar &&
       movieObject.movie16.length === lengthVar &&
       movieObject.movie16.rating ==ratingVar) {
      console.log("movie16 :" + "true");
      infoArray.push(movieObject.movie16.name);
  }
  else {
      console.log("movie16 :" + "false");
      };


   
   if (movieObject.movie17.genre === genreVar &&
       movieObject.movie17.length === lengthVar &&
       movieObject.movie17.rating ==ratingVar) {
      console.log("movie17 :" + "true");
      infoArray.push(movieObject.movie17.name);
  }
  else {
      console.log("movie17 :" + "false");
  };
  
  if (movieObject.movie18.genre === genreVar &&
      movieObject.movie18.length === lengthVar &&
      movieObject.movie18.rating ==ratingVar) {
     console.log("movie18 :" + "true");
     infoArray.push(movieObject.movie18.name);
 }
 else {
     console.log("movie18 :" + "false");
     };

     console.log(infoArray)
    });


});


//function got get survey name and zipcode



/// this is all trash whoops

// //the results of the survey go here

// var newName = "Mark Johnson";
// var newZipCode = "55416";
// var newGenre = "Action";
// var newLength = "Shorter";
// var newRating = "R";

// // the survey results are turned into an object
// var surveyResults = {
//     personName: "",
//     zipCode: '',
//     genre: '',
//     length: '',
//     rating: '',
//     takeSurvey: function() {
//         this.personName = newName;
//         this.zipcode = newZipCode;
//         this.genre = newGenre;
//         this.length = newLength;
//         this.rating = newRating;
//     }
// };
// surveyResults.takeSurvey();
// console.log(surveyResults);

// var movieObject = {
//     movie1: {
//     name: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
//     genre: "Action",
//     length: "Longer",
//     rating: "PG",
// },
//     movie2: {
//     ame: 'Night at the Museum',
//     genre: "Action",
//     length: 'Shorter',
//     rating: "PG",
// },
//  movie3: {  
//     name: 'Avengers',
//     genre: "Action",
//     length: "Longer",
//     rating: "PG13",
//     },
//  movie4: {
//     name: 'Thor',
//     genre: "Action",
//     length: 'Shorter',
//     rating: "PG13",
// },
//  movie5: {
//     name: 'Iron Man',
//     genre: "Action",
//     length: "Longer",
//     rating: "PG13",
// },
//  movie6: {
//     name: 'Thor: The Dark World',
//     genre: "Action",
//     length: 'Shorter',
//     rating: "PG13",
// },
//  movie7: {
//     name: 'Zombieland',
//     genre: "Action",
//     length: 'Shorter',
//     rating: "R",
// },
//  movie8: {
//     name: 'Hot Fuzz',
//     genre: "Action",
//     length: "Longer",
//     rating: "R",
// },
//  movie9: {
//     name: 'Beauty and the Beast',
//     genre: 'Romance',
//     length: "Longer",
//     rating: "PG",
// },
//  movie10: {
//     name: 'The Princess Bride',
//     genre: 'Romance',
//     length: "Longer",
//     rating: "PG",
// },
//  movie11: {
//     name: 'Romeo + Juliet',
//     genre: 'Romance',
//     length: "Longer",
//     rating: "PG13",
// },
//  movie12: {
//     name: "Isn't It Romantic",
//     genre: 'Romance',
//     length: 'Shorter',
//     rating: "PG13",
// },
//  movie13: {
//     name: 'If Beale Street Could Talk',
//     genre: 'Romance',
//     length: 'Shorter',
//     rating: "R",
// },
//  movie14: {
//     name: 'The Ballad of Buster Scruggs',
//     genre: 'Romance',
//     length: "Longer",
//     rating: "R",
// },
//  movie15: {
//     name: 'Meet the Patels',
//     genre: 'Documentery',
//     length: 'Shorter',
//     rating: "PG",
// },
//  movie16: {
//     name: 'The Sorrow and the Pity',
//     genre: 'Documentery',
//     length: "Longer",
//     rating: "PG",
// },
//  movie17: {
//     name: 'Human Flow',
//     genre: 'Documentery',
//     length: "Longer",
//     rating: "PG13",
// },
//  movie18: {
//     name: 'Freeheld',
//     genre: 'Documentery',
//     length: 'Shorter',
//     rating: "PG13",
// },
//  movie19: {
//     name: 'Keep the River on Your Right: A modern Cannibal Tale',
//     genre: 'Documentery',
//     length: 'Shorter',
//     rating: "R",
// },
//  movie20: {
//     name: 'We Steal Secrets: The Story of WikiLeaks',
//     genre: 'Documentery',
//     length: "Longer",
//     rating: "R",
// },
// suggestMovies: function() {

// }

// }
// console.log(movieObject.movie1);
