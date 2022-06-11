import { configureStore } from '@reduxjs/toolkit'
import switchSlice from "./slice/switch";

export default configureStore({
    reducer: {
        switcher: switchSlice,
    },
})