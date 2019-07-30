import * as React from 'react'
import './style.scss'
import "antd/dist/antd.css"
import { Menu, Dropdown, Icon } from 'antd'
import {Link} from 'react-router-dom'

type IListItem = {
  id:number
  title:String
  type:String
}

type IProps = {
  jsList:IListItem[]
  afterList:IListItem[]
  otherList:IListItem[]
}

const menu = (
    <Menu>
      <Menu.Item>
        <a rel="noopener noreferrer" href="/artical">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" href="/artical">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" href="/artical">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
);


class App extends React.Component<any> {
    constructor(props: IProps) {
      super(props);
    }
    render() {
      const {jsList} = this.props
      console.log('list',jsList)
      return (
        <div className='header'>
          <div className="headerLeft">bright</div>
          <div className="headerRight">
            <Link to="/home">首页</Link>
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                前端技术 <Icon type="down" />
                </a>
            </Dropdown>
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                后端技术 <Icon type="down" />
                </a>
            </Dropdown>
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                杂谈 <Icon type="down" />
                </a>
            </Dropdown>
            <Link to="/friend">友情链接</Link>
            <Link to="/message">留言</Link>
            <a href="https://github.com/xml123/bloag" target="_blank"><Icon type="github" style={{ fontSize: '24px'}}  /></a>
          </div>
        </div>
      )
    }
}
  
export default App