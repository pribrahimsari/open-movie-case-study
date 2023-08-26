import { Divider, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import NavigateBack from "src/components/NavigateBack.tsx";
import MovieDetailsContainer from "src/pages/MovieDetails/MovieDetailsContainer.tsx";

const MovieDetailsPage = () => {
  const { imdbId } = useParams();

  return (
    <Paper variant="outlined" square sx={{ padding: "1rem" }}>
      <NavigateBack />
      <Divider sx={{ margin: "1rem" }} />
      {imdbId && <MovieDetailsContainer imdbId={imdbId} />}
    </Paper>
  );
};

export default MovieDetailsPage;
