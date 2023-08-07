import Profile from '../../assets/yassine.jpg'
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
import "./home.css"


const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title"><span>I'm Yassine Akdim,</span> Web Designer</h1>
          <p className="home_description">I'm a Moroccan/German based designer & front-end developer focused on
          crafting clean & user-friendly experiences, I am passionate about buildin excellent software that 
          improves the lives of those around me.</p>

          <Link to='/about' className='button'>
            More Aboute Me <span className='button__icon'><FaArrowRight/></span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  )
}

export default Home