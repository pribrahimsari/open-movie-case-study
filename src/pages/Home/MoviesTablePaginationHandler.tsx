import { Box, IconButton, Tooltip } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MoviesTablePaginationHandler = () => {
  return (
    <Box display="flex" justifyContent="flex-end" gap={1}>
      <Tooltip title={"Previous Page"}>
        <IconButton size="small" aria-label="previous page">
          <ArrowBackIosIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={"Next Page"}>
        <IconButton size="small" aria-label="next page">
          <ArrowForwardIosIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default MoviesTablePaginationHandler;
