import { useQuery } from "react-query";
import { getMovies } from "src/api/api.ts";
import { Movie } from "src/types/movie.ts";
import { GetMoviesQueryVariables } from "src/types/query.ts";

const HomePage = () => {
  const queryVariables: GetMoviesQueryVariables = {
    s: "Pokemon",
    page: 1,
    year: 1800,
    type: "episode",
  };

  const getMoviesQ = useQuery<Movie[], Error>("getMovies", () => getMovies(queryVariables), { keepPreviousData: true });

  console.debug({ getMoviesQ });

  return <div>TODO: movie search</div>;
};

export default HomePage;
