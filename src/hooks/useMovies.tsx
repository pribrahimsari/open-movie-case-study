import { GetMoviesQueryVariables } from "src/types/query.ts";
import { useQuery } from "react-query";
import { Movie } from "src/types/movie.ts";
import { getMovies } from "src/api/api.ts";

const useMovies = () => {
  // todo: state
  const queryVariables: GetMoviesQueryVariables = {
    s: "Pokemon",
    page: 1,
    // year: 1800,
    // type: "episode",
  };

  return useQuery<Movie[], Error>("getMovies", () => getMovies(queryVariables), { keepPreviousData: true });
};

export default useMovies;
