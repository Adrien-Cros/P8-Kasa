import React, { useState } from 'react'

import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'

function Carrousel({ logementData }) {
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

  return (
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
  )
}

export default Carrousel
