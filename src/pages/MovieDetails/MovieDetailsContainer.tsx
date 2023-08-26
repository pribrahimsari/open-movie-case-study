import useMovieDetails from "src/hooks/useMovieDetails.tsx";
import { Alert, CircularProgress } from "@mui/material";
import MovieDetails from "src/pages/MovieDetails/MovieDetails.tsx";

const MovieDetailsContainer = ({ imdbId }: { imdbId: string }) => {
  const { isLoading, data: movie } = useMovieDetails(imdbId);

  // todo: skeleton may be better
  if (isLoading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  if (!isLoading && !movie) {
    return <Alert severity="error">Data cannot be fetched!</Alert>;
  }

  return <MovieDetails movie={movie} />;
};

export default MovieDetailsContainer;
