/*
***********************
* SAMPLE MOVIE OBJECT *
***********************
{
  "Title": "The Lord of the Rings: The Fellowship of the Ring",
  "Year": "2001",
  "Rated": "PG-13",
  "Released": "19 Dec 2001",
  "Runtime": "178 min",
  "Genre": "Action, Adventure, Drama",
  "Director": "Peter Jackson",
  "Writer": "J.R.R. Tolkien, Fran Walsh, Philippa Boyens",
  "Actors": "Elijah Wood, Ian McKellen, Orlando Bloom",
  "Plot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
  "Language": "English, Sindarin",
  "Country": "New Zealand, United States",
  "Awards": "Won 4 Oscars. 123 wins & 127 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "8.8/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "91%"
    },
    {
      "Source": "Metacritic",
      "Value": "92/100"
    }
  ],
  "Metascore": "92",
  "imdbRating": "8.8",
  "imdbVotes": "1,932,971",
  "imdbID": "tt0120737",
  "Type": "movie",
  "DVD": "28 Jun 2011",
  "BoxOffice": "$316,115,420",
  "Production": "N/A",
  "Website": "N/A",
  "Response": "True"
}
*/

export type Movie = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};

export type Rating = {
  Source: string;
  Value: string;
};

export type MovieType = "movie" | "series" | "episode";
