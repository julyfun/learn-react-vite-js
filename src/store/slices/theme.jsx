import { createSlice } from '@reduxjs/toolkit'
import { globalConfig } from '@/globalConfig'
import { theme } from 'antd'

// 试图从本地存储中获取主题配置
const sessionTheme = JSON.parse(window.localStorage.getItem(globalConfig.SESSION_LOGIN_THEME))

const initTheme = sessionTheme ? sessionTheme : globalConfig.initTheme

const initialState = {
    // 主要是背景，边框和文字
    dark: initTheme.dark,
    // 按钮等控件色系切换
    colorPrimary: initTheme.colorPrimary
}

export const themeSlice = createSlice({
    name: 'theme',
    // 这里塞进去 initialState 干嘛？
    initialState,
    reducers: {
        // redux 方法：设置亮色 / 暗色主题
        // 从哪里接收的 state & action ?
        setDark: (state, action) => {
            // store 分库里的 dark 值进行修改 - 全项目动态生效
            // 这里的 dark 就是上面 initlState 里的 dark
            state.dark = action.payload
            // 长久保存主题配置
            // localStorage 没有用 cookie 能保存很久吗？
            window.localStorage.setItem(
                globalConfig.SESSION_LOGIN_THEME,
                JSON.stringify(state)
            )
        },
        setColorPrimary: (state, action) => {
            // store 分库里的 colorPrimary 值进行修改 - 全项目动态生效
            state.colorPrimary = action.payload
            // 长久保存主题配置
            window.localStorage.setItem(
                globalConfig.SESSION_LOGIN_THEME,
                JSON.stringify(state)
            )
        },
    }
})

// 这玩意为啥能从上面那里拿过来导出啊？
// 哦不是从上面导出的，这里似乎是新定义了一个名字而已
// 可以让组件直接使用 setDark 方法来设置主题，而不需要自己构造 action 对象。
// i'm not sure
export const { setDark } = themeSlice.actions
export const { setColorPrimary } = themeSlice.actions

export default themeSlice.reducer
