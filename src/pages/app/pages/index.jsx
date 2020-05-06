import React from 'react';
import './style';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            contentUrl: 'data'
        }
    }
    menuClick = (item) => {
        let contentUrl = `http://localhost:3000/${item.key}`;
        this.setState({contentUrl});
    }
    render() {
        const { contentUrl } = this.state;
        return (
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="system">舆情监控系统</div>
                    <Menu theme="dark" mode="inline" onClick={this.menuClick}>
                        <Menu.Item key="data">
                            <UserOutlined />
                            <span className="nav-text">数据获取</span>
                        </Menu.Item>
                        <Menu.Item key="participle">
                            <VideoCameraOutlined />
                            <span className="nav-text">中文分词</span>
                        </Menu.Item>
                        <Menu.Item key="lda">
                            <UploadOutlined />
                            <span className="nav-text">概率主题</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24 }}>
                            <iframe
                                id="contentFrame"
                                src={contentUrl}
                                frameBorder="0"
                                width="100%"
                                height="100%"
                            >
                            </iframe>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>舆情监控在线系统 ©2020 Created by duanpingbi</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;