import * as React from 'react'
import * as style from './style.scss'
import HomeHeader from '../../layouts/headerBar'
import Footer from '../../layouts/footer'
import { Button } from 'antd'
import "antd/dist/antd.css"

interface IProps {
    style: React.CSSProperties
}
class App extends React.Component<IProps> {
    render() {
      return (
        <div className={style.wrapper}>
            <HomeHeader />
            <h1>home body</h1>
            <Button type="primary">Button</Button>
            <Footer />
        </div>
      )
    }
  }
  
  export default App