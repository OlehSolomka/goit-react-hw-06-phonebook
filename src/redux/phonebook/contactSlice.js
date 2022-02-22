import { createSlice, nanoid } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    submitValue: {
      reducer: (state, { payload }) => {
        if (state.find((unit) => unit.name === payload.name)) {
          return alert(`${payload.name} is already in your contacts`);
        }
        return [...state, payload];
      },
      prepare: (data) => ({
        payload: { name: data[0].toLowerCase(), number: data[1], id: nanoid() },
      }),
    },
    deleteValue: (state, { payload }) =>
      state.filter((unit) => unit.name !== payload),
  },
});

export const { submitValue, deleteValue } = contactSlice.actions;
