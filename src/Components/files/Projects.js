import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import "../css/Projects.css"
import Projectset from './Projectset'

const Projects = () => {
  return (
    <>
      <Navbar />

      <div className="project_cont">
        <h1>My Projects</h1>

        {Projectset.map((elm) => {
          return <>
            <div className="project_box">
              <div className="project_des">
                <h1>{elm.name}</h1>
                <p>{elm.Des}</p>
                <button><a href="/">Go to Github</a></button>
              </div>
              <div className="project_img">
                <img src={elm.img1} alt="" />
                <img src={elm.img2} alt="" />
              </div>
            </div>

          </>
        })}

      </div>
      <Footer />
    </>
  )
}

export default Projects