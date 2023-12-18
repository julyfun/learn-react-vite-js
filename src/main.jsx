import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router, RouterProvider } from 'react-router-dom'
import { globalRouters } from '@/router'
import '@/common/styles/frame.styl'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ConfigProvider locale={zhCN}>
        <RouterProvider router={globalRouters} />
    </ConfigProvider>
)
