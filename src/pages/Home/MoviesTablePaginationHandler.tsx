import { Box, IconButton, Tooltip } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MoviesTablePaginationHandler = () => {
  return (
    <Box display="flex" justifyContent="flex-end" gap={1}>
      <Tooltip title={"Previous"}>
        <IconButton size="small" aria-label="Previous">
          <ArrowBackIosIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={"Next"}>
        <IconButton size="small" aria-label="Next">
          <ArrowForwardIosIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default MoviesTablePaginationHandler;
