import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import CocktailsIndex from './components/cocktails/CocktailsIndex'
import Home from './components/Home'

import 'bulma'

class App extends React.Component{
  constructor(){
    super()

    this.state = {}
  }

  render(){
    return(
      <BrowserRouter>
        <main>
          <Link to='/cocktails'>
            <h2>Show Cocktails</h2>
          </Link>
          <Switch>
            <Route path="/cocktails" component={CocktailsIndex} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
