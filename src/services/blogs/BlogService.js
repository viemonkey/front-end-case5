import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async () => {
        const res = await axios.get('http://localhost:5000/api/posts');
        return res.data
    }
)
export const addBlogs = createAsyncThunk(
    'posts/addBlogs',
    async (data) => {
        const res = await axios.post('http://localhost:5000/api/posts', data);
        return res
    }
)