import { createHashRouter, Navigate } from 'react-router-dom'
import Login from '@/pages/login'
import Home from '@/pages/home'
import Account from '@/pages/account'
import Entry from '@/pages/entry'

// 这里管理所有路由
export const globalRouters = createHashRouter([
    {
        // 精确匹配 /login， 跳转到 login 页面
        path: '/login',
        element: <Login />,
    },
    {
        // 啥玩意这里为啥直接 / 啊
        // 而且改成 /entry 之后还会炸
        path: '/',
        element: <Entry />,
        children: [
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/account',
                element: <Account />,
            },
            {
                path: '/',
                element: <Navigate to="/home" />,
            },
            {
                path: '*',
                element: <Navigate to="/login" />,
            },],
    },
])
