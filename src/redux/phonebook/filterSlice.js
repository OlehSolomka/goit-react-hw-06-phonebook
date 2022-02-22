import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: { query: "" },
  reducers: {
    setFilterQuery(state, { payload }) {
      state.query = payload;
    },
  },
});

export const { setFilterQuery } = filterSlice.actions;
