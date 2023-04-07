# LedMDB

## [LIVE](https://ledmdb.abdulsadiq.com/) (Work in Progress)

## Description

In 2019, my wife and I decided to make a record of every single movie we watched that year. The reason for this was to collect a real dataset to use when practicing creating apps, like **LedMDB**! Take a browse around at the movies we watched. Click on one that you wish to see more information on! You can start by selecting a month in the filters section!

## Development

There are two sources of data used in **LedMDB**. The first is the watched movies list and the second is the [Open Movie Database](https://www.omdbapi.com/), which is used to get movie information.

OMDB is an open movie database which provides a RESTful service to developers through their API. I chose to use this API to get detailed information on each movie, as well as the official poster image to use as well. **LedMDB** uses all these to create my own movie database for the movies watched in one full calendar year. A fun and invested means of practicing APIs, observables, and Angular best practices.

Some of the fields of information you can get from OMDB's API are _actors_, _director_, _writer_, _genre_, among others. Utilizing this data, I'm able to create a movie modal with it all displayed in an aesthetic way. Click on a movie to see the modal yourself! Furthermore, you can click on an actor/director/writer/genre's name to filter all movies watched based on that selection!

There are three themes to choose from for the display of movies; small, large and table. The small and large themes create movie cards that vary in size, both with their own styling. The table theme displays the list of movies in a table form. The user can still select a movie to view the movie modal.

The dropdown input you see on the main page of [LedMDB](https://ledmdb.abdulsadiq.com/) is a custom component. I like the animation of the placeholder as a selection is made. I also created a custom textbox component, but have not implemented it in this app yet. Take a look at the _TextboxComponent_ for a sneak peak at it, if interested!

## Built With

_Programming Language:_ **Angular**, **Typescript**, **SCSS**

## Author

[Abdul Sadiq](https://github.com/LedMetal)
