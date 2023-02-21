import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='contact-section'>
      <div className="contact-div">
        <form
          action="https://formspree.io/f/mzbqbglj"
          method="POST" className="contact-form">
          <div className="input input-name">
            <label htmlFor='name' className="name-label">
              name
            </label>
            <input className='input-field name-field' type="text" id='name' name='name'/>
          </div>
          <div className="input input-email">
            <label htmlFor='email' className="email-label">
              email
            </label>
            <input className='input-field email-field' type="email" id='email' name='email'/>
          </div>
          <div className="input input-msg">
            <label htmlFor='message' className="name-label">
              mesage
            </label>
            <textarea className='input-field msg-field' type="text" id='message' name='message'></textarea>
          </div>
          <div className="input button-field">
            <button type='submit' className='btn input-btn'>Send <i className="fa-solid fa-paper-plane"></i></button>
          </div>
      </form>
      <div className="contact-desc">
        <div className="contact-me">
          <p className="cm-contact">Contact</p>
          <p className="cm-me">Me</p>
        </div>
        <div className="contact-txt">
          <p>send me a mail through the form
            or contact me on social media.</p>
        </div>
        <div className="social-icon">
          <i className="fa-brands fa-telegram"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
        </div>
      </div>
    </div>
    </div >
  )
}

export default Contact