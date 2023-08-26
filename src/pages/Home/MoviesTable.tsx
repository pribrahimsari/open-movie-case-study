import useMovies from "src/hooks/useMovies.tsx";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Movie } from "src/types/movie.ts";

const headCells = [
  { id: "imdbId", label: "IMDB ID" },
  { id: "title", label: "Title" },
  { id: "year", label: "Year" },
  { id: "type", label: "Type" },
  { id: "imdbRating", label: "IMDB Rating" },
];

const MoviesTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id}>{headCell.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const MovieTableRow = ({ movie }: { movie: Movie }) => {
  return (
    <TableRow>
      <TableCell>{movie.imdbID}</TableCell>
      <TableCell>{movie.Title}</TableCell>
      <TableCell>{movie.Year}</TableCell>
      <TableCell>{movie.Type}</TableCell>
      <TableCell>{movie.imdbRating || "-"}</TableCell>
    </TableRow>
  );
};

const MoviesTable = () => {
  const { data, isLoading } = useMovies();

  // console.debug({ data });

  return (
    <TableContainer>
      <Table size="small">
        <MoviesTableHead />

        <TableBody>
          {/* loading */}
          {isLoading && (
            <TableRow>
              <TableCell colSpan={headCells.length}>Loading todo</TableCell>
            </TableRow>
          )}

          {/* no results */}
          {!isLoading && !data?.Search?.length && (
            <TableRow>
              <TableCell colSpan={headCells.length}>No results todo</TableCell>
            </TableRow>
          )}

          {/* loading */}
          {!isLoading && data && data?.Search?.length && data.Search.map((movie) => <MovieTableRow key={movie.imdbID} movie={movie} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MoviesTable;
