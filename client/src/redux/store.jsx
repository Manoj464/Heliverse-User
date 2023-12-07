import {configureStore} from "@reduxjs/toolkit"
import userSlice from './actions'

const store = configureStore({
    reducer: {
        users: userSlice,
    }, 
});

export default store;