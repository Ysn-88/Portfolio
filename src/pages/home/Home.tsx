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
          <h1 className="home__title"><span>Ich bin Yassine,</span> Web Entwickler</h1>
          
          <p className="home_description">Als Designer und Front-End-Entwickler  fokussiere ich mich auf die Gestaltung von ansprechenden 
          und nutzerfreundlichen Erfahrungen. Meine Leidenschaft liegt darin, exzellente Software zu schaffen, die das Leben der Menschen 
          in meinem Umfeld bereichert..</p>

          <Link to='/about' className='button'>
          Mehr über mich <span className='button__icon'><FaArrowRight/></span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  )
}

export default Home