import { FaEnvelopeOpen, FaPhoneSquareAlt, FaLinkedin, FaTwitter, FaYoutube,FaDribbble } from "react-icons/fa"
import { FiSend } from "react-icons/fi"
import './contact.css'

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">Get In <span>Touch</span></h2>

      <div className="contact__container container grid">

        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>
          <p><div className="contact__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque minima voluptatem alias eligendi! 
          Delectus cumque, vitae animi corporis nulla magni?</div></p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon"/>

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">Yassine.akd@gmail.com</h4>
              </div>

            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon"/>

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">017681312649</h4>
              </div>

            </div>
          </div>

          <div className="contact__socials">
            <a href="https://linkedin.com" className="contact__social-link">
              <FaLinkedin/>
            </a>
            <a href="https://linkedin.com" className="contact__social-link">
              <FaTwitter/>
            </a>
            <a href="https://linkedin.com" className="contact__social-link">
              <FaYoutube/>
            </a>
            <a href="https://linkedin.com" className="contact__social-link">
              <FaDribbble/>
            </a>
          </div>
        </div>
        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text"  placeholder="Ihr Name" className="form__control"/>
            </div>
            <div className="form__input-div">
              <input type="email"  placeholder="Ihre E-mail Adresse" className="form__control"/>
            </div>
            <div className="form__input-div">
              <input type="text"  placeholder="Thema" className="form__control"/>
            </div>
          </div>

          <div className="form__input-div">
              <textarea placeholder="Ihre Nachricht" className="form__control textarea"></textarea>
            </div>

            <button className="button"> ABSENDEN
            <span className="button__icon contact__button-icon">
              <FiSend></FiSend></span> 
            </button>

        </form>


      </div>
    </section>
  )
}

export default Contact