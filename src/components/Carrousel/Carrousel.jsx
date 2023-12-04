import React, { useState } from 'react'

import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'

function Carrousel({ pictures }) {
  //Gestion du carrousel
  const pictureNb = pictures.length
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    } else {
      setCurrentImageIndex(pictureNb - 1)
    }
  }

  const nextImage = () => {
    if (currentImageIndex < pictureNb - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    } else {
      setCurrentImageIndex(0)
    }
  }

  return (
    <div className="carousel">
      {pictureNb > 1 && (
        <>
          <div className="carousel-img-numbers">
            {currentImageIndex + 1}/{pictureNb}
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
        src={pictures[currentImageIndex]}
        alt="Logement"
      ></img>
    </div>
  )
}

export default Carrousel
