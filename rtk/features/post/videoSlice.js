const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit')

const fetch = require('node-fetch')

const intialState = {
    loading: false,
    videos : [],
    error: null
}

 const fetchVideos = createAsyncThunk('videos/fetchVideos', async () => {
    const response = await fetch(`http://localhost:9000/videos`)
    return response.json()
})

const videosSlice = createSlice({
    name: 'videos',
    initialState: intialState,
    // reducers: {

    // },
    extraReducers: (builder) => {
        builder.addCase(fetchVideos.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });

        builder.addCase(fetchVideos.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.posts = action.payload;
        });

        builder.addCase(fetchVideos.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.posts = [];
        });
    },
})

module.exports = videosSlice.reducer

module.exports.fetchVideos = fetchVideos

