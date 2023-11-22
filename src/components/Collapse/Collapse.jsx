import { useState } from 'react'
import '../../styles/collapse.css'
import arrow from '../../assets/arrow_back_ios-24px 2.png'

function Collapse(props) {
  const [isCollapseOpen, setCollapseOpen] = useState(false)

  const toggleDropdown = () => {
    setCollapseOpen(!isCollapseOpen)
  }

  return (
    <section>
      <div className="dropdown-btn">
        <div className="dropdown-btn-item">
          <button className="btn-dropdown">
            {props.aboutTitle}
            <img
              onClick={toggleDropdown}
              className={`arrow ${
                isCollapseOpen ? 'arrow-active' : 'arrow-deactive'
              }`}
              src={arrow}
              alt="Flèche"
            />
          </button>
          <div
            className={`dropdown-content ${
              isCollapseOpen ? 'content-fade-in' : 'content-fade-out'
            }`}
          >
            {props.aboutContent}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Collapse
