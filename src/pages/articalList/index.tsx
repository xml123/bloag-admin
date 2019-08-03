import * as React from 'react'
import './style.scss'
import { Button } from 'antd'
import axios from 'axios'
import config from '../../../config/index'

type IState = {
    list:IListItem[]
    code:string
}

type IListItem = {
    id:number
    title:string
    time:string
}

class ArticalList extends React.Component<any,IState>{
    state = {} as IState
    getList(){
        axios.post(config.API_BASE_URL+'/api/get_artical_list',
            {type:'前端技术'},
            {headers: {'Content-Type': 'application/json'}}
        )
        .then((res) =>{
            if(res.data.code == '200'){
                this.setState({
                    list:res.data.data,
                    code:res.data.code
                })
            }
        })
        .catch(function(err){
            console.log(err)
        })
    }
    componentDidMount() {
        this.getList()
    }
    render(){
        const {list,code} = this.state
        return(
            <div className="articalList">
                <div className="addBtn">
                    <Button type="primary" icon="plus">新增</Button>
                </div>
                <ul className="articalUl">
                    {code == '200' && list.map(item => {
                        return (
                            <li key={item.id}>
                                <div className="articalTitle">{item.title}<span className="articalTime">{item.time}</span></div> 
                                <div className="otherBox">
                                    <Button type="primary" icon="edit">编辑</Button>
                                    <Button type="danger" icon="delete">删除</Button>
                                </div>
                            </li>
                        )})}
                </ul>
            </div>
        )
    }
}

export default ArticalList