import * as React from 'react'
import './style.scss'

interface IProps {
    style: React.CSSProperties
}

type IState = {
    
}

class App extends React.Component<any,IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
      return (
        <div>这是首页</div>
      )
    }
  }
  
  export default App