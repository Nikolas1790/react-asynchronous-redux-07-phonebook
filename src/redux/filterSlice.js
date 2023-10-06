import { createSlice } from "@reduxjs/toolkit";

export const filterList = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {      
        filterContact(_, {payload}) {
            return payload;
        }
      },
    
})

export const { filterContact} = filterList.actions;