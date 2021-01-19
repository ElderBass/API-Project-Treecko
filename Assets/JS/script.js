// start of MODAL JS 
var startBtn = $(".start-button");
var modal = $("#myModal");
var btn = $("#myBtn");
var span = $(".close");

//$('#searchBtn').attr('data-open', 'favsModal') might need for when search results are null; still tweaking this

btn.on('click', function () {
    modal.attr('style', "display: block");
})
span.on('click', function () {
    modal.attr('style', "display: none");
})
$(window).on('click', function (event) {
    if (event.target == modal) {
        modal.attr('style', "display: none");;
    }
})
startBtn.on("click", function (e) {
    e.preventDefault();
    // lines here-----
    var timerCount = 60;
    var timerId = setInterval(function () {
        timerCount--;
        timerDisplay.text(timerCount);
        if (timerCount === 0) {
            wordDisplay.text("")
            clearInterval(timerId);
            // ----to here, if commented out would prevent modal from opening. idk what the codes in between are doing but yeah it prevents from opening. help fix to make it cleaner? lol
        }
    });
})
// end of MODAL JS

var resultsDiv = $('#resultsDiv');

$(document).ready(function () {
    //e.preventDefault();
    

    //Results Variable for testing
    var response = JSON.parse('{"results":[{"id":"5d97daa89a76a40056de5f32","picture":"https://utellyassets9-1.imgix.net/api/Images/b93cb309ce6401428c9c21f68ce98910/Redirect?fit=crop&auto=compress&crop=faces,top","name":"Terminator: The Sarah Connor Chronicles","locations":[{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"iTunes","name":"iTunesIVAUS","id":"5d80a9a5d51bef861d3740d3","url":"https://itunes.apple.com/us/tv-season/what-he-beheld/id270795587?i=275552016"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Google Play","name":"GooglePlayIVAUS","id":"5d8260b128fbcd0052aed197","url":"https://play.google.com/store/tv/show?amp=&amp=&cdid=tvseason-JmDY6h1mSEQ&gdid=tvepisode-ZQ2SblJqIQU&gl=US&hl=en&id=ZK0HwIx2b-U"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Amazon Instant Video","name":"AmazonInstantVideoIVAUS","id":"5d82609332ac2f0051962fe6","url":"https://watch.amazon.com/detail?asin=B0015CFWFK&creativeASIN=B0015CFWFK&ie=UTF8&linkCode=xm2&tag=utellycom00-21"}],"provider":"iva","weight":9194,"external_ids":{"iva_rating":null,"imdb":{"url":"https://www.imdb.com/title/tt0851851","id":"tt0851851"},"tmdb":{"url":"https://www.themoviedb.org/tv/433","id":"433"},"wiki_data":{"url":"https://www.wikidata.org/wiki/Q94713","id":"Q94713"},"iva":{"id":"128140"},"gracenote":null,"rotten_tomatoes":null,"facebook":null}},{"id":"5d97da9a9a76a40056de4ae8","picture":"https://utellyassets9-1.imgix.net/api/Images/8b3165fad41b7d7df3fb60fee343c725/Redirect?fit=crop&auto=compress&crop=faces,top","name":"Terminator Salvation: The Machinima Series","locations":[{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Google Play","name":"GooglePlayIVAUS","id":"5d8260b128fbcd0052aed197","url":"https://play.google.com/store/tv/show?amp=&amp=&cdid=tvseason-zKEcmKaTCT4&gdid=tvepisode-de68GfQoThk&gl=US&hl=en&id=yXT4d2Yryh0"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Amazon Instant Video","name":"AmazonInstantVideoIVAUS","id":"5d82609332ac2f0051962fe6","url":"https://watch.amazon.com/detail?asin=B002B4364A&creativeASIN=B002B4364A&ie=UTF8&linkCode=xm2&tag=utellycom00-21"}],"provider":"iva","weight":5928,"external_ids":{"iva_rating":null,"imdb":{"url":"https://www.imdb.com/title/tt1446633","id":"tt1446633"},"tmdb":{"url":"https://www.themoviedb.org/tv/56150","id":"56150"},"wiki_data":{"url":"https://www.wikidata.org/wiki/Q4455892","id":"Q4455892"},"iva":{"id":"731147"},"gracenote":null,"rotten_tomatoes":null,"facebook":null}},{"id":"5e270a0c6bcb1ff18a19707b","picture":"https://utellyassets9-1.imgix.net/api/Images/6551af4c69ae64c7a9d5ff56194ec947/Redirect?fit=crop&auto=compress&crop=faces,top","name":"The Terminator","locations":[{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"iTunes","name":"iTunesIVAUS","id":"5d80a9a5d51bef861d3740d3","url":"https://itunes.apple.com/us/movie/the-terminator/id271991087"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Amazon Instant Video","name":"AmazonInstantVideoIVAUS","id":"5d82609332ac2f0051962fe6","url":"https://watch.amazon.com/detail?asin=B00153ZC8Q&creativeASIN=B00153ZC8Q&ie=UTF8&linkCode=xm2&tag=utellycom00-21"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Google Play","name":"GooglePlayIVAUS","id":"5d8260b128fbcd0052aed197","url":"https://play.google.com/store/movies/details/The_Terminator?gl=US&hl=en&id=-fN82upbGPo"}],"provider":"iva","weight":0,"external_ids":{"iva_rating":null,"imdb":{"url":"https://www.imdb.com/title/tt0088247","id":"tt0088247"},"tmdb":{"url":"https://www.themoviedb.org/movie/218","id":"218"},"wiki_data":{"url":"https://www.wikidata.org/wiki/Q162255","id":"Q162255"},"iva":{"id":"706"},"gracenote":null,"rotten_tomatoes":null,"facebook":null}},{"id":"5ec924dab510aaed9affe2e5","picture":"https://utellyassets9-1.imgix.net/api/Images/321cea0e8fabd5884e4d6b6626b6c980/Redirect?fit=crop&auto=compress&crop=faces,top","name":"Ninja Terminator","locations":[{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/TubiIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"TubiIVAUS","name":"TubiIVAUS","id":"5e87e00a46c072c816919b3d","url":"https://tubitv.com/movies/542407"}],"provider":"iva","weight":0,"external_ids":{"iva_rating":null,"imdb":{"url":"https://www.imdb.com/title/tt0199849","id":"tt0199849"},"tmdb":{"url":"https://www.themoviedb.org/movie/40027","id":"40027"},"wiki_data":{"url":"https://www.wikidata.org/wiki/Q30126713","id":"Q30126713"},"iva":null,"gracenote":null,"rotten_tomatoes":null,"facebook":null}}],"updated":"2021-01-11T05:08:36+0000","term":"terminator","status_code":200,"variant":"ivafull"}')

    //async = saying this function holds asynchronous content so only run when the query is done
    async function searchByTitle() {
      console.log('hello there')
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

        //$.ajax(settings).then(function (response) {
          console.log(response);
          if (response.results.length > 0) {
            //$('#favsModal').addClass('hide');
            //for every response we get from the query...
            for (var i = 0; i < response.results.length; i++) {

              //create a new div for our results to be displayed
              var resultsMain = $('<div>');
              //For title of the result
              var resultName = $('<h3>');
              resultName.text(response.results[i].name);
              
              var favorites = $('<button>');
              //this attribute is for linking the Add to Favs button to the 'Added to Favs' modal that will pop up
              favorites.attr('data-open', 'favsModal');
              //this will be used for identificaiton purposes in functions below
              favorites.attr('id', response.results[i].name);
              favorites.text('Flick to Favorites!')
              favorites.addClass('favoriteItem');
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
          
              favorites.on('click', function () {
                //make an array of any favorites we have saved in local storage
                  var favoritesList = JSON.parse(localStorage.getItem("favoritesList"));
                  //if stuff is in that array...
                  if (favoritesList) {
                  //Check if something is already in favs so it won't be added again! 
                    if ($.inArray(this.id, favoritesList) === -1) {
                      //if it's not in favorites, then add this to it!
                      favoritesList.push(this.id)
                      localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
                      $('#clearFavorites').removeClass('hide');
                      $('#favsModal').removeClass('hide');
                      //this sets the html of the Modal to reveal a message telling user they've successfully added to their favorites
                      $('#favsModal').html("<h2>Flick-tastic!</h2><p class='lead'>This flick has been added to your favorites!</p><button class='close-button' data-close aria-label='Close modal' type='button'><span aria-hidden='true'>&times;</span></button>")

                      //so basically if the this.id isn't already in the array, push it in there and make a button out of it on the bottom
                      var favButton = $('<button>');
                      favButton.text(this.id);
                      favButton.attr('class', 'button');
                      favButton.on('click', displayFavorite);         
                      $('#favoritesList').append(favButton);
                    }
                    else { 
                      //if item is already a favorite, we clear the favsModal of content, then replace its content with a message saying the user has already favorited that item
                      $('#favsModal').html("<h2>Great Scott!</h2><p class='lead'>This is ALREADY a favorite!</p><button class='close-button' data-close aria-label='Close modal' type='button'><span aria-hidden='true'>&times;</span></button>")
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
                      $('#favsModal').html("<h2>Flick-tastic!</h2><p class='lead'>This flick has been added to your favorites!</p><button class='close-button' data-close aria-label='Close modal' type='button'><span aria-hidden='true'>&times;</span></button>")

                    }  
              })

              resultName.append(favorites)
              //create image tag for the movie poster
              var poster = $('<img>');
              poster.attr('src', response.results[i].picture);
              poster.attr('style', "max-width: 300px; max-height: 225px;");
              
              //create an unordered list that we'll append movie services to down below
              var availability = $('<ul>');
              availability.text('Available to Watch On:')

              //for each search result we get back, do another for loop to loop through all of the platforms that have the movie, and append these to above unordered list
             for (var j = 0; j < response.results[i].locations.length; j++) {
                //so for each place you can watch the show, create a new list element and append this list element to the unordered list
                var location = $('<li>');
                location.text(response.results[i].locations[j].display_name)
                availability.append(location);
              }

              resultsMain.append(resultName, poster, availability)
              //have a new query for each title that our initial query returns
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
                  plot.text('Synopsis: ' + responseTwo.Plot);
                  rating.text('Rated: ' + responseTwo.Rated);
                  reviewScore.text('IMDB Rating: ' + responseTwo.imdbRating);
                  releaseDate.text('Release Date: ' + responseTwo.Released);
                  runTime.text('Runtime: ' + responseTwo.Runtime);

                  //then append all the data to the new div we created, and in turn append that new div to the main container housing ALL of our results
                  resultInfo.append(releaseDate, rating, runTime, plot, reviewScore);

                  resultsMain.append(resultInfo);
              }) //end of omdb ajax query


              //then, for each new div we create, append that div to the main container that will house all of the results.
              resultsDiv.append(resultsMain);

          } //end of for loop
        } // end of first if statement
        else { //NEW STUFF ALERT -- this changes the modal so that if the search is wonky, an alert tells the user so; needs tweaking still
          //$('#favsModal').html("<h2>These aren't the results you're looking for...</h2><p class='lead'>Your search didn't return any results. Check your spelling and try again.</p><button class='close-button' data-close aria-label='Close modal' type='button'><span aria-hidden='true'>&times;</span></button>")
        }
      //}); //end of utelly ajax query

    } //end of searchByTitle fxn

    $('#searchBtn').on('click', searchByTitle);
    renderFavoritesList(); //only calling renderFavorites here so it only works on refreshing the page

    //hitting clear favorites button will clear local storage, empty the 'Favorites' card, and remove the 'clear' button
    $('#clearFavorites').on('click', function(){
      localStorage.clear();
      $('#favoritesList').empty();
      $('#clearFavorites').addClass('hide');
    })

}); //end of onReady function


//this will basically only be run on refreshing the page and will create buttons for every favorite saved in storage
function renderFavoritesList() { 
  //convert items in storage into an array
  var favorites = JSON.parse(localStorage.getItem('favoritesList')) 
 //empty out the list of favorites on the bottom of the page to make room for new buttons
  $('#favoritesList').empty();
  
  if (favorites) {
    $('#clearFavorites').removeClass('hide');
   //for every item inside our favorites array...
    for (var i=0; i < favorites.length; i++) {
    //...create a button for that item, set its text and id to its name (not sure I need that anymore), add button class to it for Foundation/CSS, then append it to the page
          var favButton = $('<button>') 
          favButton.attr('id', favorites[i]); //not sure we need to do this anymore since I circumvented the problem this was trying to solve
          favButton.text(favorites[i]);
          favButton.on('click', displayFavorite)
          favButton.attr('class', 'button')
          $('#favoritesList').append(favButton)
      
        } 
    }
}

//click function for favorites
async function displayFavorite () { //an on-click function
  $('#resultsDiv').empty();
  
    const terminator = {  //changed the url to have 'plot=full' to it so we get a longer synopsis
      url: "http://www.omdbapi.com/?t=" + this.id + "&plot=full&apikey=9efaf7ad",
      method: "GET",
  }
  
  //var response = JSON.parse('{"results":[{"id":"5d97daa89a76a40056de5f32","picture":"https://utellyassets9-1.imgix.net/api/Images/b93cb309ce6401428c9c21f68ce98910/Redirect?fit=crop&auto=compress&crop=faces,top","name":"Terminator: The Sarah Connor Chronicles","locations":[{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"iTunes","name":"iTunesIVAUS","id":"5d80a9a5d51bef861d3740d3","url":"https://itunes.apple.com/us/tv-season/what-he-beheld/id270795587?i=275552016"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Google Play","name":"GooglePlayIVAUS","id":"5d8260b128fbcd0052aed197","url":"https://play.google.com/store/tv/show?amp=&amp=&cdid=tvseason-JmDY6h1mSEQ&gdid=tvepisode-ZQ2SblJqIQU&gl=US&hl=en&id=ZK0HwIx2b-U"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Amazon Instant Video","name":"AmazonInstantVideoIVAUS","id":"5d82609332ac2f0051962fe6","url":"https://watch.amazon.com/detail?asin=B0015CFWFK&creativeASIN=B0015CFWFK&ie=UTF8&linkCode=xm2&tag=utellycom00-21"}],"provider":"iva","weight":9194,"external_ids":{"iva_rating":null,"imdb":{"url":"https://www.imdb.com/title/tt0851851","id":"tt0851851"},"tmdb":{"url":"https://www.themoviedb.org/tv/433","id":"433"},"wiki_data":{"url":"https://www.wikidata.org/wiki/Q94713","id":"Q94713"},"iva":{"id":"128140"},"gracenote":null,"rotten_tomatoes":null,"facebook":null}},{"id":"5d97da9a9a76a40056de4ae8","picture":"https://utellyassets9-1.imgix.net/api/Images/8b3165fad41b7d7df3fb60fee343c725/Redirect?fit=crop&auto=compress&crop=faces,top","name":"Terminator Salvation: The Machinima Series","locations":[{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Google Play","name":"GooglePlayIVAUS","id":"5d8260b128fbcd0052aed197","url":"https://play.google.com/store/tv/show?amp=&amp=&cdid=tvseason-zKEcmKaTCT4&gdid=tvepisode-de68GfQoThk&gl=US&hl=en&id=yXT4d2Yryh0"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Amazon Instant Video","name":"AmazonInstantVideoIVAUS","id":"5d82609332ac2f0051962fe6","url":"https://watch.amazon.com/detail?asin=B002B4364A&creativeASIN=B002B4364A&ie=UTF8&linkCode=xm2&tag=utellycom00-21"}],"provider":"iva","weight":5928,"external_ids":{"iva_rating":null,"imdb":{"url":"https://www.imdb.com/title/tt1446633","id":"tt1446633"},"tmdb":{"url":"https://www.themoviedb.org/tv/56150","id":"56150"},"wiki_data":{"url":"https://www.wikidata.org/wiki/Q4455892","id":"Q4455892"},"iva":{"id":"731147"},"gracenote":null,"rotten_tomatoes":null,"facebook":null}},{"id":"5e270a0c6bcb1ff18a19707b","picture":"https://utellyassets9-1.imgix.net/api/Images/6551af4c69ae64c7a9d5ff56194ec947/Redirect?fit=crop&auto=compress&crop=faces,top","name":"The Terminator","locations":[{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"iTunes","name":"iTunesIVAUS","id":"5d80a9a5d51bef861d3740d3","url":"https://itunes.apple.com/us/movie/the-terminator/id271991087"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Amazon Instant Video","name":"AmazonInstantVideoIVAUS","id":"5d82609332ac2f0051962fe6","url":"https://watch.amazon.com/detail?asin=B00153ZC8Q&creativeASIN=B00153ZC8Q&ie=UTF8&linkCode=xm2&tag=utellycom00-21"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Google Play","name":"GooglePlayIVAUS","id":"5d8260b128fbcd0052aed197","url":"https://play.google.com/store/movies/details/The_Terminator?gl=US&hl=en&id=-fN82upbGPo"}],"provider":"iva","weight":0,"external_ids":{"iva_rating":null,"imdb":{"url":"https://www.imdb.com/title/tt0088247","id":"tt0088247"},"tmdb":{"url":"https://www.themoviedb.org/movie/218","id":"218"},"wiki_data":{"url":"https://www.wikidata.org/wiki/Q162255","id":"Q162255"},"iva":{"id":"706"},"gracenote":null,"rotten_tomatoes":null,"facebook":null}},{"id":"5ec924dab510aaed9affe2e5","picture":"https://utellyassets9-1.imgix.net/api/Images/321cea0e8fabd5884e4d6b6626b6c980/Redirect?fit=crop&auto=compress&crop=faces,top","name":"Ninja Terminator","locations":[{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/TubiIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"TubiIVAUS","name":"TubiIVAUS","id":"5e87e00a46c072c816919b3d","url":"https://tubitv.com/movies/542407"}],"provider":"iva","weight":0,"external_ids":{"iva_rating":null,"imdb":{"url":"https://www.imdb.com/title/tt0199849","id":"tt0199849"},"tmdb":{"url":"https://www.themoviedb.org/movie/40027","id":"40027"},"wiki_data":{"url":"https://www.wikidata.org/wiki/Q30126713","id":"Q30126713"},"iva":null,"gracenote":null,"rotten_tomatoes":null,"facebook":null}}],"updated":"2021-01-11T05:08:36+0000","term":"terminator","status_code":200,"variant":"ivafull"}')

//Will need another ajax query here for Utelly to get the video services the fav movie is on


  await $.ajax(terminator).then(function (responseTwo) {
      console.log(responseTwo);

      var resultName = $('<h3>');
        resultName.attr('style', 'font-weight: 800')
        resultName.html(responseTwo.Title+"    "+"<span>&#x1F60D</span>");
      
      var poster = $('<img>');
        poster.attr('src', responseTwo.Poster);
        poster.attr('style', "max-width: 300px; max-height: 225px;");
    /*    
      var availability = $('<ul>');
          availability.text('Available to Watch On:')
      for (var j = 0; j < response.locations.length; j++) {   //can't really do this yet, need another ajax query for this specific button's id
            var location = $('<li>');
            location.text(response.locations[j].display_name)
            availability.append(location);
          } */

      var plot = $('<p>');
      var rating = $('<p>');
      var reviewScore = $('<p>');
      var actors = $('<p>');
      var director = $('<p>');
      var releaseDate = $('<p>');
      var runTime = $('<p>');
      var link = $('<a>');
      var genre = $('<p>');

      plot.text('Synopsis: ' + responseTwo.Plot);
      rating.text('Rated: ' + responseTwo.Rated);
      reviewScore.text('IMDB Rating: ' + responseTwo.imdbRating);
      genre.text('Genre: '+responseTwo.Genre)
      actors.text('Lead Actors: ' + responseTwo.Actors);
      director.text('Directed By: '+responseTwo.Director)
      releaseDate.text('Release Date: ' + responseTwo.Released);
      runTime.text('Runtime: ' + responseTwo.Runtime);
      link.text('IMDB Page')
      link.attr('href', "https://www.imdb.com/title/"+responseTwo.imdbID+"/")

      resultsDiv.append(resultName, poster, genre, releaseDate, rating, runTime, director, plot, actors, reviewScore, /*availabiltiy,*/ link)

  }) 

}

$(document).foundation();