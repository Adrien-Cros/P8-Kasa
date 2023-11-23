import React, { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import '../../styles/logement.css'

import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'
import emptyStar from '../../assets/empty-star.png'
import fullStar from '../../assets/full-star.png'

import Collapse from '../Collapse/Collapse'
import locationData from '../../data/logements.json'

function Logement() {
  const { id } = useParams()
  const logementData = locationData.filter((logement) => logement.id === id)

  //Gestion du carrousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    } else {
      setCurrentImageIndex(logementData[0].pictures.length - 1)
    }
  }

  const nextImage = () => {
    if (currentImageIndex < logementData[0].pictures.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    } else {
      setCurrentImageIndex(0)
    }
  }

  if (logementData.length === 0) {
    return <Navigate to="*" />
  } else {
    const maxStars = 5
    const rating = logementData[0].rating
    return (
      <section className="logement">
        <div className="carousel">
          {logementData[0].pictures.length > 1 && (
            <>
              <div className="carousel-img-numbers">
                {currentImageIndex + 1}/{logementData[0].pictures.length}
              </div>
              <img
                className="carousel-arrow-left"
                src={arrowLeft}
                alt="Flèche vers la gauche"
                onClick={prevImage}
              ></img>
              <img
                className="carousel-arrow-right"
                src={arrowRight}
                alt="Flèche vers la droite"
                onClick={nextImage}
              ></img>
            </>
          )}
          <img
            className="carousel-img"
            src={logementData[0].pictures[currentImageIndex]}
            alt="Logement"
          ></img>
        </div>
        <div className="logement-container">
          <h2 className="logement-title">{logementData[0].title}</h2>
          <h3 className="logement-city">{logementData[0].location}</h3>
          <div className="logement-tags-container">
            {logementData[0].tags.map((tag) => (
              <div className="logement-tags" key={tag}>
                {tag}
              </div>
            ))}
          </div>
          <div className="host-rating">
            <div className="host-container">
              <div className="host-name">{logementData[0].host.name}</div>
              <img
                className="host-portrait"
                src={logementData[0].host.picture}
                alt={'portrait de ' + logementData[0].host.name}
              ></img>
            </div>
            <div className="rating-container">
              {Array.from({ length: maxStars }, (_, index) => (
                <img
                  key={index}
                  className="star"
                  src={index < rating ? fullStar : emptyStar}
                  alt="Etoile"
                />
              ))}
            </div>
          </div>
          <div className="dropdown-container">
            <Collapse
              dropdownTitle="Description"
              dropdownContent={logementData[0].description}
              containerClass={'dropdown-btn-logement'}
            />
            <Collapse
              dropdownTitle="Équipements"
              dropdownContent={logementData[0].equipments.map((equipment) => (
                <span key={equipment}>
                  {equipment}
                  <br />
                </span>
              ))}
              containerClass={'dropdown-btn-logement'}
            />
          </div>
        </div>
      </section>
    )
  }
}

export default Logement
