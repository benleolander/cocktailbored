import React from 'react'
import axios from 'axios'

class CocktailsNew extends React.Component {
  constructor() {
    super()

    this.state= {
      data: {
        name: '',
        image: '',
        ingredients: [],
        origin: ''
      }
    }
  }

  render() {
    return(
      <h1>Cocktail form here</h1>
    )
  }
}

export default CocktailsNew
