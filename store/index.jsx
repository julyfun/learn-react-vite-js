import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/store/slices/theme"

export const store = configureStore({
    reducer: {
        // 主题换肤 store 分库
        theme: themeReducer
        // 可以追加其他分库
    }
})
