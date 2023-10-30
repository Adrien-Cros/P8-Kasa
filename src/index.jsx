import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import Home from './pages/Home/home'
import Apropos from './pages/apropos'
import Header from './components/Header/Header'
import Footer from './components//Footer/Footer'
import Error from './components/Error/Error'
import Banner from './components/Banner/Banner'
import Gallery from './components/Gallery/Gallery'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Banner />
      <Gallery />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
