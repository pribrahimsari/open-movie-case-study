import { GetMoviesQueryVariables } from "src/types/query.ts";

export const INITIAL_SEARCH_TITLE = "Pokemon";

export const INITIAL_SEARCH_VARIABLES: GetMoviesQueryVariables = {
  s: INITIAL_SEARCH_TITLE,
  page: 1,
  year: undefined,
  type: undefined,
};

export const FOOTER_URLS = {
  github: "https://github.com/pribrahimsari",
  linkedin: "https://www.linkedin.com/in/ibrahim--sari/",
  portfolio: "https://isari.me/",
};
