# Flick Finder

An application to find where your favorite flicks are on the web, by Treecko Productions.

# Purpose

Flick Finder is an application created to discover on which media platforms a movie or show can be accessed, instead of the user having to log into multiple different apps for multiple different streaming services to search for that title. Information about these titles is provided on search, and the user can save movies as favorites for quick reference. Flick Finder also shows the user trailers for the Top 10 Trending movies out, and has links for free movies available on YouTube. 

# Description

Flick Finder centers around its search functionality. The user enters the name of a title into the search, and the results populate the page with information about each title including, principally, on which media services that title can be found. Basic information from the search results appears below the poster and title of each result, as does a 'Flick to Favorites' button, which allows the user to save any search result as a Favorite. 

Adding a favorite creates another button with that title's name on it, which pops up in the 'Favorites' container on the screen. Clicking on this title populates the page with more detailed information on that title. A modal alert also appears on screen, letting the user know the movie was successfully added to favorites. If a movie has already been favorited, when the user clicks the button again, a different alert tells the user of this fact.

To perform this title search, Flick Finder utilizes the free Utelly API which to search for movies by the given keyword entered by the user. The free version of this API only posts up to five results, unfortunately. A future evolution of Flick Finder could be to use a more robust API for this task instead. After the initial query through the Utelly API, a separate query is made for each of the results drawn from Utelly, this time using the OMDB API. This API contains more, and more detailed, information on the titles in question, that can be displayed for the user's edification.

Also featured on the main screen is a carousel object containing embedded trailers for the current top 10 trending movies online. Below this sits three rows of clickable movie posters for free movies on YouTube. Clicking one of these posters takes you to the movie's page on YouTube. At the top of the page, the user can find buttons that will redirect the user to each of these features immediately. 

A footer at the bottom of the page contains the Treecko Productions icon and three links - 'About Flick Finder', 'Contact Us', and 'My Account'. In the 'About' page the user can find quick bios on the various brains behind Flick Finder and Treecko Productions. The 'Contact' page contains information on how to connect with us at Treecko Productions. Clicking 'My Account' will do something super cool, no doubt. 

Most of the CSS was completed with vanilla CSS in the style.css file, but feature items, such as the modals, the carousel, and the footer, were drawn from the third-party Foundation. Other resources utilized include Google Fonts and jQuery.

# Files in Repository

Inside the Assets folder one will find a folder CSS containing the style.css file, where virtually all of the styling/formatting of the project is elaborated, and the JS folder, containing the script.js file that works out all the magic of the Flick Finder app. Also in the assets folder is the logo for Treecko Productions. 

The index.html file contains all of the major HTML5 source code for the main page of Flick Finder, including the search bar and results container, carousel of trending movie trailers, links to free movies on YouTube, and the footer with related links.

The contact.html file...


# Links and GIFS/Screenshots

GitHub Repo:

https://github.com/ElderBass/API-Project-Treecko.git

Deployed:

https://elderbass.github.io/API-Project-Treecko/





