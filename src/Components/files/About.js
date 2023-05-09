import React from 'react'
import Navbar from './Navbar'
import "../css/About.css"
import Footer from './Footer'

const About = () => {
    return (
        <>
            <Navbar />
            <div className="about_cont">
                <h1>About Me</h1>
                <p>I have been working as a freelance designer and front-end developer since 2019. I’ve always been someone who has both a creative and a logical side. When I discovered web design and development in college, I realized it would be the perfect fit. I could use my creative side to design and my logical side to code. As a bonus, being both designer and developer allows me to make sure no detail is lost in translation.
                </p>
                <button > <a download href="/Resune.pdf">Download my resume</a></button>
            </div>
            <Footer />
        </>
    )
}

export default About