import { configureStore } from "@reduxjs/toolkit";
import searchVariablesReducer from "src/redux/SearchVariablesStore/searchVariablesSlice.ts";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const searchVariablesStore = configureStore({
  reducer: {
    searchVariables: searchVariablesReducer,
  },
});

// Redux with TS: https://react-redux.js.org/tutorials/typescript-quick-start
export type SearchVariablesStateType = ReturnType<typeof searchVariablesStore.getState>;
export type SearchVariablesDispatchType = typeof searchVariablesStore.dispatch;

// Use throughout your Type Definitions instead of plain `useDispatch` and `useSelector`
export const useSearchVariablesDispatch: () => SearchVariablesDispatchType = useDispatch;
export const useSearchVariablesSelector: TypedUseSelectorHook<SearchVariablesStateType> = useSelector;
