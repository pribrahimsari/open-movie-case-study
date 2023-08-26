import { Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useMovies from "src/hooks/useMovies.tsx";
import { Movie } from "src/types/movie.ts";
import styles from "src/pages/Home/home.module.scss";

const headCells = [
  { id: "imdbId", label: "IMDB ID" },
  { id: "title", label: "Title" },
  { id: "year", label: "Year" },
  { id: "type", label: "Type" },
  { id: "imdbRating", label: "IMDB Rating" },
];

/**
 * Movies Table Head Cells
 */
const MoviesTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell width={headCell.id === "title" ? "50%" : undefined} key={headCell.id}>
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

/**
 * Display MUI's Skeleton text variant while API request is loading
 */
const SkeletonLoadingRow = () => {
  return (
    <TableRow>
      <TableCell colSpan={headCells.length}>
        <Skeleton variant="text" />
      </TableCell>
    </TableRow>
  );
};

/**
 * Table row for a movie record
 */
const MovieTableRow = ({ movie }: { movie: Movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.imdbID}`);
  };

  return (
    <TableRow hover className={styles.movieRow} onClick={handleClick}>
      <TableCell>{movie.imdbID}</TableCell>
      <TableCell>{movie.Title}</TableCell>
      <TableCell>{movie.Year}</TableCell>
      <TableCell>{movie.Type}</TableCell>
      <TableCell>{movie.imdbRating || "-"}</TableCell>
    </TableRow>
  );
};

/**
 * Container component to handle table operations
 */
const MoviesTable = () => {
  const { data, isLoading } = useMovies();

  return (
    <TableContainer>
      <Table size="small">
        <MoviesTableHead />

        <TableBody>
          {/* loading */}
          {isLoading && [...Array(10).keys()].map((i) => <SkeletonLoadingRow key={i} />)}

          {/* no results */}
          {!isLoading && !data?.Search?.length && (
            <TableRow>
              <TableCell colSpan={headCells.length} align="center">
                <Typography variant="body2">
                  <i>-- No Results --</i>
                </Typography>
              </TableCell>
            </TableRow>
          )}

          {/* results */}
          {!isLoading && data && data?.Search?.length && data.Search.map((movie) => <MovieTableRow key={movie.imdbID} movie={movie} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MoviesTable;
