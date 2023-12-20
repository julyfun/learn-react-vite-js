import { Modal } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { CheckCircleFilled } from '@ant-design/icons'
import { setColorPrimary } from '@/store/slices/theme'
import { globalConfig } from '@/globalConfig'
import './themeModal.styl'

function ThemeModal({ onClose }) {
    const dispatch = useDispatch()
    // 获取 store 中的主题配置
    const theme = useSelector((state) => state.theme)
    return (
        <Modal
            className="M-themeModal"
            open={true}
            title="主题色"
            onCancel={() => { onClose() }}
            maskClosable={false}
            footer={null}
        >
            <div className="colors-con">
                {
                    globalConfig.customColorPrimaries &&
                    globalConfig.customColorPrimaries.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="theme-color"
                                style={{ backgroundColor: item }}
                                onClick={() => {
                                    dispatch(setColorPrimary(item))
                                }}
                            >
                                {
                                    // 主题色显示打钩图标
                                    theme.colorPrimary == item && (
                                        <CheckCircleFilled
                                            style={{
                                                fontSize: 28,
                                                color: '#fff',
                                            }}
                                        />
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>
        </Modal>
    )

}

export default ThemeModal
