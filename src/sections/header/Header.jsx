import HeaderImage from '../../assets/assets/header.jpg'
import data from './data'
import './header.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Header = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3>Ece Selin Yorgancilar</h3>
        <p>
          
          Welcome to my portfolio website, providing an insight into my dedicated journey as a developer and showcasing a 
          collection of my projects.
       
        
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header