import React, { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'

import '../../styles/logement.css'
import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'
import arrowUp from '../../assets/arrow_back_ios-24px 2.png'
import locationData from '../../data/logements.json'

function Logement() {
  const { id } = useParams()
  const logementData = locationData.filter((logement) => logement.id === id)

  //gestion des dropdown
  const [isDescriptionOpen, setDescriptionOpen] = useState(false)
  const [isEquipementsOpen, setEquipementsOpen] = useState(false)

  const toggleDescription = () => {
    setDescriptionOpen(!isDescriptionOpen)
    const arrow = document.querySelector('.arrow-desc')
    if (isDescriptionOpen) {
      arrow.classList.remove('arrow-active')
      arrow.classList.add('arrow-deactive')
    } else {
      arrow.classList.remove('arrow-deactive')
      arrow.classList.add('arrow-active')
    }
  }

  const toggleEquipements = () => {
    const arrow = document.querySelector('.arrow-equip')
    if (isEquipementsOpen) {
      arrow.classList.remove('arrow-active')
      arrow.classList.add('arrow-deactive')
    } else {
      arrow.classList.remove('arrow-deactive')
      arrow.classList.add('arrow-active')
    }
    setEquipementsOpen(!isEquipementsOpen)
  }

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
    return (
      <section className="logement">
        <div className="carousel">
          <div className="carousel-img-numbers">
            {currentImageIndex + 1}/{logementData[0].pictures.length}
          </div>
          <img
            className="carousel-img"
            src={logementData[0].pictures[currentImageIndex]}
            alt="Logement"
          ></img>
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
            <div className="rating">{logementData[0].rating}/5</div>
          </div>
          <div className="dropdown-container">
            <div className="dropdown-item">
              <button className="dropdown" onClick={toggleDescription}>
                Description
                <img className="arrow arrow-desc" src={arrowUp} alt="Flèche" />
              </button>
              {isDescriptionOpen && (
                <div className="dropdown-desc">
                  {logementData[0].description}
                </div>
              )}
            </div>
            <div className="dropdown-item">
              <button className="dropdown" onClick={toggleEquipements}>
                Équipements
                <img className="arrow arrow-equip" src={arrowUp} alt="Flèche" />
              </button>
              {isEquipementsOpen && (
                <div className="dropdown-equip">
                  <ul>
                    {logementData[0].equipments.map((equipment) => (
                      <li key={equipment}>
                        {equipment}
                        <br></br>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Logement
