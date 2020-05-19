import React from 'react';
import {Parallax, ParallaxProvider} from "react-scroll-parallax";
const Tryscroll = () => {
    return (
        <ParallaxProvider>
        <div >
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <div style={{ height: "200px" }} />
            <Parallax x={[60, -90]} tagInner="figure">
               <div style={{ textAlign:"right"}}>
                   <button
                       style={{backgroundColor:"Blue", width:"155px",height:"55px"}}
                   >
                       Moving Button
                   </button>


               </div>
            </Parallax>

            <div style={{ height: "2000px" }} />
        </div>
        </ParallaxProvider>
    );
};

export default Tryscroll;