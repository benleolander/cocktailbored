import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CocktailsIndex from './components/cocktails/CocktailsIndex'
import Home from './components/Home'

import 'bulma'

class App extends React.Component{
  constructor(){
    super()

    this.state = {}
  }

  // componentDidMount() {
  //   axios.get('/api/cocktails')
  //     .then(res => {
  //       console.log('Incoming State Data:', res.data)
  //       this.setState({ cocktails: res.data })
  //     })
  // }

  render(){
    return(
      <BrowserRouter>
        <main>
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
