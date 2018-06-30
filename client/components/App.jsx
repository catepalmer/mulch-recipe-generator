import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Login from './Login'
import Ingredients from './Ingredients'
import Recipe from './Recipe'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <div className='app'>
          <h1>PLAGUE'S AMAZING MULCH RECIPE GENERATOR!!!!!</h1>
          <div className='container'>
            <Route path='/' component={Nav} />
            <div className='content'>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/ingredients' component={Ingredients} />
              <Route path='/recipe' component={Recipe} />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App

