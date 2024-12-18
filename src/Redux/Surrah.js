import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching data from quran api 
export const getSurrah = createAsyncThunk(
  "ayah/getSurrah",
  //! Take id (number of surah) to put in link of api then response with surah
  async (id) => {
    try {
      
      
      const { data } = await axios.get(
        `https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${id}`
      );
      console.log(data.result)
      return data.result; // Return the fetched data
    } catch (error) {
      throw Error(error); // In case of error, throw an error
    }
  }
);

// Slice for ayah data
const AahaSlice = createSlice({
  name: "ayah",
  initialState: {
    data: null,
    isLoading: false,
    isError: false,
 
  },
  //! Async function of api excuted in extraReducers 
  extraReducers: (builder) => {
    builder
      .addCase(getSurrah.pending, (state) => {
        // When the request is pending, set loading to true
        state.isLoading = true;
        state.isError = false;
        state.data = null;
  
      })
      .addCase(getSurrah.fulfilled, (state, action) => {
        // When the request is fulfilled, set the state with the fetched data
        state.isLoading = false;
        state.isError = false;
        state.data = action.payload;
       
      })
      .addCase(getSurrah.rejected, (state) => {
        // When the request is rejected, set error and loading flags
        state.isLoading = false;
        state.isError = true;
        state.data = null; // Or you can store the error message in state if needed
       
      });
  },
});
//! Export surah slice to put in store and using in any place in application 
export const surah = AahaSlice.reducer;
