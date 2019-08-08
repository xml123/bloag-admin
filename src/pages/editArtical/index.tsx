import * as React from 'react'
import './style.scss'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {Input, Button, message, Select} from 'antd'
import axios from 'axios'
import config from '../../../config/index'
import {withRouter} from 'react-router-dom'

const { Option } = Select

type IItem = {
    id:number,
    title:string
}

type IProps = {
    history:any,
    match:any
}
type IState = {
    text:string,
    title:string,
    typeList:IItem[],
    code:string,
    selectName:string,
    articalObj:Object,
    type:string,
}

let quillRef:any = null;      // Quill instance
let reactQuillRef:any = null;

class EditArtical extends React.Component<IProps,IState>{
    constructor(props:IProps) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    state = { text: '' ,title:'',selectName:'请选择'} as IState

    handleChange(value:any){
        this.setState({ 
            text: value 
        })
    }

    modules = {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{ 'header': 1 }, { 'header': 2 }],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'script': 'sub'}, { 'script': 'super' }],
          [{ 'indent': '-1'}, { 'indent': '+1' }],
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'align': [] }],
          ['clean']
        ],
      }
    
    componentDidMount() {
        const num = parseInt(this.props.match.params.num)
        if(num !== -1){
            this.getArtical(num)
        }
        this.attachQuillRefs()
        const type = window.localStorage.type
        this.getTypeList(type)
    }

    //获取文章详情
    getArtical(num:number){
        axios.post(config.API_BASE_URL+'/api/get_artical_id',{id:num},
        {headers: {'Content-Type': 'application/json'}})
        .then((res)=>{
            if(res.data.code == '200'){
                const articalObj = res.data.data
                this.setState({
                    title:articalObj.title,
                    selectName:articalObj.type,
                    text:articalObj.content
                })
            }
        })
        .catch(function(err){
            console.log(err)
        })
    }

    //获取文章类型
    getTypeList(type:string):void{
        axios.post(config.API_BASE_URL+'/api/get_head_list',{type:type},
        {headers: {'Content-Type': 'application/json'}})
        .then((res)=>{
            this.setState({
                typeList:res.data.data,
                code:res.data.code,
                type:type
            })
        })
        .catch(function(err){
            console.log(err)
        })
    }
    attachQuillRefs = () => {
        if (typeof reactQuillRef.getEditor !== 'function') return;
        quillRef = reactQuillRef.getEditor();
    }

    // 保存文章
    insertText(status:boolean){
        const {selectName,title} = this.state
        const num = parseInt(this.props.match.params.num)
        const that = this
        if(!selectName){
            return message.warning('请选择文章类型',2);
        }
        if(!title){
            return message.warning('请输入文章标题',2);
        }
        const editor = reactQuillRef.getEditor();
        const unprivilegedEditor = reactQuillRef.makeUnprivilegedEditor(editor);
        let text = unprivilegedEditor.getHTML();
        if(!text){
            return message.warning('请输入文章内容',2);
        }
        let data = num === -1 ? {
            type:selectName,
            title:title,
            content:text,
            status:status,
            fun:'add'
        } : {
            type:selectName,
            title:title,
            content:text,
            status:status,
            fun:'edit',
            id:num
        }
        axios.post(config.API_BASE_URL+'/api/push_artical',
            data,
            {headers: {'Content-Type': 'application/json'}}
        )
        .then((res) =>{
            if(res.data.code == 200){
                let info = status ? "发布成功" : "保存成功"
                message.success(info,2)
                setTimeout(function(){
                    that.props.history.goBack()
                },1200)
            }
        })
        .catch(function(err){
            console.log(err)
        })
    }

    typeChange(value:any):void{
        this.setState({
            selectName:value
        })
    }      

    render(){
        const {title,text,code,typeList,selectName,type} = this.state
        return(
            <div className="editBox">
                <Input placeholder="请输入标题" value={title} onChange={(e)=>{
                    this.setState({
                        title:e.target.value
                    })
                }} />
                <ReactQuill 
                ref={(el) => {reactQuillRef = el }}
                value={text}
                modules={this.modules}
                onChange={this.handleChange} />
                <div className="buttonBox">
                    {type !== '草稿箱' && <div className="selectBox">
                        文章类型：
                        <Select value={selectName} style={{ width: 120 }} onChange={(value:any) => this.typeChange(value)}>
                            {code == '200' && typeList .map(item => {
                                return(
                                    <Option key={item.id} value={item.title}>{item.title}</Option>
                                )
                            })}
                        </Select>
                    </div>}
                    <Button type="primary" onClick={() => this.insertText(true)}>发布</Button>
                    <Button onClick={() => this.insertText(false)}>保存到草稿箱</Button>
                </div>
            </div>
        )
    }
}

export default withRouter(EditArtical as any)