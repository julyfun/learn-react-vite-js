import { Outlet } from "react-router-dom";
import Header from '@/components/header'
import './entry.styl'

function Entry() {
    // 为二级路由页面挖好的坑
    return (
        <div className="M-entry">
            <Header />
            <div className="main-container">
                <Outlet />
            </div>
        </div>
    )
}

export default Entry
