import React from 'react'
import axios from 'axios'

import CocktailCard from './CocktailCard'

class CocktailsIndex extends React.Component {
  constructor() {
    super()

    this.state = {}

  }

  componentDidMount() {
    axios.get('/api/cocktails')
      .then(res => this.setState({ cocktails: res.data }))
  }

  render() {
    if(!this.state.cocktails) return null
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.cocktails.map(cocktail =>
              <div className="column is-one-quarter" key={cocktail._id}>
                <CocktailCard {...cocktail} />
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default CocktailsIndex
