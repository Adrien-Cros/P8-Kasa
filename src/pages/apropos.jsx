import React, { useState } from 'react'
import '../styles/apropos.css'
import bannerImg from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'
import arrow from '../assets/arrow_back_ios-24px 2.png'

function Apropos() {
  const dropdowns = [
    {
      state: useState(false),
      content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      state: useState(false),
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      state: useState(false),
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      state: useState(false),
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ]

  const toggleDropdown = (index) => {
    const [isOpen, setDropdown] = dropdowns[index].state
    setDropdown(!isOpen)
  }

  const toggleArrow = (index) => {
    toggleDropdown(index)
    const arrowIcon = document.querySelector(`.arrow-${index}`)

    if (dropdowns[index].state[0] === true) {
      arrowIcon.classList.remove('arrow-active')
      arrowIcon.classList.add('arrow-deactive')
    } else {
      arrowIcon.classList.remove('arrow-deactive')
      arrowIcon.classList.add('arrow-active')
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
        {dropdowns.map((item, index) => (
          <div className="dropdown-btn-item" key={index}>
            <button className="btn-dropdown" onClick={() => toggleArrow(index)}>
              {['Fiabilité', 'Respect', 'Service', 'Sécurité'][index]}
              <img
                className={`arrow arrow-${index}`}
                src={arrow}
                alt="Flèche"
              />
            </button>
            {item.state[0] && (
              <div
                className={`dropdown-content ${
                  item.state[0] ? 'content-fade-in' : 'content-fade-out'
                }`}
              >
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Apropos
