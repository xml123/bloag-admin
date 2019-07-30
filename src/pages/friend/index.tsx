import * as React from 'react'
import './style.scss'
import HomeHeader from '../../layouts/headerBar'
import Footer from '../../layouts/footer'
import {Icon} from 'antd'
import ruanyifeng from '../../assets/images/ruanyifeng.png'
import axios from 'axios'
import config from '../../../config/index'
type IListItem = {
    name: string
    avator: string
    link:string
    abstract:string
    id:number
}

type IState = {
    code:String,
    list:IListItem[],
}

type IProps = {

}

class App extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
    }

    state = {} as IState

    componentDidMount(){
        const that = this
        axios.get(config.API_BASE_URL+'/api/get_friends')
        .then(function (response) {
            const data = response.data
            that.setState({
                code:data.code,
                list:data.data
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render(){
        const {code,list} = this.state
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
                            {code == '200' && list.map(item => {
                                return (
                                    <li key={item.id}>
                                        <a href={item.link} target="_black">
                                            <span className="friendAvator">
                                                <img src={ruanyifeng}></img>
                                            </span>
                                            <span className="friendName">{item.name}</span>
                                        </a>
                                        <div className="friendAbstract">{item.abstract}</div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default App