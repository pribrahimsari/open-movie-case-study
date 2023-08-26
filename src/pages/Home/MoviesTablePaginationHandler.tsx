import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { nextPage, previousPage } from "src/redux/SearchVariablesStore/searchVariablesSlice.ts";
import { useSearchVariablesDispatch, useSearchVariablesSelector } from "src/redux/SearchVariablesStore/SearchVariablesStore.ts";

const MoviesTablePaginationHandler = () => {
  const page = useSearchVariablesSelector((state) => state.searchVariables.page);
  const dispatch = useSearchVariablesDispatch();

  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center" gap={1}>
      <Typography variant="body2">Page: {page}</Typography>

      <Tooltip title={"Previous"}>
        <IconButton size="small" aria-label="Previous" disabled={page === 1} onClick={() => dispatch(previousPage())}>
          <ArrowBackIosIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={"Next"}>
        <IconButton size="small" aria-label="Next" onClick={() => dispatch(nextPage())}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default MoviesTablePaginationHandler;
