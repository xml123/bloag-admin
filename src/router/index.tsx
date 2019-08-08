import * as React from 'react'
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom'
//import LiveRoute from 'react-live-route'
import HomePage from '../../src/pages/home'
import './style.scss'
import ArticalList from '../../src/pages/articalList'
import EditArtical from '../../src/pages/editArtical'
import MyLayout from '../layouts/myLayout'

const AppRoutes = () => (
    <Router>
      <HashRouter>
        <div className="body_Box">
            {/* <Route exact path="/" component={HomePage} /> */}
            <Route path="/" component={LayoutRouter} />
              {/* <Route path="/articalList" component={ArticalList} />
            </Route> */}
        </div>
        </HashRouter>
    </Router>
)

const LayoutRouter = (props:any) => {
  return (
    <MyLayout>
      <Router>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomePage as any} />
          <Route path="/articalList/:type" component={ArticalList as any} />
          <Route path="/edit/:num" component={EditArtical as any} />
        </Switch>
        </HashRouter>
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
