import * as React from 'react'
import './style.scss'

export default class App extends React.Component<any>{
    render(){
        return(
            <div className="bodyBox">
                <div className="bodyLeft">
                    <ul className="leftOneList">
                        <li>
                            <p className="leftTitle">JavaScript</p>
                            <ul className="leftTwoList">
                                <li><a href="http://www.baidu.com">JavaScript基础知识上</a></li>
                                <li><a href="http://www.baidu.com">JavaScript基础知识中</a></li>
                                <li><a href="http://www.baidu.com">JavaScript基础知识下</a></li>
                            </ul>
                        </li>
                        <li>
                            <p className="leftTitle">JavaScript</p>
                            <ul className="leftTwoList">
                                <li><a href="http://www.baidu.com">JavaScript基础知识上</a></li>
                                <li><a href="http://www.baidu.com">JavaScript基础知识中</a></li>
                                <li><a href="http://www.baidu.com">JavaScript基础知识下</a></li>
                            </ul>
                        </li>
                        <li>
                            <p className="leftTitle">ES6</p>
                        </li>
                    </ul>
                </div>
                <div className="bodyRight">
                    
                </div>
            </div>
        )
    }
}