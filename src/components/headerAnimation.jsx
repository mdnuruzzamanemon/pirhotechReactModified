import React from "react";
import { Lottie } from 'lottie-react';
import headerAnimationData from "../animation/Animation - 1719763829072.json";

const HeaderAnimation = () =>
    {
        return(
            <div className="headerAnimationBox">
                <Lottie
                    animationData={headerAnimationData}
                    loop={true} 
                    autoplay={true} 
                    style={{ width: 300, height: 300 }} 
                 />
            </div>
        );
    };

    export default HeaderAnimation;