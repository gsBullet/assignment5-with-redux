
const store = require('./app/store');
const {fetchVideos} = require('./features/post/videoSlice'); 

store.dispatch(fetchVideos())