import { useState } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { INITIAL_SEARCH_TITLE } from "src/constants/constants.ts";
import { changeSearchVariables } from "src/redux/SearchVariablesStore/searchVariablesSlice.ts";
import { useSearchVariablesDispatch, useSearchVariablesSelector } from "src/redux/SearchVariablesStore/SearchVariablesStore.ts";
import { GetMoviesQueryVariables } from "src/types/query.ts";
import { MovieType } from "src/types/movie.ts";

const MovieSearchForm = () => {
  const searchVariables = useSearchVariablesSelector((state) => state.searchVariables);
  const dispatch = useSearchVariablesDispatch();

  const [title, setTitle] = useState(searchVariables.s);
  const [year, setYear] = useState(searchVariables.year || "");
  const [type, setType] = useState<MovieType | undefined | "">(searchVariables.type || "");

  const handleResetClick = () => {
    setTitle(INITIAL_SEARCH_TITLE);
    setYear("");
    setType("");
  };

  const handleSearchClick = () => {
    const newState: GetMoviesQueryVariables = {
      s: title || "",
      year: year ? Number(year) : undefined,
      type: type || undefined,
      page: 1,
    };
    dispatch(changeSearchVariables(newState));
  };

  return (
    <Box display="flex" justifyContent="space-between" gap={1}>
      <Box flexGrow={1}>
        <TextField fullWidth label="Movie Title" variant="outlined" size="small" required value={title} onChange={(e) => setTitle(e.target.value)} />
      </Box>

      <TextField
        label="Year"
        type="number"
        variant="outlined"
        size="small"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        // restriction for maxLength
        onInput={(e) => {
          (e.target as HTMLInputElement).value = Math.max(0, parseInt((e.target as HTMLInputElement).value))
            .toString()
            .slice(0, 4);
        }}
        sx={{ maxWidth: 100 }}
      />

      <FormControl size="small">
        <InputLabel id="type-selector-label">Type</InputLabel>
        <Select
          value={type}
          onChange={(event) => setType(event.target.value as MovieType)}
          labelId="type-selector-label"
          label="Type"
          sx={{ minWidth: 100 }}
          // size="small"
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value={"movie"}>Movie</MenuItem>
          <MenuItem value={"series"}>Series</MenuItem>
          <MenuItem value={"episode"}>Episode</MenuItem>
        </Select>
      </FormControl>

      <Box display="flex" justifyContent="space-between" gap={1}>
        <Button size="small" variant="outlined" startIcon={<RestartAltIcon />} onClick={handleResetClick}>
          Reset
        </Button>
        <Button size="small" variant="contained" startIcon={<SearchIcon />} onClick={handleSearchClick} disabled={title.trim() === ""}>
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default MovieSearchForm;
