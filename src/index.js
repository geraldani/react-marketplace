import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Bootstrap y Jquery
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import App from './components/App'
import PaginatorCountry from './views/paginator'

const Routes = () =>
  <BrowserRouter>
    <Switch>
      {/*<Route exact path='/' component={PaginatorCountry} />*/}
      <Route exact path='/' component={App} />
    </Switch>
  </BrowserRouter>

ReactDOM.render(<Routes/>, document.getElementById('root'));

