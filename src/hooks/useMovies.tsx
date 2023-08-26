import { MovieResponseData } from "src/types/query.ts";
import { useQuery } from "react-query";
import { getMovies } from "src/api/api.ts";
import { useSearchVariablesSelector } from "src/redux/SearchVariablesStore/SearchVariablesStore.ts";

const useMovies = () => {
  const queryVariables = useSearchVariablesSelector((state) => state.searchVariables);
  return useQuery<MovieResponseData, Error>("getMovies", () => getMovies(queryVariables), { keepPreviousData: true });
};

export default useMovies;
