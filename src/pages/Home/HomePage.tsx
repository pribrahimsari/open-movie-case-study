import useMovies from "src/hooks/useMovies.tsx";

const HomePage = () => {
  const test = useMovies();

  console.debug({ test });

  return <div>TODO: movie search</div>;
};

export default HomePage;
