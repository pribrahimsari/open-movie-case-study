import { GetMoviesQueryVariables } from "src/types/query.ts";

const OMDB_API_URL = import.meta.env.VITE_OMDB_API_URL;
const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const API_URL = `${OMDB_API_URL}?apikey=${OMDB_API_KEY}`;

export const getMovies = ({ s, page, type, year }: GetMoviesQueryVariables) => {
  let fetchUrl = API_URL;
  fetchUrl += `&s=${s || ""}`;
  fetchUrl += `&page=${page || 1}`;
  fetchUrl += `${type ? "&type=" + type : ""}`;
  fetchUrl += `${year ? "&y=" + year : ""}`;

  return fetch(fetchUrl).then((res) => res.json());
};

export const getMovieDetails = (imdbId: string) => {
  let fetchUrl = API_URL;
  fetchUrl += `&i=${imdbId}`;

  return fetch(fetchUrl).then((res) => res.json());
};
