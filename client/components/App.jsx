import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
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
          <h1>MulchMe&trade;</h1>
          <h3>'It almost tastes like food!'</h3>
          <div className='container'>
              <Route exact path='/' component={Home} />
              <Route path='/ingredients' component={Ingredients} />
              <Route path='/recipe' component={Recipe} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App

