import { createSlice } from "@reduxjs/toolkit";
// import { addContact, deleteContact, fetchContacts } from "./operations";

export const filterList = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {      
        filterContact(_, action) {
            return action.payload;
        }
      },
    
})

export const { filterContact} = filterList.actions;