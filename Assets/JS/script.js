var modal = $("#myModal");
var btn = $("#myBtn");
var span = $(".close");

$('#searchBtn').attr('data-open', 'favsModal');

btn.on('click', function () {
    modal.attr('style', "display: block");
})
span.on('click', function () {
    modal.attr('style', "display: none"); //do we need any of this stuff anymore?
})
$(window).on('click', function (event) {
    if (event.target == modal) {
       modal.attr('style', "display: none");
    }
})

//going to put all of the results from our search into this container
var resultsDiv = $('#resultsDiv');
//so our results are lined up nicely on the page
$('#resultsDiv').attr('align','center');

$(document).ready(function () {

    //Results Variable for testing
    //var response = JSON.parse('{"results":[{"id":"5d97daa89a76a40056de5f32","picture":"https://utellyassets9-1.imgix.net/api/Images/b93cb309ce6401428c9c21f68ce98910/Redirect?fit=crop&auto=compress&crop=faces,top","name":"Terminator: The Sarah Connor Chronicles","locations":[{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"iTunes","name":"iTunesIVAUS","id":"5d80a9a5d51bef861d3740d3","url":"https://itunes.apple.com/us/tv-season/what-he-beheld/id270795587?i=275552016"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Google Play","name":"GooglePlayIVAUS","id":"5d8260b128fbcd0052aed197","url":"https://play.google.com/store/tv/show?amp=&amp=&cdid=tvseason-JmDY6h1mSEQ&gdid=tvepisode-ZQ2SblJqIQU&gl=US&hl=en&id=ZK0HwIx2b-U"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Amazon Instant Video","name":"AmazonInstantVideoIVAUS","id":"5d82609332ac2f0051962fe6","url":"https://watch.amazon.com/detail?asin=B0015CFWFK&creativeASIN=B0015CFWFK&ie=UTF8&linkCode=xm2&tag=utellycom00-21"}],"provider":"iva","weight":9194,"external_ids":{"iva_rating":null,"imdb":{"url":"https://www.imdb.com/title/tt0851851","id":"tt0851851"},"tmdb":{"url":"https://www.themoviedb.org/tv/433","id":"433"},"wiki_data":{"url":"https://www.wikidata.org/wiki/Q94713","id":"Q94713"},"iva":{"id":"128140"},"gracenote":null,"rotten_tomatoes":null,"facebook":null}},{"id":"5d97da9a9a76a40056de4ae8","picture":"https://utellyassets9-1.imgix.net/api/Images/8b3165fad41b7d7df3fb60fee343c725/Redirect?fit=crop&auto=compress&crop=faces,top","name":"Terminator Salvation: The Machinima Series","locations":[{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Google Play","name":"GooglePlayIVAUS","id":"5d8260b128fbcd0052aed197","url":"https://play.google.com/store/tv/show?amp=&amp=&cdid=tvseason-zKEcmKaTCT4&gdid=tvepisode-de68GfQoThk&gl=US&hl=en&id=yXT4d2Yryh0"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Amazon Instant Video","name":"AmazonInstantVideoIVAUS","id":"5d82609332ac2f0051962fe6","url":"https://watch.amazon.com/detail?asin=B002B4364A&creativeASIN=B002B4364A&ie=UTF8&linkCode=xm2&tag=utellycom00-21"}],"provider":"iva","weight":5928,"external_ids":{"iva_rating":null,"imdb":{"url":"https://www.imdb.com/title/tt1446633","id":"tt1446633"},"tmdb":{"url":"https://www.themoviedb.org/tv/56150","id":"56150"},"wiki_data":{"url":"https://www.wikidata.org/wiki/Q4455892","id":"Q4455892"},"iva":{"id":"731147"},"gracenote":null,"rotten_tomatoes":null,"facebook":null}},{"id":"5e270a0c6bcb1ff18a19707b","picture":"https://utellyassets9-1.imgix.net/api/Images/6551af4c69ae64c7a9d5ff56194ec947/Redirect?fit=crop&auto=compress&crop=faces,top","name":"The Terminator","locations":[{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"iTunes","name":"iTunesIVAUS","id":"5d80a9a5d51bef861d3740d3","url":"https://itunes.apple.com/us/movie/the-terminator/id271991087"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Amazon Instant Video","name":"AmazonInstantVideoIVAUS","id":"5d82609332ac2f0051962fe6","url":"https://watch.amazon.com/detail?asin=B00153ZC8Q&creativeASIN=B00153ZC8Q&ie=UTF8&linkCode=xm2&tag=utellycom00-21"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Google Play","name":"GooglePlayIVAUS","id":"5d8260b128fbcd0052aed197","url":"https://play.google.com/store/movies/details/The_Terminator?gl=US&hl=en&id=-fN82upbGPo"}],"provider":"iva","weight":0,"external_ids":{"iva_rating":null,"imdb":{"url":"https://www.imdb.com/title/tt0088247","id":"tt0088247"},"tmdb":{"url":"https://www.themoviedb.org/movie/218","id":"218"},"wiki_data":{"url":"https://www.wikidata.org/wiki/Q162255","id":"Q162255"},"iva":{"id":"706"},"gracenote":null,"rotten_tomatoes":null,"facebook":null}},{"id":"5ec924dab510aaed9affe2e5","picture":"https://utellyassets9-1.imgix.net/api/Images/321cea0e8fabd5884e4d6b6626b6c980/Redirect?fit=crop&auto=compress&crop=faces,top","name":"Ninja Terminator","locations":[{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/TubiIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"TubiIVAUS","name":"TubiIVAUS","id":"5e87e00a46c072c816919b3d","url":"https://tubitv.com/movies/542407"}],"provider":"iva","weight":0,"external_ids":{"iva_rating":null,"imdb":{"url":"https://www.imdb.com/title/tt0199849","id":"tt0199849"},"tmdb":{"url":"https://www.themoviedb.org/movie/40027","id":"40027"},"wiki_data":{"url":"https://www.wikidata.org/wiki/Q30126713","id":"Q30126713"},"iva":null,"gracenote":null,"rotten_tomatoes":null,"facebook":null}}],"updated":"2021-01-11T05:08:36+0000","term":"terminator","status_code":200,"variant":"ivafull"}')

    //async = saying this function holds asynchronous content so only run when the query is done
    async function searchByTitle() {
      //empty our results div from the previous search first so we can add new search results to it
      resultsDiv.empty();
        
        var userSearch = $('#titleSearch').val().trim();
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" + userSearch + "&country=us",
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "34b731eb9fmsh514e31a16caa9fbp14cea5jsnb01736405b87",
                "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com"
            }
        };

        $.ajax(settings).then(function (response) {
          async function query(response){
        //if we get any results back from our query, then we'll do stuff with them
          if (response.results.length > 0) {
            
            //doesn't work; I mean it hides but then you still need to X out of it before touching the main screen....
            $('#favsModal').addClass('hide'); 

            //for every response we get from the query...
            for (var i = 0; i < response.results.length; i++) {
              //create a new div for our results to be displayed
              var resultsMain = $('<div>');
              //For title of the result
              var resultName = $('<h3>');
              resultName.text(response.results[i].name);

              //create image tag for the movie poster
              var poster = $('<img>');
              poster.attr('src', response.results[i].picture);
              poster.attr('style', "max-width: 50%");

              //create a button to be displayed next to the title's name, which when clicked adds this title to the user's favorites list
              var favorites = $('<button>');
              //this attribute is for linking the Add to Favs button to the 'Added to Favs' modal that will pop up
              favorites.attr('data-open', 'favsModal');
              //this will be used for identificaiton purposes in functions below
              favorites.attr('id', response.results[i].name);
              favorites.text('Flick to Favorites!')
              //styling our favorite button as desired
              favorites.attr('style', 'border: solid white 2px; background-color:gray; color:black; margin-left: 20px; font-family: "Cinzel", serif; font-size:12px; text-align: center; height:30px; width:150px; color:white;');
              
              //this whole function basically just adds a hover effect on the favorites button, creating a black border around it on hover
              favorites.on({
                mouseenter: function () {
                  $(this).attr('style', 'border: solid black 2px; background-color:gray; color:black; margin-left: 20px; font-family: "Cinzel", serif; font-size:12px; text-align: center; height:30px; width:150px; color:white;');
                }, 
                mouseleave: function () {
                  $(this).attr('style', 'border: solid white 2px; background-color:gray; color:black; margin-left: 20px; font-family: "Cinzel", serif; font-size:12px; text-align: center; height:30px; width:150px; color:white;');
                }
                })
              //append the favorites button to the title container so it's handy for the user
              resultName.append(favorites)
          
              //when clicked, the favorite button will execute this function, which adds the current movie to the favorites tab and stores it in storage
              favorites.on('click', function () {
                //set a variable to the array of items under the 'favoritesList' key in storage
                var favoritesList = JSON.parse(localStorage.getItem("favoritesList"));
                //if there is stuff in our favorites in storage...
                if (favoritesList) {
                //Check if this title is already in favs array, so it can't be added again!
                  if ($.inArray(this.id, favoritesList) === -1) {

                    //if it's not in favorites, then add this to it and put it in storage!
                    favoritesList.push(this.id)
                    localStorage.setItem('favoritesList', JSON.stringify(favoritesList));

                    //reveals the button in the favorites card that allows user to reset their list of favorites
                    $('#clearFavorites').removeClass('hide');
                    //this sets the html of a Modal to reveal a message telling user they've successfully added to their favorites
                    $('#favsModal').html("<h3>Flick-tastic!</h3><p class='lead'>This flick has been added to your favorites!</p><button class='close-button' data-close aria-label='Close modal' type='button'><span aria-hidden='true'>&times;</span></button>")

                    //make a button out of this favorite so that, when clicked, more detailed info will be displayed of the favorite on the screen
                    var favButton = $('<button>');
                    favButton.text(this.id);
                    favButton.attr('class', 'button'); //add this class for styling purposes
                    favButton.on('click', displayFavorite);  //displayFavorite elaborated below       
                    $('#favoritesList').append(favButton); //have an empty <ul> that we will append all favorites to
                    
                  }
                  else { 
                    //if item is already a favorite, we clear the favsModal of content, then replace its content with a message saying the user has already favorited that item
                    $('#favsModal').html("<h2>Great Scott!</h2><p class='lead'>This is ALREADY a favorite!</p><button class='close-button' data-close aria-label='Close modal' type='button'><span aria-hidden='true'>&times;</span></button>");
                  }
                }
                else {
                  //again, as above, if there's nothing in storage, push this movie into it, create button out of movie and append it below
                    favoritesList = [this.id]
                    localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
                    var favButton = $('<button>')
                    favButton.text(this.id)
                    favButton.attr('class', 'button')
                    favButton.on('click', displayFavorite) 
                    $('#favoritesList').append(favButton)
                    $('#clearFavorites').removeClass('hide');
                    $('#favsModal').removeClass('hide');
                    $('#favsModal').html("<h3>Flick-tastic!</h3><p class='lead'>This flick has been added to your favorites!</p><button class='close-button' data-close aria-label='Close modal' type='button'><span aria-hidden='true'>&times;</span></button>")
                  }   
              })
              
              //create an unordered list that we'll append movie services to down below
              var availability = $('<ul>');
              availability.html(`<span class="firstWord">Available to Watch On:</span><br>`);

              //for each search result we get back, do another for loop to loop through all of the platforms that have the movie, and append these to above unordered list
              for (var j = 0; j < response.results[i].locations.length; j++) {
                //so for each place you can watch the show, create a new list element and append this list element to the unordered list
                var location = $('<li>');
                location.text(response.results[i].locations[j].display_name)
                availability.append(location);
              }
              //append everything we have so far into the div we created earliery
              resultsMain.append(resultName, poster, availability)

              const terminator = {
                  url: "http://www.omdbapi.com/?t=" + response.results[i].name + "&apikey=9efaf7ad",
                  method: "GET",
                }
              //when this query is done...wait on this to finish before we go forward
              await $.ajax(terminator).then(function (responseTwo) {
                  console.log(responseTwo);

                  //create a new div that will contain all the information we need
                  var resultInfo = $('<div>');

                  //create a series of new elements for each piece of info we want
                  var plot = $('<p>');
                  var rating = $('<p>');
                  var reviewScore = $('<p>');
                  var releaseDate = $('<p>');
                  var runTime = $('<p>');

                  //set the text of these new elements to their corresponding values from the query
                  plot.html((`<span class="firstWord">Synopsis:</span>`) +' '+ responseTwo.Plot);
                  rating.html((`<span class="firstWord">Rated:</span>`) +' '+ responseTwo.Rated);
                  reviewScore.html((`<span class="firstWord">IMDB Rating:</span>`) +' '+ responseTwo.imdbRating);
                  releaseDate.html((`<span class="firstWord">Release Date:</span>`) +' '+ responseTwo.Released);
                  runTime.html((`<span class="firstWord">Runtime:</span>`) +' '+ responseTwo.Runtime);

                  //then append all the data to the new div we created, and in turn append that new div to the main container housing ALL of our results                 


                  resultInfo.append(releaseDate, rating, runTime, plot, reviewScore);
                  //then append the resultInfo div into the main div containing the result name, poster, and favorite button
                
                  resultsMain.append(resultInfo);
              }) //end of omdb ajax query


              //then, for each new div we create for each title, append that div to the main container that will house all of the results.
              resultsDiv.append(resultsMain);
          
          } //end of for loop
        } // end of first if statement

      //if we don't get any results back from the query, pop up this modal alert
      else { //this changes the modal so that if the search is wonky, an alert tells the user so; needs tweaking still
        $('#favsModal').html("<h3>These aren't the results you're looking for...</h3><p class='lead'>Your search didn't return any results. Check your spelling and try again.</p><button class='close-button' data-close aria-label='Close modal' type='button'><span aria-hidden='true'>&times;</span></button>")
      }
          }
      query(response);
      }); //end of utelly ajax query
      
    } //end of searchByTitle fxn

    $('#searchBtn').on('click', searchByTitle);
    renderFavoritesList(); //calling renderFavorites here so it only works when the page is refreshed

    //hitting clear favorites button will clear local storage, empty the 'Favorites' card, and remove the 'clear' button from screen
    $('#clearFavorites').on('click', function(){
      localStorage.clear();
      $('#favoritesList').empty();
      $('#clearFavorites').addClass('hide');
    })

}); //end of onReady function


//this will basically only be run on refreshing the page and will create buttons for every favorite saved in storage
function renderFavoritesList() { 
  
  var favorites = JSON.parse(localStorage.getItem('favoritesList')) 
 //empty out the <ul> list of favorites on the bottom of the page to make room for new buttons
  $('#favoritesList').empty();
  //if we have favorites in storage, create buttons (identical to above) for each of them and populate the Favorites card with them
  if (favorites) {
    $('#clearFavorites').removeClass('hide');
    for (var i=0; i < favorites.length; i++) {
    
          var favButton = $('<button>') 
          favButton.attr("class", "button");
          favButton.attr('id', favorites[i]);
          favButton.attr('style', 'border: solid white 2px; background-color:gray; color:black; margin-left: 0px; font-family: "Cinzel", serif; font-size:12px; text-align: center; height:60px; width:200px; color:white;');
            favButton.on({
              mouseenter: function () {
                $(this).attr('style', 'border: solid black 2px; background-color:gray; color:black; margin-left: 0px; font-family: "Cinzel", serif; font-size:12px; text-align: center; height:60px; width:200px; color:white; border-radius: 28px;');
              },
              mouseleave: function () {
                $(this).attr('style', 'border: solid white 2px; background-color:gray; color:black; margin-left: 0px; font-family: "Cinzel", serif; font-size:12px; text-align: center; height:60px; width:200px; color:white; border-radius: 28px;');
              }
              })
          
          favButton.text(favorites[i]);
          favButton.on('click', displayFavorite)
          favButton.attr('class', 'button')
          $('#favoritesList').append(favButton)
      
        } 
    }
}

//click function for favorites
async function displayFavorite () { 
  //empty the resultsDiv of any search results info to make room for the Favorites page
  $('#resultsDiv').empty();

  //declaring a variable to this.id (which is the name of movie that has been favorited) that we use later for a query
  var favName = this.id;

    const terminator = {  //changed the url to have 'plot=full' to it so we get a longer synopsis on the Favorites page
      url: "http://www.omdbapi.com/?t=" + this.id + "&plot=full&apikey=9efaf7ad",
      method: "GET",
    }

//this code is almost identical to the stuff above - redo the query for the OMDB API for this specific favorite
  await $.ajax(terminator).then(function (responseTwo) {
      

      var resultName = $('<h3>');
        resultName.attr('style', 'font-weight: 800')
        resultName.html(responseTwo.Title+"    "+"<span>&#x1F60D</span>");
      
      var poster = $('<img>');
        poster.attr('src', responseTwo.Poster);
        poster.attr('style', "max-width: 300px; max-height: 225px;");

      var plot = $('<p>');
      var rating = $('<p>');
      var reviewScore = $('<p>');
      var actors = $('<p>');
      var director = $('<p>');
      var releaseDate = $('<p>');
      var runTime = $('<p>');
      var link = $('<a>');
      var genre = $('<p>');

      plot.html((`<span class="firstWord">Synopsis:</span>`) +' '+ responseTwo.Plot);
      rating.html((`<span class="firstWord">Rated:</span>`) +' '+ responseTwo.Rated);
      reviewScore.html((`<span class="firstWord">IMDB Rating:</span>`) +' '+ responseTwo.imdbRating);
      genre.html((`<span class="firstWord">Genre:</span>`) +' '+ responseTwo.Genre);
      actors.html((`<span class="firstWord">Lead Actors:</span>`) +' '+ responseTwo.Actors);
      director.html((`<span class="firstWord">Directed By:</span>`) +' '+ responseTwo.Director)
      releaseDate.html((`<span class="firstWord">Release Date:</span>`) +' '+ responseTwo.Released);
      runTime.html((`<span class="firstWord">Runtime:</span>`) +' '+ responseTwo.Runtime);
      link.text('IMDB Page')
      link.attr('href', "https://www.imdb.com/title/"+responseTwo.imdbID+"/")

     
     var availability = $('<ul>');

    //we do the second query as well, this time through the Utelly API, to grab the info for what video services this movie is available on
    const services = {
      "async": true,
      "crossDomain": true,
      "url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" + favName + "&country=us",
      "method": "GET",
      "headers": {
          "x-rapidapi-key": "34b731eb9fmsh514e31a16caa9fbp14cea5jsnb01736405b87",
          "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com"
        }
      }
      $.ajax(services).then(function (response){
        console.log(response)
        for (var i = 0; i < response.results.length; i++){
          //so we use that variable I declared earlier to search through the results of the query for the one that matches 'favName', then display results for just that movie
          if (favName === response.results[i].name) {
            
            availability.html(`<span class="firstWord">Available to Watch On:</span><br>`)

            for (var j = 0; j < response.results[i].locations.length; j++) {  
                  var location = $('<li>');
                  location.text(response.results[i].locations[j].display_name)
                  availability.append(location);
            }
          }
        }
      })
      resultsDiv.append(resultName, poster, availability, genre, releaseDate, rating, runTime, director, plot, actors, reviewScore, link)
  }) 

}

$(document).foundation();
