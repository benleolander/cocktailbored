import React from 'react'
import axios from 'axios'

class CocktailShow extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    axios.get(`/api/cocktails/${this.props.match.params.id}`)
      .then(res => this.setState({ cocktail: res.data }))
  }

  render() {
    if(!this.state.cocktail) return null
    return(
      <h1>Cocktail goes here</h1>
    )
  }
}

export default CocktailShow
