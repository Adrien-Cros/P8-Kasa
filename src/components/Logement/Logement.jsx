import '../../styles/logement.css'
import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'
import arrowUp from '../../assets/arrow_back_ios-24px 2.png'
import backgroundImg from '../../assets/Background.png'

function Logement() {
  return (
    <section className="logement">
      <div className="carousel">
        <img
          className="carousel-img"
          src={backgroundImg}
          alt="background img"
        ></img>
        <img
          className="carousel-arrow-left"
          src={arrowLeft}
          alt="Flèche vers la gauche"
        ></img>
        <img
          className="carousel-arrow-right"
          src={arrowRight}
          alt="Flèche vers la droite"
        ></img>
      </div>
      <div className="logement-container">
        <h2 className="logement-title">Cozy Loft On the canal saint-martin</h2>
        <h3 className="logement-city">Paris, Ile de france</h3>
        <div className="logement-tags-container">
          <div className="logement-tags">Cozy</div>
          <div className="logement-tags">Canal</div>
          <div className="logement-tags">Paris 10</div>
        </div>
        <div className="host-rating">
          <div className="host-container">
            <div className="host-name">Alexandre Dumas</div>
            <img className="host-portrait" src="#" alt="portrait du host"></img>
          </div>
          <div className="rating">Etoile de rating ici</div>
        </div>
        <div className="dropdown-container">
          <button className="dropdown">
            Description
            <img className="arrow-up" src={arrowUp} alt="Flèche" />
          </button>
          <button className="dropdown">
            Équipements
            <img className="arrow-up" src={arrowUp} alt="Flèche" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Logement
