import React from 'react'
import { Link } from 'react-router-dom'
import locationData from '../../data/logements.json'
import '../../styles/gallery.css'

function Gallery() {
  return (
    <section className="card-container">
      {locationData.map((location) => (
        <Link to={`/fiche-logement/${location.id}`} key={location.id}>
          <div className="card">
            <div className="card--title">{location.title}</div>
            <img
              className="card--img"
              src={location.cover}
              alt={location.title}
            />
          </div>
        </Link>
      ))}
    </section>
  )
}

export default Gallery
