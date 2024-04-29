const videoReducer = require("../features/post/videoSlice");

const configureStore = require("@reduxjs/toolkit").configureStore;
const { createLogger } = require("redux-logger");
const logger = createLogger();

const store = configureStore({
  reducer: {
    video: videoReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});

module.exports = store;
