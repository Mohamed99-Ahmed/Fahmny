import { configureStore } from "@reduxjs/toolkit";
import { surah } from "./Surrah";

const store = configureStore({
  // All name af slice adding to store
  reducer: {
    surah,
  },
});
// ! Export store to put in provider in app.jsx
export default store;
