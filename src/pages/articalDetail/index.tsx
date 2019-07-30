import * as React from 'react'
import './style.scss'
import HomeHeader from '../../layouts/headerBar'
import Footer from '../../layouts/footer'
import Body from '../../layouts/body'

class App extends React.Component<any>{
    render(){
        return(
            <div>
                <HomeHeader />
                <Body />
                <Footer />
            </div>
        )
    }
}

export default App