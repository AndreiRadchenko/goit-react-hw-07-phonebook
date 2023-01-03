import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsOperation,
  addContactOperation,
  deleteContactOperation,
} from './operations';

const initialContacts = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
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
  extraReducers: {
    [fetchContactsOperation.pending]: handlePending,
    [fetchContactsOperation.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContactsOperation.rejected]: handleRejected,

    [addContactOperation.pending]: handlePending,
    [addContactOperation.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContactOperation.rejected]: handleRejected,

    [deleteContactOperation.pending]: handlePending,
    [deleteContactOperation.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(e => e.id === action.payload.id);
      state.items.splice(index, 1);
    },
    [deleteContactOperation.rejected]: handleRejected,
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
