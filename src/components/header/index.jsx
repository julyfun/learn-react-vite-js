import { Button, Card, Menu } from 'antd'
import { MoonOutlined, ThemeOutlined } from '@/components/extraIcons'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import './header.styl'

function Header() {
    // 创建路由钩子
    const location = useLocation()
    const navigate = useNavigate()
    const menuItems = [
        {
            label: 'Home',
            key: '/home',
            icon: <HomeOutlined />,
            onClick: () => { navigate('/home') },
        },
        {
            label: 'Account',
            key: '/account',
            icon: <UserOutlined />,
            onClick: () => { navigate('/account') },
        }
    ]
    return (
        <Card className="M-header">
            <div className="header-wrapper">
                <div className="logo-con">Header</div>
                <div className="menu-con">
                    <Menu
                        mode="horizontal"
                        // 这个是获取当前页面的 pathname 么
                        // 哦对！selectedKeys 就是当前选中的 key 嘛
                        selectedKeys={[location.pathname]}
                        items={menuItems}
                    />
                </div>
                <div className="opt-con">
                    <Button icon={<MoonOutlined />} shape="circle"></Button>
                    <Button icon={<ThemeOutlined />} shape="circle"></Button>
                </div>
            </div>
        </Card>
    )
}

export default Header
