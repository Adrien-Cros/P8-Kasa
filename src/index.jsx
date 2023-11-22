import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import Home from './pages/Home/home'
import About from './pages/about'
import Header from './components/Header/Header'
import Footer from './components//Footer/Footer'
import Error from './components/Error/Error'
import Logement from './components/Logement/Logement'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fiche-logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
