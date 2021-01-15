// start of MODAL JS 
var startBtn = $(".start-button");
var modal = $("#myModal");
var btn = $("#myBtn");
var span = $(".close");

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

//var terminator = JSON.parse('{"results":[{"id":"5d97daa89a76a40056de5f32","picture":"https://utellyassets9-1.imgix.net/api/Images/b93cb309ce6401428c9c21f68ce98910/Redirect?fit=crop&auto=compress&crop=faces,top","name":"Terminator: The Sarah Connor Chronicles","locations":[{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"iTunes","name":"iTunesIVAUS","id":"5d80a9a5d51bef861d3740d3","url":"https://itunes.apple.com/us/tv-season/what-he-beheld/id270795587?i=275552016"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Google Play","name":"GooglePlayIVAUS","id":"5d8260b128fbcd0052aed197","url":"https://play.google.com/store/tv/show?amp=&amp=&cdid=tvseason-JmDY6h1mSEQ&gdid=tvepisode-ZQ2SblJqIQU&gl=US&hl=en&id=ZK0HwIx2b-U"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Amazon Instant Video","name":"AmazonInstantVideoIVAUS","id":"5d82609332ac2f0051962fe6","url":"https://watch.amazon.com/detail?asin=B0015CFWFK&creativeASIN=B0015CFWFK&ie=UTF8&linkCode=xm2&tag=utellycom00-21"}],"provider":"iva","weight":9194,"external_ids":{"iva_rating":null,"imdb":{"url":"https://www.imdb.com/title/tt0851851","id":"tt0851851"},"tmdb":{"url":"https://www.themoviedb.org/tv/433","id":"433"},"wiki_data":{"url":"https://www.wikidata.org/wiki/Q94713","id":"Q94713"},"iva":{"id":"128140"},"gracenote":null,"rotten_tomatoes":null,"facebook":null}},{"id":"5d97da9a9a76a40056de4ae8","picture":"https://utellyassets9-1.imgix.net/api/Images/8b3165fad41b7d7df3fb60fee343c725/Redirect?fit=crop&auto=compress&crop=faces,top","name":"Terminator Salvation: The Machinima Series","locations":[{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Google Play","name":"GooglePlayIVAUS","id":"5d8260b128fbcd0052aed197","url":"https://play.google.com/store/tv/show?amp=&amp=&cdid=tvseason-zKEcmKaTCT4&gdid=tvepisode-de68GfQoThk&gl=US&hl=en&id=yXT4d2Yryh0"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Amazon Instant Video","name":"AmazonInstantVideoIVAUS","id":"5d82609332ac2f0051962fe6","url":"https://watch.amazon.com/detail?asin=B002B4364A&creativeASIN=B002B4364A&ie=UTF8&linkCode=xm2&tag=utellycom00-21"}],"provider":"iva","weight":5928,"external_ids":{"iva_rating":null,"imdb":{"url":"https://www.imdb.com/title/tt1446633","id":"tt1446633"},"tmdb":{"url":"https://www.themoviedb.org/tv/56150","id":"56150"},"wiki_data":{"url":"https://www.wikidata.org/wiki/Q4455892","id":"Q4455892"},"iva":{"id":"731147"},"gracenote":null,"rotten_tomatoes":null,"facebook":null}},{"id":"5e270a0c6bcb1ff18a19707b","picture":"https://utellyassets9-1.imgix.net/api/Images/6551af4c69ae64c7a9d5ff56194ec947/Redirect?fit=crop&auto=compress&crop=faces,top","name":"The Terminator","locations":[{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"iTunes","name":"iTunesIVAUS","id":"5d80a9a5d51bef861d3740d3","url":"https://itunes.apple.com/us/movie/the-terminator/id271991087"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Amazon Instant Video","name":"AmazonInstantVideoIVAUS","id":"5d82609332ac2f0051962fe6","url":"https://watch.amazon.com/detail?asin=B00153ZC8Q&creativeASIN=B00153ZC8Q&ie=UTF8&linkCode=xm2&tag=utellycom00-21"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Google Play","name":"GooglePlayIVAUS","id":"5d8260b128fbcd0052aed197","url":"https://play.google.com/store/movies/details/The_Terminator?gl=US&hl=en&id=-fN82upbGPo"}],"provider":"iva","weight":0,"external_ids":{"iva_rating":null,"imdb":{"url":"https://www.imdb.com/title/tt0088247","id":"tt0088247"},"tmdb":{"url":"https://www.themoviedb.org/movie/218","id":"218"},"wiki_data":{"url":"https://www.wikidata.org/wiki/Q162255","id":"Q162255"},"iva":{"id":"706"},"gracenote":null,"rotten_tomatoes":null,"facebook":null}},{"id":"5ec924dab510aaed9affe2e5","picture":"https://utellyassets9-1.imgix.net/api/Images/321cea0e8fabd5884e4d6b6626b6c980/Redirect?fit=crop&auto=compress&crop=faces,top","name":"Ninja Terminator","locations":[{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/TubiIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"TubiIVAUS","name":"TubiIVAUS","id":"5e87e00a46c072c816919b3d","url":"https://tubitv.com/movies/542407"}],"provider":"iva","weight":0,"external_ids":{"iva_rating":null,"imdb":{"url":"https://www.imdb.com/title/tt0199849","id":"tt0199849"},"tmdb":{"url":"https://www.themoviedb.org/movie/40027","id":"40027"},"wiki_data":{"url":"https://www.wikidata.org/wiki/Q30126713","id":"Q30126713"},"iva":null,"gracenote":null,"rotten_tomatoes":null,"facebook":null}}],"updated":"2021-01-11T05:08:36+0000","term":"terminator","status_code":200,"variant":"ivafull"}')

$(document).ready(function () {
    //e.preventDefault();
    var resultsDiv = $('#resultsDiv');

    //Results Variable for testing
    var response = JSON.parse('{"results":[{"id":"5d97daa89a76a40056de5f32","picture":"https://utellyassets9-1.imgix.net/api/Images/b93cb309ce6401428c9c21f68ce98910/Redirect?fit=crop&auto=compress&crop=faces,top","name":"Terminator: The Sarah Connor Chronicles","locations":[{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"iTunes","name":"iTunesIVAUS","id":"5d80a9a5d51bef861d3740d3","url":"https://itunes.apple.com/us/tv-season/what-he-beheld/id270795587?i=275552016"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Google Play","name":"GooglePlayIVAUS","id":"5d8260b128fbcd0052aed197","url":"https://play.google.com/store/tv/show?amp=&amp=&cdid=tvseason-JmDY6h1mSEQ&gdid=tvepisode-ZQ2SblJqIQU&gl=US&hl=en&id=ZK0HwIx2b-U"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Amazon Instant Video","name":"AmazonInstantVideoIVAUS","id":"5d82609332ac2f0051962fe6","url":"https://watch.amazon.com/detail?asin=B0015CFWFK&creativeASIN=B0015CFWFK&ie=UTF8&linkCode=xm2&tag=utellycom00-21"}],"provider":"iva","weight":9194,"external_ids":{"iva_rating":null,"imdb":{"url":"https://www.imdb.com/title/tt0851851","id":"tt0851851"},"tmdb":{"url":"https://www.themoviedb.org/tv/433","id":"433"},"wiki_data":{"url":"https://www.wikidata.org/wiki/Q94713","id":"Q94713"},"iva":{"id":"128140"},"gracenote":null,"rotten_tomatoes":null,"facebook":null}},{"id":"5d97da9a9a76a40056de4ae8","picture":"https://utellyassets9-1.imgix.net/api/Images/8b3165fad41b7d7df3fb60fee343c725/Redirect?fit=crop&auto=compress&crop=faces,top","name":"Terminator Salvation: The Machinima Series","locations":[{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Google Play","name":"GooglePlayIVAUS","id":"5d8260b128fbcd0052aed197","url":"https://play.google.com/store/tv/show?amp=&amp=&cdid=tvseason-zKEcmKaTCT4&gdid=tvepisode-de68GfQoThk&gl=US&hl=en&id=yXT4d2Yryh0"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Amazon Instant Video","name":"AmazonInstantVideoIVAUS","id":"5d82609332ac2f0051962fe6","url":"https://watch.amazon.com/detail?asin=B002B4364A&creativeASIN=B002B4364A&ie=UTF8&linkCode=xm2&tag=utellycom00-21"}],"provider":"iva","weight":5928,"external_ids":{"iva_rating":null,"imdb":{"url":"https://www.imdb.com/title/tt1446633","id":"tt1446633"},"tmdb":{"url":"https://www.themoviedb.org/tv/56150","id":"56150"},"wiki_data":{"url":"https://www.wikidata.org/wiki/Q4455892","id":"Q4455892"},"iva":{"id":"731147"},"gracenote":null,"rotten_tomatoes":null,"facebook":null}},{"id":"5e270a0c6bcb1ff18a19707b","picture":"https://utellyassets9-1.imgix.net/api/Images/6551af4c69ae64c7a9d5ff56194ec947/Redirect?fit=crop&auto=compress&crop=faces,top","name":"The Terminator","locations":[{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"iTunes","name":"iTunesIVAUS","id":"5d80a9a5d51bef861d3740d3","url":"https://itunes.apple.com/us/movie/the-terminator/id271991087"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Amazon Instant Video","name":"AmazonInstantVideoIVAUS","id":"5d82609332ac2f0051962fe6","url":"https://watch.amazon.com/detail?asin=B00153ZC8Q&creativeASIN=B00153ZC8Q&ie=UTF8&linkCode=xm2&tag=utellycom00-21"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Google Play","name":"GooglePlayIVAUS","id":"5d8260b128fbcd0052aed197","url":"https://play.google.com/store/movies/details/The_Terminator?gl=US&hl=en&id=-fN82upbGPo"}],"provider":"iva","weight":0,"external_ids":{"iva_rating":null,"imdb":{"url":"https://www.imdb.com/title/tt0088247","id":"tt0088247"},"tmdb":{"url":"https://www.themoviedb.org/movie/218","id":"218"},"wiki_data":{"url":"https://www.wikidata.org/wiki/Q162255","id":"Q162255"},"iva":{"id":"706"},"gracenote":null,"rotten_tomatoes":null,"facebook":null}},{"id":"5ec924dab510aaed9affe2e5","picture":"https://utellyassets9-1.imgix.net/api/Images/321cea0e8fabd5884e4d6b6626b6c980/Redirect?fit=crop&auto=compress&crop=faces,top","name":"Ninja Terminator","locations":[{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/TubiIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"TubiIVAUS","name":"TubiIVAUS","id":"5e87e00a46c072c816919b3d","url":"https://tubitv.com/movies/542407"}],"provider":"iva","weight":0,"external_ids":{"iva_rating":null,"imdb":{"url":"https://www.imdb.com/title/tt0199849","id":"tt0199849"},"tmdb":{"url":"https://www.themoviedb.org/movie/40027","id":"40027"},"wiki_data":{"url":"https://www.wikidata.org/wiki/Q30126713","id":"Q30126713"},"iva":null,"gracenote":null,"rotten_tomatoes":null,"facebook":null}}],"updated":"2021-01-11T05:08:36+0000","term":"terminator","status_code":200,"variant":"ivafull"}')

    //async = saying this function holds asynchronous content so only run when the query is done
    async function searchByTitle() {

        console.log('suhdude');
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

        //var terminatorOMDB = "http://www.omdbapi.com/?t=terminator&apikey=9efaf7ad"


        //$.ajax(settings).done(function (response) {
        console.log(response);
        //console.log(response.results[0].picture);


        //for every response we get from the query...
        for (var i = 0; i < response.results.length; i++) {

            //create a new div for our results to be displayed
            var resultsMain = $('<div>');

            var resultName = $('<h3>');
            resultName.text(response.results[i].name);
            

            var favorites = $('<button>');
            favorites.text('Add to Favorites!');
            favorites.attr('id', response.results[i].name);
            favorites.attr('style', 'border: solid white 2px; border-radius: 15%; background-color:gray; color:black; margin-left: 20px; font-family: "Cinzel", serif; font-size:12px; text-align: center; height:30px; width:150px; color:white;');

            var responseName = response.results[i].name
            console.log(responseName);
            favorites.on('click', function () {
                var favoritesList = JSON.parse(localStorage.getItem("favoritesList"));
                console.log(this.id);
                if (favoritesList) {
                    favoritesList.push(this.id)
                }
                else {
                    favoritesList = [this.id]
                }
                localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
            })

            resultName.append(favorites)

            var poster = $('<img>');
            poster.attr('src', response.results[i].picture);
            poster.attr('style', "max-width: 400px; max-height: 300px;");

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
                var actors = $('<p>');
                var releaseDate = $('<p>');
                var runTime = $('<p>');

                //set the text of these new elements to their corresponding values from the query
                plot.text('Synopsis: ' + responseTwo.Plot);
                rating.text('Rated: ' + responseTwo.Rated);
                reviewScore.text('IMDB Rating: ' + responseTwo.imdbRating);
                actors.text('Lead Actors: ' + responseTwo.Actors);
                releaseDate.text('Release Date: ' + responseTwo.Released);
                runTime.text('Runtime: ' + responseTwo.Runtime);

                //then append all the data to the new div we created, and in turn append that new div to the main container housing ALL of our results
                //However, this info is being added to the BOTTOM of the div and not with its corresponding search result -- does that mean this is executing AFTER everything else has been appended?
                resultInfo.append(releaseDate, rating, runTime, plot, actors, reviewScore)

                resultsMain.append(resultInfo)
            }) //end of omdb ajax query

            //for each search result from first query, create elements for the movie/show name, its poster, and an unordered list for what services have that movie

            //so for each time we make a loop, append all of the information we want to the container housing the information for that one movie
            //in theory this will create a new div for each of the search results that pop up;

            //then, for each new div we create, append that div to the main container that will house all of the results.
            resultsDiv.append(resultsMain);

        }
        //}); //end of utelly ajax query

    } //end of searchByTitle fxn

    $('#searchBtn').on('click', searchByTitle);

}); //end of onReady function

/*

function addToFavorites(fav) {

  var favoritesList = JSON.parse(localStorage.getItem('favorites'));

  if (favoritesList) {
    favoritesList.push(fav);
  }
  else {
    localStorage.setItem('favorites', fav)
    //favoritesList = [fav];
  }
  localStorage.setItem('favorites', JSON.stringify[favoritesList])
} */
