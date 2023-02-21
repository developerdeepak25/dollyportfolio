import React, { useEffect, useState } from 'react'

const Hero = () => {
    const [state, updatestate] = useState(false)
    
    useEffect(() => {
        window.addEventListener('scroll',()=>{
            let circle = document.querySelector('.circle')
            // console.log(circle);
            let scrolllimit = window.scrollY
            if(scrolllimit>150){
                updatestate(true)
            }else{
                updatestate(false)
            }
        })
        

    }, [])
    return (
        

        <>
            <div id="hero" className="hero-section">
                <div className="hero-text">
                    <p>HELLO THERE!!! NICE TO MEET YOU, Myself...</p>
                    <h1>Dolly Aasharmiya</h1>
                    <p>Lorem ipsum dolor  sit amet, Accusamus illo quos suscipit, in id, explicabo corrupti eos asperiores facere, rem fugit magni dolor quibusdam inventore fugiat!</p>
                    <div className="btn-container">
                        <input type="button" value='Download CV' className='cv-btn btn' />
                    </div>
                    <div className="social-icon">
                        <i className="fa-brands fa-telegram"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                    </div>
                </div>
                <div className="hero-img">
                    <img src="./hero.png" alt="Dolly aashrmiya" />
                    <div className={state ? "circle animate": "circle animateReverse"}></div>
                </div>
            </div>
        </>
    )
}

export default Hero