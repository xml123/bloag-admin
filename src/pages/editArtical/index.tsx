import * as React from 'react'
import './style.scss'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {Input, Button, message} from 'antd'
import axios from 'axios'
import config from '../../../config/index'

type IProps = {

}
type IState = {
    text:string
    title:string
}

let quillRef:any = null;      // Quill instance
let reactQuillRef:any = null;

class EditArtical extends React.Component<IProps,IState>{
    constructor(props:IProps) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    state = { text: '' ,title:''} as IState

    handleChange(value:any) {
        console.log('value',value)
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
        this.attachQuillRefs()
    }
    attachQuillRefs = () => {
        if (typeof reactQuillRef.getEditor !== 'function') return;
        quillRef = reactQuillRef.getEditor();
    }

    insertText = () => {
        const editor = reactQuillRef.getEditor();
        const unprivilegedEditor = reactQuillRef.makeUnprivilegedEditor(editor);
        let text = unprivilegedEditor.getHTML();
        const data = {
            type:'前端测试',
            title:this.state.title,
            content:text
        }
        axios.post(config.API_BASE_URL+'/api/push_artical',
            data,
            {headers: {'Content-Type': 'application/json'}}
        )
        .then((res) =>{
            if(res.data.code == 200){
                message.success("发布成功！")
            }
        })
        .catch(function(err){
            console.log(err)
        })
    }

    render(){
        const {title,text} = this.state
        return(
            <div>
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
                    <Button type="primary" onClick={this.insertText}>发布</Button>
                    <Button onClick={this.insertText}>保存到草稿箱</Button>
                </div>
            </div>
        )
    }
}

export default EditArtical