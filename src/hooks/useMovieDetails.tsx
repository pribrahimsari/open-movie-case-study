import { useQuery } from "react-query";
import { getMovieDetails } from "src/api/api.ts";
import { Movie } from "src/types/movie.ts";

const useMovieDetails = (imdbId: string) => {
  return useQuery<Movie, Error>(["getMovies", imdbId], () => getMovieDetails(imdbId), {
    enabled: !!imdbId,
  });
};

export default useMovieDetails;
