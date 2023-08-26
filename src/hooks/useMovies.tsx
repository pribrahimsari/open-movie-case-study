import { GetMoviesQueryVariables, MovieResponseData } from "src/types/query.ts";
import { useQuery } from "react-query";
import { getMovies } from "src/api/api.ts";

const useMovies = () => {
  // todo: state
  const queryVariables: GetMoviesQueryVariables = {
    s: "Pokemon",
    page: 1,
    // year: 1800,
    // type: "episode",
  };

  return useQuery<MovieResponseData, Error>("getMovies", () => getMovies(queryVariables), { keepPreviousData: true });
};

export default useMovies;
