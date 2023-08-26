// import useMovies from "src/hooks/useMovies.tsx";
import { Divider, Paper } from "@mui/material";
import styles from "src/pages/Home/home.module.scss";
import MovieSearchForm from "src/pages/Home/MovieSearchForm.tsx";

const HomePage = () => {
  // const test = useMovies();
  //
  // console.debug({ test });

  return (
    <Paper variant="outlined" square className={styles.homeContainer}>
      <MovieSearchForm />
      <Divider sx={{ margin: ".5rem" }} />
      Todo: Table
      <Divider sx={{ margin: ".5rem" }} />
      Todo: Next / Previous pages
    </Paper>
  );
};

export default HomePage;
