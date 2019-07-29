import * as React from 'react'
import './style.scss'
import HomeHeader from '../../layouts/headerBar'

class App extends React.Component<any>{
    render(){
        return(
            <div>
                <HomeHeader />
                <div className="message">留言功能正在开发中，敬请期待......</div>
            </div>
        )
    }
}

export default App