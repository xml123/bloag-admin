import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import LiveRoute from 'react-live-route'
import HomePage from '../../src/pages/home'
import Friend from '../../src/pages/friend'
import Message from '../../src/pages/message'

const AppRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route path={`/`} exact={true} component={HomePage} />
            <Route path={`/home`} exact={true} component={HomePage} />
            <Route path={`/friend`} exact={true} component={Friend} />
            <Route path={`/message`} exact={true} component={Message} />
        </Switch>
    </BrowserRouter>
)

class Slider extends React.Component {
    state = { pos: 0, pageIndex: 0 }
  
    render() {
      return (
        <React.Fragment>
            <AppRoutes />
        </React.Fragment>
      )
    }
  }
  
  export default Slider
