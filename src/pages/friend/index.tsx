import * as React from 'react'
import './style.scss'
import HomeHeader from '../../layouts/headerBar'
import Footer from '../../layouts/footer'
import {Icon} from 'antd'
import ruanyifeng from '../../assets/images/ruanyifeng.png'

class App extends React.Component<any>{
    render(){
        return(
            <div className="friend">
                <HomeHeader />
                <div className="friendBox">
                    <div className="friendHead">
                        <div className="friendHeadLeft">
                            <Icon type="team" />
                            <span>朋友们</span>  
                            <span>friends</span>
                        </div>
                        <div className="friendHeadRight">
                            <span>友链范围：设计或技术博客，个人初创非赢利性项目站点 联系</span>
                            <span>xumingliang@fang88.me</span>
                        </div>
                    </div>
                    <div className="friendPanel">
                        <ul>
                            <li>
                                <a href="http://www.ruanyifeng.com/blog/" target="_black">
                                    <span className="friendAvator">
                                        <img src={ruanyifeng}></img>
                                    </span>
                                    <span className="friendName">阮一峰</span>
                                </a>
                                <div className="friendAbstract">知名的技术博客主</div>
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default App