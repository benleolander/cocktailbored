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

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange({ target: { name, value } }) {
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    const ingredientsArray = this.state.data.ingredients.split(',')

    axios.post('/api/cocktails', {
      name: this.state.data.name,
      image: this.state.data.image,
      ingredients: ingredientsArray,
      origin: this.state.data.origin
    })
      .then(() => this.props.history.push('/cocktails'))
      .catch(err => console.log(err))


    console.log(this.state.data)
    console.log(ingredientsArray)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>

        <div className='field'>
          <label className='label'>Name</label>
          <div className='control'>
            <input
              className='input'
              placeholder='Name'
              name='name'
              onChange={this.handleChange}
              value= {this.state.data.name}
            />
          </div>
        </div>

        <div className='field'>
          <label className='label'>Image</label>
          <div className='control'>
            <input
              className='input'
              placeholder='Enter a link to an image'
              name='image'
              onChange={this.handleChange}
              value= {this.state.data.image}
            />
          </div>
        </div>

        <div className='field'>
          <label className='label'>Ingredients</label>
          <div className='control'>
            <input
              className='input'
              placeholder='Enter the ingredients of your cocktail, separated by a comma'
              name='ingredients'
              onChange={this.handleChange}
              value= {this.state.data.ingredients}
            />
          </div>
        </div>

        <div className='field'>
          <label className='label'>Origin</label>
          <div className='control'>
            <input
              className='input'
              placeholder='Origin'
              name='origin'
              onChange={this.handleChange}
              value= {this.state.data.origin}
            />
          </div>
        </div>

        <button className='button is-primary'>Submit</button>

      </form>
    )
  }
}

export default CocktailsNew
