import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

// todo: get vals from state and trigger search
const MovieSearchForm = () => {
  return (
    <Box display="flex" justifyContent="space-between" gap={1}>
      <Box flexGrow={1}>
        <TextField fullWidth label="Movie Title" variant="outlined" size="small" required />
      </Box>

      <TextField
        label="Year"
        type="number"
        variant="outlined"
        size="small"
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
          // value={todo}
          // onChange={todo}
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
        <Button size="small" variant="outlined" startIcon={<RestartAltIcon />}>
          Reset
        </Button>
        <Button size="small" variant="contained" startIcon={<SearchIcon />}>
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default MovieSearchForm;
