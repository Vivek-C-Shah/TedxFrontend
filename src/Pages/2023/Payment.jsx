import React from 'react'
import qrcode from "../qrcode.jpg"
import Footer from '../../Component/Footer';
import Header2023 from '../../Component/Header2023';
import ScrollButton from '../../Component/ScrollButton';
import "./Payment.css"

const Payment = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {scrollToTop()}
      <div id="particles-js">
        <div className="backi">
          <Header2023 />
          <div className="payment__container">
            <div className='payment__information'>
            <h1 className='payment__heading'>A <span className='payment__color'>magnificient</span> event awaits <span className='payment__color'>you</span></h1>
            <p>₹900 - Includes Lunch and Goodies Bag along with <b>Certificate of Participation</b></p>
            <p>Conveniently Pay using the QR Code below ↓</p>
            <div className='payment__image__container'>
            <img className='payment__image' src={qrcode} alt="QR Code" />
            </div>

            <p className='payment__warning'>If you have already paid, then please fill the form</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc-uEvlmt7KKnoy4ybou9wTDNh8_yj9qis3PpZD43VsptSSNg/viewform" target="_blank" rel="noopener noreferrer">
            <button className='payment__button'>Fill the form</button>
            </a>
            </div>
          </div>
          <Footer />
        </div>
        <ScrollButton />
      </div>
    </>
  )
}

export default Payment