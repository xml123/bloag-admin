import * as React from 'react'
import './style.scss'
import "antd/dist/antd.css"
import { Menu, Dropdown, Icon } from 'antd'
interface IProps {
    style: React.CSSProperties
}

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
);


class App extends React.Component<any> {
    render() {
      return (
        <div className='header'>
          <div className="headerLeft">bright</div>
          <div className="headerRight">
            <a href="/home">首页</a>
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                专栏一 <Icon type="down" />
                </a>
            </Dropdown>
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                专栏二 <Icon type="down" />
                </a>
            </Dropdown>
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                专栏三 <Icon type="down" />
                </a>
            </Dropdown>
            <a href="/friend">友情链接</a>
            <a href="/home">留言</a>
            <a href="https://github.com/xml123/bloag" target="_blank"><Icon type="github" style={{ fontSize: '24px'}}  /></a>
          </div>
        </div>
      )
    }
}
  
export default App