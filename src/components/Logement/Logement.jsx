import { useParams, Navigate } from 'react-router-dom'
import '../../styles/logement.css'

import emptyStar from '../../assets/empty-star.png'
import fullStar from '../../assets/full-star.png'

import Collapse from '../Collapse/Collapse'
import Carrousel from '../Carrousel/Carrousel'
import locationData from '../../data/logements.json'

function Logement() {
  const { id } = useParams()
  const logementData = locationData.filter((logement) => logement.id === id)

  if (logementData == null || logementData.length === 0) {
    return <Navigate to="*" />
  } else {
    const maxStars = 5
    const rating = logementData[0].rating
    return (
      <section className="logement">
        <Carrousel logementData={logementData} />

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
