import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router, RouterProvider } from 'react-router-dom'
import { globalRouters } from '@/router'
import { ConfigProvider } from 'antd'
import { store } from '@/store'
import { Provider } from 'react-redux'
import zhCN from 'antd/es/locale/zh_CN'
import '@/common/styles/frame.styl'

// Router 居然就是在这里啊
// 用 Provider 包括 store，这样整个项目都可以直接访问 store
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
            <RouterProvider router={globalRouters} />
        </ConfigProvider>
    </Provider>
)
