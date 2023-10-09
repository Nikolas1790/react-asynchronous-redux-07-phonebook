import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { addContact, deleteContact, fetchContacts } from "./operations";
import { handleFulfilledErrorLoading, handlePending, handleRejected } from "./contactSliceHendlesExtraReducers";

export const contactList = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
        [fetchContacts.pending]:handlePending,
        [fetchContacts.fulfilled](state, {payload}) {
          handleFulfilledErrorLoading(state);
          state.items = payload;
        },
        [fetchContacts.rejected]: handleRejected,



        [addContact.pending]: handlePending,
          [addContact.fulfilled](state, {payload}) {
            handleFulfilledErrorLoading(state);
            state.items.push(payload);
          },
          [addContact.rejected]: handleRejected,


          
          [deleteContact.pending]: handlePending,
          [deleteContact.fulfilled](state, action) {
            handleFulfilledErrorLoading(state);
            const index = state.items.findIndex(
              task => task.id === action.payload.id
            );
            state.items.splice(index, 1);
          },
          [deleteContact.rejected]: handleRejected,

      },
    
})
