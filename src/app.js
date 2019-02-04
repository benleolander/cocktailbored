import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import CocktailShow from './components/cocktails/CocktailShow'
import CocktailsNew from './components/cocktails/CocktailsNew'
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
          <Link to='/'>
            <h2>Home</h2>
          </Link>
          <Link to='/cocktails'>
            <h2>Show Cocktails</h2>
          </Link>
          <Link to='/cocktails/new'>
            <h2>Add a Cocktail</h2>
          </Link>
          <Switch>
            <Route path="/cocktails/new" component={CocktailsNew} />
            <Route path="/cocktails/:id" component={CocktailShow} />
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
