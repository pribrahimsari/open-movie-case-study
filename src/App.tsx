import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";
import ErrorPage from "./pages/ErrorPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import MoviePage from "./pages/MoviePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie/:imdbId",
    element: <MoviePage />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <RouterProvider router={router} />
    </Container>
  );
};

export default App;
