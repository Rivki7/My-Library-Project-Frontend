import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

const initialState = {
  books: [],
};

export const getBooks = createAsyncThunk(
  'book/getAllBooks',
  async (name, thunkAPI) => {
    try {
      // console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      const resp = await api.get('/Book');

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const bookSlice = createSlice({
  name: 'book',
  initialState,
  // reducers: {
  //   clearCart: (state) => {
  //     state.cartItems = [];
  //   },
  //   removeItem: (state, action) => {
  //     const itemId = action.payload;
  //     state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
  //   },
  //   increase: (state, { payload }) => {
  //     const cartItem = state.cartItems.find((item) => item.id === payload.id);
  //     cartItem.amount = cartItem.amount + 1;
  //   },
  //   decrease: (state, { payload }) => {
  //     const cartItem = state.cartItems.find((item) => item.id === payload.id);
  //     cartItem.amount = cartItem.amount - 1;
  //   },
  //   calculateTotals: (state) => {
  //     let amount = 0;
  //     let total = 0;
  //     state.cartItems.forEach((item) => {
  //       amount += item.amount;
  //       total += item.amount * item.price;
  //     });
  //     state.amount = amount;
  //     state.total = total;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

// console.log(cartSlice);
// export const { getBooks } = bookSlice.actions;

export default bookSlice.reducer;
