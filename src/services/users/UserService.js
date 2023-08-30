import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
    'user/login',
    async (data) => {
        const res = await axios.post('http://localhost:5000/login', data);
        return res
    }
)