import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INITIAL_SEARCH_VARIABLES } from "src/constants/constants.ts";
import { GetMoviesQueryVariables } from "src/types/query.ts";

export const searchVariablesSlice = createSlice({
  name: "searchVariables",
  initialState: INITIAL_SEARCH_VARIABLES,
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
    previousPage: (state) => {
      if (state.page > 1) state.page -= 1;
    },
    changeSearchVariables: (state, action: PayloadAction<GetMoviesQueryVariables>) => {
      state.s = action.payload.s;
      state.page = action.payload.page || 1;
      state.year = action.payload.year;
      state.type = action.payload.type;
    },
  },
});

export const { nextPage, previousPage, changeSearchVariables } = searchVariablesSlice.actions;
export default searchVariablesSlice.reducer;
