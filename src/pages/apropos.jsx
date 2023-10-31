import React, { useState } from 'react'
import '../styles/apropos.css'
import bannerImg from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'
import arrow from '../assets/arrow_back_ios-24px 2.png'

function Apropos() {
  const [dropdown1, setDropdown1] = useState(false)
  const [dropdown2, setDropdown2] = useState(false)
  const [dropdown3, setDropdown3] = useState(false)
  const [dropdown4, setDropdown4] = useState(false)

  const toggleDropdown1 = () => {
    setDropdown1(!dropdown1)
  }

  const toggleDropdown2 = () => {
    setDropdown2(!dropdown2)
  }

  const toggleDropdown3 = () => {
    setDropdown3(!dropdown3)
  }

  const toggleDropdown4 = () => {
    setDropdown4(!dropdown4)
  }

  const toggleArrow = (dropdownFunction) => {
    dropdownFunction()
    const arrowIcon = document.querySelector('.arrow')
    if (dropdown1 === true) {
      arrowIcon.classList.remove('arrow-active')
      arrowIcon.classList.add('arrow-deactive')
    }
    if (dropdown1 === false) {
      arrowIcon.classList.add('arrow-active')
      arrowIcon.classList.remove('arrow-deactive')
    }
  }

  return (
    <section>
      <div className="img-container">
        <img
          className="img-banner"
          src={bannerImg}
          alt="Paysage avec des montagnes"
        />
      </div>
      <div className="dropdown-btn">
        <div className="dropdown-btn-item">
          <button className="btn-dropdown">
            Fiabilité
            <img
              className="arrow"
              src={arrow}
              alt="Flèche"
              onClick={() => toggleArrow(toggleDropdown1)}
            />
          </button>
          {dropdown1 && (
            <div className="dropdown-content">
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </div>
          )}
        </div>
        <div className="dropdown-btn-item">
          <button className="btn-dropdown">
            Respect
            <img
              className="arrow"
              src={arrow}
              alt="Flèche"
              onClick={toggleDropdown2}
            />
          </button>
          {dropdown2 && (
            <div className="dropdown-content">
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </div>
          )}
        </div>
        <div className="dropdown-btn-item">
          <button className="btn-dropdown">
            Service
            <img
              className="arrow"
              src={arrow}
              alt="Flèche"
              onClick={toggleDropdown3}
            />
          </button>
          {dropdown3 && (
            <div className="dropdown-content">
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </div>
          )}
        </div>
        <div className="dropdown-btn-item">
          <button className="btn-dropdown">
            Sécurité
            <img
              className="arrow"
              src={arrow}
              alt="Flèche"
              onClick={toggleDropdown4}
            />
          </button>
          {dropdown4 && (
            <div className="dropdown-content">
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Apropos
