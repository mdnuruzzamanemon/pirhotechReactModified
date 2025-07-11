import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import ParticleBG from "./particleBG";
import OurServices from "./ourServices";
import StatusCounter from "./statusCounter";
import Products from "./products";
import headerImage from "../images/headerIgame.png";
import Footer from "./footer";
import HeaderAnimation from "./headerAnimation";




function Index() {
    const [text] = useTypewriter({
        words: ['Web Development', 'App Development', 'SEO', 'Games Developing'],
        loop: 0

    });

    return (
        <div className="main">
            <ParticleBG />
            <div className="headerDes">

                <div className="headerDesMid">
                    <div className="curly-brace"></div>
                    <div className="headerText ">
                        <h1 className="comName commonTextColor">PiRhoTech</h1>
                        <p className="commonTextColor">We believe in imagination</p>
                        <h1 className="commonTextColor">We provide you {" "}
                        </h1>
                        <h1>
                            <span  className="typewriterText ">{text}</span>
                            <Cursor
                                cursorColor='red'
                                cursorStyle='>_'
                            />
                            
                        </h1>
                        <h1 className="commonTextColor">Services</h1>
                    </div>
                    <div className="headerImage">
                        <img src={headerImage} alt="headerImage" />
                    </div>

                    {/* <HeaderAnimation /> */}

                </div>
            </div>
            <OurServices />
            <Products />
            <StatusCounter />
            <Footer />



        </div>


    );
}


export default Index;