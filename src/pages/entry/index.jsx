import { Outlet } from "react-router-dom";
import Header from '@/components/header'
import { useSelector } from 'react-redux'
import { ConfigProvider, theme } from "antd";
import './entry.styl'


// 来自 ant design 的主题配置
const { darkAlgorithm, defaultAlgorithm } = theme

function Entry() {
    // 外面传进来的 state 么
    const globalTheme = useSelector((state) => state.theme)

    let antdTheme = {
        // ???? 这个是什么
        // 为啥 globalTheme 有 dark 这个属性
        algorithm: globalTheme.dark ? darkAlgorithm : defaultAlgorithm,
    }
    // 应用自定义主题色
    // 谁设置的？theme.jsx 中的函数操作了 store
    if (globalTheme.colorPrimary) {
        antdTheme.token = {
            colorPrimary: globalTheme.colorPrimary,
        }
    }
    // 为二级路由页面挖好的坑

    return (
        <ConfigProvider theme={antdTheme}>
            <div className="M-entry">
                <Header />
                <div className="main-container">
                    <Outlet />
                </div>
            </div>
        </ConfigProvider>
    )
}

export default Entry
