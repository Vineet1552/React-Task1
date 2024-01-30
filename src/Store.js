// Store.js
import { configureStore } from "@reduxjs/toolkit";
import { Modal1 } from "./Reducers/func"; // Ensure you import Modal1 from your reducer file

const store = configureStore({
  reducer: {
    Modal1,
    // Other reducers if you have them
  },
});

export default store;
