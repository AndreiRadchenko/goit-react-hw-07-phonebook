import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsOperation,
  addContactOperation,
  deleteContactOperation,
} from './operations';

const initialContacts = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,

  extraReducers: builder => {
    builder
      .addCase(fetchContactsOperation.pending.toString(), handlePending)
      .addCase(fetchContactsOperation.fulfilled.toString(), (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchContactsOperation.rejected.toString(), handleRejected)

      .addCase(addContactOperation.pending.toString(), handlePending)
      .addCase(addContactOperation.fulfilled.toString(), (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContactOperation.rejected.toString(), handleRejected)

      .addCase(deleteContactOperation.pending.toString(), handlePending)
      .addCase(deleteContactOperation.fulfilled.toString(), (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(e => e.id === action.payload.id);
        state.items.splice(index, 1);
      })
      .addCase(deleteContactOperation.rejected.toString(), handleRejected);
  },

  // extraReducers: {
  //   [fetchContactsOperation.pending]: handlePending,
  //   [fetchContactsOperation.fulfilled](state, action) {
  //     state.items = action.payload;
  //     state.isLoading = false;
  //     state.error = null;
  //   },
  //   [fetchContactsOperation.rejected]: handleRejected,

  //   [addContactOperation.pending]: handlePending,
  //   [addContactOperation.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items.push(action.payload);
  //   },
  //   [addContactOperation.rejected]: handleRejected,

  //   [deleteContactOperation.pending]: handlePending,
  //   [deleteContactOperation.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.items.findIndex(e => e.id === action.payload.id);
  //     state.items.splice(index, 1);
  //   },
  //   [deleteContactOperation.rejected]: handleRejected,
  // },
});

export const contactsReducer = contactsSlice.reducer;
