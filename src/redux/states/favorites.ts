import { LocalStorageTypes, Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState: Person[] = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: getLocalStorage(LocalStorageTypes.FAVORITES)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorites: (state, action) => {
      setLocalStorage(LocalStorageTypes.FAVORITES, action.payload);
      return action.payload;
    },
    removeFavorites: (state, action) => {
      debugger
      const filteredState = current(state).filter(
        (p: Person) => p.id !== action.payload.id
      );
      setLocalStorage(LocalStorageTypes.FAVORITES, filteredState);

      return filteredState;
    },
  },
});
export const { addFavorites, removeFavorites } = favoritesSlice.actions;
