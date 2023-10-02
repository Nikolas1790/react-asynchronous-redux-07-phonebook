import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { nanoid } from "nanoid";
import { addContact, deleteContact, fetchContacts } from "./operations";

export const contactList = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
        [fetchContacts.pending](state) {
          state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, action) {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
        },
        [fetchContacts.rejected](state, action) {
          state.isLoading = false;
          state.error = action.payload;
        },


        [addContact.pending](state) {
            state.isLoading = true;
          },
          [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
          },
          [addContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
          },



          [deleteContact.pending](state) {
            state.isLoading = true;
          },
          [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
              task => task.id === action.payload.id
            );
            state.items.splice(index, 1);
          },
          [deleteContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
          },

          filterContact(state, action) {
            state.filter = action.payload;
        }
      },
    
})

export const { filterContact} = contactList.actions;
 

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
 