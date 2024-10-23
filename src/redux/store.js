import { configureStore } from "@reduxjs/toolkit";
import PersonSlice from './PersonSlice';

export default configureStore({
    reducer: {
        personSlices: PersonSlice
    }
});