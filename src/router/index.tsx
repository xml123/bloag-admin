import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LiveRoute from 'react-live-route'
import HomePage from '../../src/pages/home'

const AppRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route path={`/`} exact={true} component={HomePage} />
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
