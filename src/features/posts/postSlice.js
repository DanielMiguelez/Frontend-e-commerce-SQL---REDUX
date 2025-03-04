import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import postsService from "./postsService"


const initialState = {
    posts:[],
    post:{},
    isLoading: false,
}

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () =>{
    try {
        return await postsService.getAllPosts()
    } catch (error) {
        console.error(error)
    }
})

export const getPostById = createAsyncThunk("posts/getPostById", async (id) =>{
    try {
        return await postsService.getPostById(id)
    } catch (error) {
        console.error(error)
    }
})

export const getPostByTitle = createAsyncThunk("posts/getPostByTitle", async(title) =>{
    try {
        return await postsService.getPostByTitle(title)
    } catch (error) {
        console.error(error)
    }
})


export const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        reset: (state)=>{
            state.isLoading = false;
        }
    },

    extraReducers:(builder) =>{
        builder 
            .addCase(getAllPosts.fulfilled, (state, action) =>{
                state.posts = action.payload
                state.isLoading = false;
            })
            .addCase(getAllPosts.pending, (state, action) =>{
                state.isLoading = true;
            })
            .addCase(getPostById.fulfilled, (state, action) => {
                state.post = action.payload
            })
            .addCase(getPostByTitle.fulfilled, (state, action) =>{
                state.posts = action.payload;
            })
    }
})

export const {reset} = postSlice.actions
export default postSlice.reducer;