import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },

  reducers: {
    addNewContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(newContact) {
        return { payload: { ...newContact, id: nanoid() } };
      },
    },
    getFilter: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },

    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload.id);
    },
  },
});

export const { addNewContact, deleteContact, getFilter } = contactSlice.actions;
export default contactSlice.reducer;
