import React, { Component } from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import Task from './Task.jsx';
import { Router, Route, Link, Switch } from 'react-router-dom'
import history from 'history';
const browserHistory = history.createBrowserHistory();

//components 
import UpperNavbar from './components/UpperNavbar'

//views
import Home from './views/Home'
import Todo from './views/Todo'

//api
import { withTracker } from 'meteor/react-meteor-data'
import { Tasks } from '../api/tasks'

const App = (props) => {


  return (
    <Router history={browserHistory}>
      <div>
        <UpperNavbar />
        <div className='container'>


          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/todos" component={Todo} />
          </Switch>
        </div>
      </div>
   </Router>
  );
}


export default withTracker(() => {
  return {
    tasks: Tasks.find({}).fetch()
  }
})(App)

// export default App