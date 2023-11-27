import logo from '../../../assets/LOGO_footer.png'
import '../../../styles/Sass/footer.scss'

function Footer() {
  return (
    <footer>
      <div className="footer-info">
        <div>
          <img className="logo-footer" src={logo} alt="Logo du site Kasa" />
        </div>
        <div className="footer-desc">© 2020 Kasa. All rights reserved</div>
      </div>
    </footer>
  )
}

export default Footer
