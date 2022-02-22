import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { contactSlice, filterSlice } from "./phonebook";

const contactsPersistConfig = {
  key: "phonebook",
  storage,
  blacklist: ["filter"],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const rootReducer = combineReducers({
  contacts: contactSlice.reducer,
  filter: filterSlice.reducer,
});

const store = configureStore({
  reducer: {
    phonebook: persistReducer(contactsPersistConfig, rootReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

let persistor = persistStore(store);

export { store, persistor };
