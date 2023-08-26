import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";
import HomePage from "src/pages/Home/HomePage.tsx";
import ErrorPage from "src/pages/ErrorPage.tsx";
import MovieDetailsPage from "src/pages/MovieDetails/MovieDetailsPage.tsx";
import "src/App.scss";
import { Provider } from "react-redux";
import { searchVariablesStore } from "src/redux/SearchVariablesStore/SearchVariablesStore.ts";
import Footer from "src/components/Footer.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie/:imdbId",
    element: <MovieDetailsPage />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <Provider store={searchVariablesStore}>
      <QueryClientProvider client={queryClient}>
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <RouterProvider router={router} />
          <Footer />
        </Container>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
