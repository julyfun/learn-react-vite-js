import { Button, Card, Menu } from 'antd'
import { MoonOutlined, ThemeOutlined, SunOutlined } from '@/components/extraIcons'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setDark } from '@/store/slices/theme'
import './header.styl'

// 这个可以直接作为 <Header> 这样的 html 存在
function Header(props) {
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
    // 获取 redux 派发钩子，用于写入 store 库，调用 store 里定义的方法
    const dispatch = useDispatch()
    // 获取 store 中的主题配置
    // useSelector() 用于读取 store 库里的变量值
    // 这边 theme 到底是什么东西?
    const theme = useSelector((state) => state.theme)
    // 接收来自父组件的数据
    const { title, info } = props
    info && info() // 如果 info 存在就执行 info()
    return (
        <Card className="M-header">
            <div className="header-wrapper">
                <div className="logo-con">Header:{title}</div>
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
                    {theme.dark ? (
                        <Button
                            icon={<SunOutlined />}
                            shape="circle"
                            onClick={() => {
                                dispatch(setDark(false))
                            }}
                        ></Button>
                    ) : (
                        <Button
                            icon={<MoonOutlined />}
                            shape="circle"
                            onClick={() => {
                                dispatch(setDark(true))
                            }}
                        ></Button>
                    )}
                    <Button icon={<ThemeOutlined />} shape="circle"></Button>
                </div>
            </div>
        </Card>
    )
}

export default Header
