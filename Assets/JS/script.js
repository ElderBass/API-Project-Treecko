// start of MODAL JS 
var modal = $("#myModal");
var btn = $("#myBtn");
var span = $(".close");
​
//$('#searchBtn').attr('data-open', 'favsModal') might need for when search results are null; still tweaking this
​
btn.on('click', function () {
    modal.attr('style', "display: block");
})
span.on('click', function () {
    modal.attr('style', "display: none");
})
$(window).on('click', function (event) {
    if (event.target == modal) {
       modal.attr('style', "display: none");
    }
})
// end of MODAL JS
​
var resultsDiv = $('#resultsDiv');
​
​
$('#resultsDiv').attr('align','center');
​
$(document).ready(function () {
    //e.preventDefault();
    
​
    //Results Variable for testing
    var response = JSON.parse('{"results":[{"id":"5d97daa89a76a40056de5f32","picture":"https://utellyassets9-1.imgix.net/api/Images/b93cb309ce6401428c9c21f68ce98910/Redirect?fit=crop&auto=compress&crop=faces,top","name":"Terminator: The Sarah Connor Chronicles","locations":[{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"iTunes","name":"iTunesIVAUS","id":"5d80a9a5d51bef861d3740d3","url":"https://itunes.apple.com/us/tv-season/what-he-beheld/id270795587?i=275552016"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Google Play","name":"GooglePlayIVAUS","id":"5d8260b128fbcd0052aed197","url":"https://play.google.com/store/tv/show?amp=&amp=&cdid=tvseason-JmDY6h1mSEQ&gdid=tvepisode-ZQ2SblJqIQU&gl=US&hl=en&id=ZK0HwIx2b-U"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Amazon Instant Video","name":"AmazonInstantVideoIVAUS","id":"5d82609332ac2f0051962fe6","url":"https://watch.amazon.com/detail?asin=B0015CFWFK&creativeASIN=B0015CFWFK&ie=UTF8&linkCode=xm2&tag=utellycom00-21"}],"provider":"iva","weight":9194,"external_ids":{"iva_rating":null,"imdb":{"url":"https://www.imdb.com/title/tt0851851","id":"tt0851851"},"tmdb":{"url":"https://www.themoviedb.org/tv/433","id":"433"},"wiki_data":{"url":"https://www.wikidata.org/wiki/Q94713","id":"Q94713"},"iva":{"id":"128140"},"gracenote":null,"rotten_tomatoes":null,"facebook":null}},{"id":"5d97da9a9a76a40056de4ae8","picture":"https://utellyassets9-1.imgix.net/api/Images/8b3165fad41b7d7df3fb60fee343c725/Redirect?fit=crop&auto=compress&crop=faces,top","name":"Terminator Salvation: The Machinima Series","locations":[{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Google Play","name":"GooglePlayIVAUS","id":"5d8260b128fbcd0052aed197","url":"https://play.google.com/store/tv/show?amp=&amp=&cdid=tvseason-zKEcmKaTCT4&gdid=tvepisode-de68GfQoThk&gl=US&hl=en&id=yXT4d2Yryh0"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Amazon Instant Video","name":"AmazonInstantVideoIVAUS","id":"5d82609332ac2f0051962fe6","url":"https://watch.amazon.com/detail?asin=B002B4364A&creativeASIN=B002B4364A&ie=UTF8&linkCode=xm2&tag=utellycom00-21"}],"provider":"iva","weight":5928,"external_ids":{"iva_rating":null,"imdb":{"url":"https://www.imdb.com/title/tt1446633","id":"tt1446633"},"tmdb":{"url":"https://www.themoviedb.org/tv/56150","id":"56150"},"wiki_data":{"url":"https://www.wikidata.org/wiki/Q4455892","id":"Q4455892"},"iva":{"id":"731147"},"gracenote":null,"rotten_tomatoes":null,"facebook":null}},{"id":"5e270a0c6bcb1ff18a19707b","picture":"https://utellyassets9-1.imgix.net/api/Images/6551af4c69ae64c7a9d5ff56194ec947/Redirect?fit=crop&auto=compress&crop=faces,top","name":"The Terminator","locations":[{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"iTunes","name":"iTunesIVAUS","id":"5d80a9a5d51bef861d3740d3","url":"https://itunes.apple.com/us/movie/the-terminator/id271991087"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Amazon Instant Video","name":"AmazonInstantVideoIVAUS","id":"5d82609332ac2f0051962fe6","url":"https://watch.amazon.com/detail?asin=B00153ZC8Q&creativeASIN=B00153ZC8Q&ie=UTF8&linkCode=xm2&tag=utellycom00-21"},{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"Google Play","name":"GooglePlayIVAUS","id":"5d8260b128fbcd0052aed197","url":"https://play.google.com/store/movies/details/The_Terminator?gl=US&hl=en&id=-fN82upbGPo"}],"provider":"iva","weight":0,"external_ids":{"iva_rating":null,"imdb":{"url":"https://www.imdb.com/title/tt0088247","id":"tt0088247"},"tmdb":{"url":"https://www.themoviedb.org/movie/218","id":"218"},"wiki_data":{"url":"https://www.wikidata.org/wiki/Q162255","id":"Q162255"},"iva":{"id":"706"},"gracenote":null,"rotten_tomatoes":null,"facebook":null}},{"id":"5ec924dab510aaed9affe2e5","picture":"https://utellyassets9-1.imgix.net/api/Images/321cea0e8fabd5884e4d6b6626b6c980/Redirect?fit=crop&auto=compress&crop=faces,top","name":"Ninja Terminator","locations":[{"icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/TubiIVAUS.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122021-01-09","display_name":"TubiIVAUS","name":"TubiIVAUS","id":"5e87e00a46c072c816919b3d","url":"https://tubitv.com/movies/542407"}],"provider":"iva","weight":0,"external_ids":{"iva_rating":null,"imdb":{"url":"https://www.imdb.com/title/tt0199849","id":"tt0199849"},"tmdb":{"url":"https://www.themoviedb.org/movie/40027","id":"40027"},"wiki_data":{"url":"https://www.wikidata.org/wiki/Q30126713","id":"Q30126713"},"iva":null,"gracenote":null,"rotten_tomatoes":null,"facebook":null}}],"updated":"2021-01-11T05:08:36+0000","term":"terminator","status_code":200,"variant":"ivafull"}')
​
    //async = saying this function holds asynchronous content so only run when the query is done
    async function searchByTitle() {
      console.log('hello there')
      resultsDiv.empty();
        
        var userSearch = $('#titleSearch').val().trim();
​
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
​
        //$.ajax(settings).then(function (response) {
          console.log(response);
          if (response.results.length > 0) {
            //$('#favsModal').addClass('hide');
            //for every response we get from the query...
            for (var i = 0; i < response.results.length; i++) {
​
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
                var favoritesList = JSON.parse(localStorage.getItem("favoritesList"));
                
                if (favoritesList) {
                //This ensures that if something is already in favs it won't be added again! Huzzah!
                  if ($.inArray(this.id, favoritesList) === -1) {
                    //if it's not in favorites, then add this to it!
                    favoritesList.push(this.id)
                    localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
                    $('#clearFavorites').removeClass('hide');
                    //NEW STUFF -- this sets the html of the Modal...