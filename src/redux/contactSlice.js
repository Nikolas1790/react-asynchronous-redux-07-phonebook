import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
// import { nanoid } from "nanoid";
import { addContact, deleteContact, fetchContacts } from "./operations";

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactList = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
        [fetchContacts.pending]:handlePending,
        [fetchContacts.fulfilled](state, {payload}) {
          state.isLoading = false;
          state.error = null;
          state.items = payload;
        },
        [fetchContacts.rejected]: handleRejected,


        [addContact.pending]: handlePending,
          [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
          },
          [addContact.rejected]: handleRejected,



          [deleteContact.pending]: handlePending,
          [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
              task => task.id === action.payload.id
            );
            state.items.splice(index, 1);
          },
          [deleteContact.rejected]: handleRejected,

      },
    
})

 

// import { createSlice } from "@reduxjs/toolkit";
// import { initialState } from "./initialState";
// import { nanoid } from "nanoid";

// export const contactList = createSlice({
//     name: 'contacts',
//     initialState,
//     reducers: {
//         addTask: {
//             reducer(state, action) {
//                state.items.push(action.payload);
//             },
//             prepare({name, number}) {
//                 return {
//                     payload: {
//                         id: nanoid(),
//                         name,
//                         number,
//                     }
//                 }
//             }        
//         },
//         deleteTask(state, action) {
//             const index = state.items.findIndex(task => task.id === action.payload);
//             state.items.splice(index, 1);
//         },
        // filterContact(state, action) {
        //     state.filter = action.payload;
        // }
//     }
// })

// export const { addTask, deleteTask, filterContact} = contactList.actions;
 