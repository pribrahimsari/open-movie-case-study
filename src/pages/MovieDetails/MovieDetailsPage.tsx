import { Divider, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import NavigateBack from "src/components/NavigateBack.tsx";

const MovieDetailsPage = () => {
  return (
    <Paper variant="outlined" square sx={{ padding: "1rem" }}>
      <NavigateBack />
      <Divider sx={{ margin: "1rem" }} />
    </Paper>
  );
};

export default MovieDetailsPage;
