import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { nanoid } from "nanoid";

export const contactList = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addTask: {
            reducer(state, action) {
               state.items.push(action.payload);
            },
            prepare({name, number}) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    }
                }
            }        
        },
        deleteTask(state, action) {
            const index = state.items.findIndex(task => task.id === action.payload);
            state.items.splice(index, 1);
        },
        filterContact(state, action) {
            state.filter = action.payload;
        }
    }
})

export const { addTask, deleteTask, filterContact} = contactList.actions;
 