import React from 'react'
import { Link } from 'react-router-dom'

const CocktailCard = ({ _id, name, image, origin }) => {
  return (
    <div className="card">
      <Link to={`/cocktails/${_id}`}>
        <div className="card-header">
          <h3 className="card-header-title">{name}</h3>
        </div>

        <div className="card-image">
          <img className="image" src={image} alt={name} />
        </div>

        <div className="card-content">
          <div className="content">
            <p><strong>Origin:</strong> {origin}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CocktailCard
