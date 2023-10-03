import { configureStore } from '@reduxjs/toolkit'
import { contactList } from './contactSlice'
import { filterList } from './filterSlice'

export const store = configureStore({
  reducer:{
    contacts: contactList.reducer,  
    filter: filterList.reducer,
  },
})

