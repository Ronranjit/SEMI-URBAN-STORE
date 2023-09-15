import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  products: [],
  product: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// get products
export const getProducts = createAsyncThunk(
  "Products/getProducts",
  async (_, thunkAPI) => {
    try {
      return axios
        .get("https://api.pujakaitem.com/api/products")
        .then((res) => {
          return res.data;
        });
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// get product
export const getProduct = createAsyncThunk(
  "Product/getProduct",
  async (id, thunkAPI) => {
    try {
      return axios
        .get(`https://api.pujakaitem.com/api/products/${id}`)
        .then((res) => {
          console.log(res.data);
          return res.data;
        });
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// end of get proucts

export const productSlice = createSlice({
  name: "cloth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.products = null;
      })

      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.product = null;
      });
  },
});

export default productSlice.reducer;
