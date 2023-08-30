import { createSlice } from "@reduxjs/toolkit";
import { addBlogs, getPosts } from "../../services/blogs/BlogService";


const initialState = {
    blogs: []
}
const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.blogs = action.payload
        })
        builder.addCase(addBlogs.fulfilled, (state, action) => {
            state.blogs.push(action.payload)
        })
    }
})
export default blogSlice.reducer