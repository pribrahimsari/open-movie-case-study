import { Movie } from "src/types/movie.ts";
import { Box, Divider, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { Image } from "mui-image";

const MovieDetails = ({ movie }: { movie: Movie }) => {
  // console.debug({ movie });

  return (
    <Box>
      {/* First Row */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {/* Title & Subtitle */}
        <Box display="flex" flexDirection="column">
          <Typography variant="h4">{movie.Title}</Typography>
          <Typography variant="subtitle2">
            {movie.Year} · {movie.Rated} · {movie.Runtime}
          </Typography>
        </Box>

        {/* Ratings */}
        <Box display="flex">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="subtitle2">IMDb Rating</Typography>
            <Typography variant="h5">
              <b>{movie.imdbRating}</b> / 10
            </Typography>
            <Typography variant="subtitle2">{movie.imdbVotes} Votes</Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ margin: "1rem" }} />

      {/* Poster & Desc */}
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" gap={2}>
        <Box>
          <Image src={movie.Poster} showLoading width={300} />
        </Box>

        <Box>
          <b>Plot:</b>
          <Typography variant="body1">{movie.Plot}</Typography>
        </Box>
      </Box>

      <Divider sx={{ margin: "1rem" }} />

      {/* Others */}
      <TableContainer>
        <Table size="small">
          <TableBody>
            {/* Filter the keys and map string ones */}
            {Object.entries(movie)
              .filter(([key]) => !["Poster", "Plot", "Ratings"].includes(key))
              .map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell>
                    <Typography variant="subtitle2">{key}</Typography>
                  </TableCell>
                  <TableCell>{value as string}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MovieDetails;
