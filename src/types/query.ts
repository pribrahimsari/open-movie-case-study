import { MovieType } from "src/types/movie.ts";

export type GetMoviesQueryVariables = {
  s: string;
  page?: number;
  type?: MovieType;
  year?: number;
};
