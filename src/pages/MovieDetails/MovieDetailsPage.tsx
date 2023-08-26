import { Box, Button, Divider, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const NavigateBack = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Box>
      <Button size="small" variant="outlined" onClick={handleClick} color="primary" startIcon={<ArrowBackIcon />}>
        Go Back
      </Button>
    </Box>
  );
};

const MovieDetailsPage = () => {
  return (
    <Paper variant="outlined" square sx={{ padding: "1rem" }}>
      <NavigateBack />
      <Divider sx={{ margin: "1rem" }} />
    </Paper>
  );
};

export default MovieDetailsPage;
