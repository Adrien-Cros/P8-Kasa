import '../../styles/Sass/banner.scss'
import bannerImg from '../../assets/coastal.png'

function Banner() {
  return (
    <div className="img-container">
      <img
        className="img-banner"
        src={bannerImg}
        alt="Paysage de présentation"
      />
      <div className="slogan">Chez vous, partout et ailleurs</div>
    </div>
  )
}

export default Banner
