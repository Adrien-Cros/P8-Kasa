import Collapse from '../components/Collapse/Collapse'
import aboutInfo from '../data/about-info.json' //fichier contenant les infos de à propos
import bannerImg from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'

function About() {
  return (
    <section>
      <div className="img-container">
        <img
          className="img-banner"
          src={bannerImg}
          alt="Paysage avec des montagnes"
        />
      </div>
      {aboutInfo.map((dropdown, id) => (
        <Collapse
          key={id}
          dropdownTitle={dropdown.aboutTitle}
          dropdownContent={dropdown.aboutContent}
          containerClass={'dropdown-btn-about'}
        />
      ))}
    </section>
  )
}

export default About
