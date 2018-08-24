import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { Router,Route,Redirect,Link } from 'react-router-dom';
import { createBrowserHistory, createHashHistory, createMemoryHistory } from 'history';
import configureStore from './store/index'
import './less/main.less'
import App from './containers/App'
import News from "./components/News";
import User from "./components/User";

const store = configureStore()
const history = createHashHistory()
// enthusiasmLevel={33} 
// languageName='33'
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <ul>
            <li><Link to='/'>首页</Link></li>
            <li><Link to='/news'>关于</Link></li>
            <li><Link to='/user'>主题列表</Link></li>
        </ul>
        <Redirect from="/" to="/user" />
        <Route path="/" component={App} />
        <Route path="/news" component={News} />
        <Route path="/user" component={User} />
      </div>
    </Router>
    {/* <Hello /> */}
    {/* <News /> */}
  </Provider>
  ,
  document.getElementById('root')
)