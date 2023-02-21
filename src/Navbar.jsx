import React, { useEffect, useState } from 'react'
// import { NavLink } from 'react-router-dom';



const Navbar = () => {
    const [state, setState] = useState(true)
    function toggle(){
     setState(!state)
     // console.log(state);
    }
    useEffect(() => {

        let links = document.querySelectorAll('.navlink')
        // console.log(link);
        links.forEach((e) => {
            e.addEventListener("click", (e) => {
                // links = document.querySelectorAll('.navlink')
                links.forEach((e) => {
                    e.classList.remove('active')
                    // this.classList.add('active')
                })
                e.target.classList.add('active');
                setState(true)
            })
        })
    })
    return (
        <>
            <div className="nav-container">

                <div className="navbar">
                    <div className="logo">
                        <h1>portfolio<span>.</span></h1>
                    </div>
                    <div className={state ? 'link-container ' : 'link-container active-burger'}>
                        <ul className="list-container">
                            <li><a className='navlink active' href="#hero">Home</a></li>
                            <li><a className='navlink' href="#education">Education</a></li>
                            <li><a className='navlink' href="#experiance">Experience</a></li>
                        </ul>
                        {/* <button  > */}
                        <a href="#contact" className=" navlink contact-btn btn">Contact <i className="fa-solid fa-arrow-right"></i></a>
                        {/* </button> */}
                    </div>
                    <div className='hanburger' onClick={toggle}>
                       { 
                        state ? ( <i className="fa-solid fa-bars"></i>)
                        : (<i className="fa-solid fa-xmark"></i>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar