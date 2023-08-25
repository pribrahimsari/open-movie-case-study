import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";
import HomePage from "src/pages/HomePage.tsx";
import ErrorPage from "src/pages/ErrorPage.tsx";
import MoviePage from "src/pages/MoviePage.tsx";
import "src/App.scss";

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <RouterProvider router={router} />
      </Container>
    </QueryClientProvider>
  );
};

export default App;
