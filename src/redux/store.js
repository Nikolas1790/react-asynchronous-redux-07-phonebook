import { configureStore } from '@reduxjs/toolkit'
import { contactList } from './contactSlice'

export const store = configureStore({
  reducer:{
    contacts: contactList.reducer,  
  },
})

