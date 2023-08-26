import { GetMoviesQueryVariables } from "src/types/query.ts";

export const INITIAL_SEARCH_TITLE = "Pokemon";

export const INITIAL_SEARCH_VARIABLES: GetMoviesQueryVariables = {
  s: INITIAL_SEARCH_TITLE,
  page: 1,
  year: undefined,
  type: undefined,
};
