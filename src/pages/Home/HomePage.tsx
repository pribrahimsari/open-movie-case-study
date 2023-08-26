import { Divider, Paper } from "@mui/material";
import styles from "src/pages/Home/home.module.scss";
import MovieSearchForm from "src/pages/Home/MovieSearchForm.tsx";
import MoviesTable from "src/pages/Home/MoviesTable.tsx";
import MoviesTablePaginationHandler from "src/pages/Home/MoviesTablePaginationHandler.tsx";

const HomePage = () => {
  return (
    <Paper variant="outlined" square className={styles.homeContainer}>
      <MovieSearchForm />
      <Divider sx={{ margin: "1rem" }} />
      <MoviesTable />
      <Divider sx={{ margin: "1rem" }} />
      <MoviesTablePaginationHandler />
    </Paper>
  );
};

export default HomePage;
