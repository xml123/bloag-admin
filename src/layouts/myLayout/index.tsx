import * as React from 'react'
import "antd/dist/antd.css"
import { Layout, Menu, Icon, PageHeader} from 'antd'
import './style.scss'

const { Header, Sider, Content } = Layout
const {SubMenu} = Menu

interface IProps {
    style: React.CSSProperties
}

type IState = {
    collapsed:boolean
}

const routes = [
    {
      path: 'index',
      breadcrumbName: '一级目录',
    },
    {
      path: 'first',
      breadcrumbName: '二级目录',
    },
    {
      path: 'second',
      breadcrumbName: '三级目录',
    },
  ];

class App extends React.Component<any,IState> {
    constructor(props: IProps) {
        super(props);
    }

    state = {
        collapsed: false
    }

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    }

    render() {
      return (
        <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="home" />
              <span>首页</span>
            </Menu.Item>
            <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="paper-clip" />
                <span>文章管理</span>
              </span>
            }
          >
            <Menu.Item key="6">前端文章</Menu.Item>
            <Menu.Item key="7">后端文章</Menu.Item>
            <Menu.Item key="8">杂谈</Menu.Item>
            <Menu.Item key="9">草稿箱</Menu.Item>
          </SubMenu>
            <Menu.Item key="3">
              <Icon type="safety" />
              <span>权限管理</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="setting" />
              <span>设置</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="fire" />
              <span>敬请期待...</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <PageHeader title="" breadcrumb={{ routes }} />
          <Content className="contentBox">
              {this.props.children}
          </Content>
        </Layout>
      </Layout>
      )
    }
  }
  
  export default App