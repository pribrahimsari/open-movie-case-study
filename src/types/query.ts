import { Movie, MovieType } from "src/types/movie.ts";

export type GetMoviesQueryVariables = {
  s: string;
  page?: number;
  type?: MovieType;
  year?: number;
};

export type MovieResponseData = {
  Response: "True" | "False";
  Error?: string;
  Search?: Movie[];
  totalResults?: number;
};
