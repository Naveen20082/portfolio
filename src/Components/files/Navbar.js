import React from 'react'
import { Link } from 'react-router-dom';
import "../css/Navbar.css"


const Navbar = () => {

  const Show = () => {
    const list = document.querySelector('.main_list');
    if (list.style.height == "0em") {
      list.style.height = "15em"

    } else {
      list.style.height = "0em"
    }
  }

  return (
    <>
      <div className="main_navbar">
        <h1><Link to="/">Portfolio</Link></h1>
        <div className="main_list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
          </ul>
        </div>

        <button onClick={Show}><div className="line"></div><div className="line"></div><div className="line"></div></button>
      </div>
    </>
  )
}

export default Navbar