import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65199751818c4e98ac608adb.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
 async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }

});


export const addContact = createAsyncThunk("contacts/addContact",
    async (text, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", { text });
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );


  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (taskId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${taskId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );