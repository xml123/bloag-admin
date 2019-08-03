import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import LiveRoute from 'react-live-route'
import HomePage from '../../src/pages/home'
import './style.scss'
import ArticalList from '../../src/pages/articalList'
import EditArtical from '../../src/pages/editArtical'
import MyLayout from '../../src/layouts/myLayout'

const AppRoutes = () => (
    <Router>
        <div className="body_Box">
            {/* <Route exact path="/" component={HomePage} /> */}
            <Route path="/" component={LayoutRouter} />
              {/* <Route path="/articalList" component={ArticalList} />
            </Route> */}
        </div>
    </Router>
)

const LayoutRouter = (props:any) => {
  return (
    <MyLayout>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/articalList" component={ArticalList} />
          <Route path="/edit" component={EditArtical} />
        </Switch>
      </Router>
    </MyLayout>
  )
}

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
