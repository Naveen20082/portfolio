import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Skillset from './Skillset';
import "../css/Skills.css"

const Skills = () => {
  return (

    <>
      <Navbar />
      <div className="skill_cont">

        {
          Skillset.map((elm) => {
            return <>
              <div className="skill_box">
                <div className="skill_img">
                  <img src={elm.img} alt="" />
                </div>
                <div className="skill_shadow"></div>
                <div className="skill_des">
                  <h1>{elm.name}</h1>
                  <p>{elm.Des}</p>
                  <button>Learn More</button>
                </div>
                <h2>{elm.name}</h2>
              </div>
            </>
          })
        }
      </div>
      <Footer />
    </>
  )
}

export default Skills