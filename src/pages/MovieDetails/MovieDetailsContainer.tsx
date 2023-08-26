import useMovieDetails from "src/hooks/useMovieDetails.tsx";
import { Alert, Box, CircularProgress } from "@mui/material";
import MovieDetails from "src/pages/MovieDetails/MovieDetails.tsx";

const MovieDetailsContainer = ({ imdbId }: { imdbId: string }) => {
  const { isLoading, data: movie } = useMovieDetails(imdbId);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="3rem" />
      </Box>
    );
  }

  if (!isLoading && !movie) {
    return <Alert severity="error">Data cannot be fetched!</Alert>;
  }

  return <MovieDetails movie={movie} />;
};

export default MovieDetailsContainer;
