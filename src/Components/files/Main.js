import React from 'react';
import "../css/Main.css"
import Navbar from './Navbar';
import Typed from "react-typed";
import 'react-typed/dist/animatedCursor.css'
import Footer from './Footer';


const Main = () => {
    return (
        <>
            <Navbar />
            <div className="main_cont">
                <div className='main_info'>
                    <h1> <Typed
                        strings={['I am a Front End Web Developer', 'I am a  Back End Web Developer', 'I am a  React Developer', 'I am a Web Designer']}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                    </h1>

                    <p>I am a Web Developer and Programmer Living In Rajasthan, India. I make and Design Web Applications , Usually with ReactJs. </p>
                    <button><a href="tel:+917734801673">Contact Me</a></button>
                </div>
                <div className="main_img">
                    <img src="/Image/Naveen.jpeg" alt="" />
                </div>
            </div>
            <Footer />

            {/* <div>
                <button>➕</button>
                <span>num</span>
                <button>➖</button>
            </div> */}
        </>
    )
}

export default Main