import locationData from '../../data/logements.json'
import '../../styles/gallery.css'

function Gallery() {
  return (
    <section className="card-container">
      {locationData.map((location) => (
        <div
          className="card"
          key={location.id}
          onClick={() => console.log('Clic sur la logement: ' + location.title)}
        >
          <div className="card--title">{location.title}</div>
          <img
            className="card--img"
            src={location.cover}
            alt="Présentation d'une location"
          />
        </div>
      ))}
    </section>
  )
}

export default Gallery
