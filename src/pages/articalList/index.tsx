import * as React from 'react'
import './style.scss'
import { Button } from 'antd'
import axios from 'axios'
import config from '../../../config/index'
import {withRouter,NavLink} from 'react-router-dom'

type IState = {
    list:IListItem[],
    code:string,
    type:string
}

type IListItem = {
    id:number
    title:string
    time:string
}
type IProps = {
    history:any,
    match:any,
    location:any
}

class ArticalList extends React.Component<IProps,IState>{
    state = {} as IState
    constructor(props:IProps) {
        super(props)
    }
    getList(){
        const {type} = this.state
        let url = type === '草稿箱' ? '/api/get_draft_artical' : '/api/get_artical_list'
        axios.post(config.API_BASE_URL+url,
            {type:type},
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
        window.localStorage.type = this.props.match.params.type
        this.setState({
            type:this.props.match.params.type
        },() => this.getList())
    }

    componentWillReceiveProps(nextProps:any) {
        if (nextProps.location.pathname != this.props.location.pathname) {
            window.localStorage.type = nextProps.match.params.type
            this.setState({
                type:nextProps.match.params.type
            },() => this.getList())
        } 
     }   
    delete(e:any){
        const id = e.target.getAttribute('data-id')
        axios.post(config.API_BASE_URL+'/api/delete_artical',{id:id},{headers: {'Content-Type': 'application/json'}})
        .then((res) => {
            if(res.data.code == '200'){
                this.getList()
            }
        })
        .catch(function(err){
            console.log(err)
        })
    }
    render(){
        const {list,code,type} = this.state
        return(
            <div className="articalList">
                <div className="addBtn">
                   {type !== '草稿箱' && <NavLink to="/edit/-1"><Button type="primary" icon="plus">新增</Button></NavLink>} 
                </div>
                <ul className="articalUl">
                    {code == '200' && list.map(item => {
                        return (
                            <li key={item.id}>
                                <div className="articalTitle">{item.title}<span className="articalTime">{item.time}</span></div> 
                                <div className="otherBox">
                                    <NavLink to={"/edit/"+item.id}><Button type="primary" icon="edit">编辑</Button></NavLink>
                                    <Button type="danger" data-id={item.id} icon="delete" onClick={e => this.delete(e)}>删除</Button>
                                </div>
                            </li>
                        )})}
                </ul>
            </div>
        )
    }
}

export default withRouter(ArticalList as any)