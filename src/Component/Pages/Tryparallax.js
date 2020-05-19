import React from 'react';
import { Parallax } from "react-parallax";
import image1 from '../Image/Image1.jpg'


const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};
const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};

   const image3 =
    "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";


const Tryparallax = () => {
    return (
        <div style={styles}>
            <Parallax bgImage={image1}
                      strength={800}
                      blur={{ min: -1, max: 8}}
                      renderLayer={percentage => (
                          <div>
                              <div
                                  style={{
                                      position: "absolute",
                                      background: `rgba(255, 225, 1, ${percentage * 1})`,
                                      left: "50%",
                                      top: "50%",
                                      borderRadius: "10%",
                                      transform: "translate(-50%,-50%)",
                                      width: percentage * 500,
                                      height: percentage * 400
                                  }}
                              />
                          </div>
                      )}

            >
                <div style={{ height: 800 }}>
                    <div style={insideStyles}>HTML inside the parallax</div>
                </div>
            </Parallax>
            <h1>| | |</h1>
            <Parallax bgImage={image4} blur={{ min: -3, max: 8 }}>
                <div style={{ height: 500 }}>
                    <div style={insideStyles}>Dynamic Blur</div>
                </div>
            </Parallax>
            <h1>| | |</h1>
            <Parallax bgImage={image3} strength={-100}>
                <div style={{ height: 500 }}>
                    <div style={insideStyles}>Reverse direction</div>
                </div>
            </Parallax>
            <h1>| | |</h1>
            <Parallax
                bgImage={image4}
                strength={200}
                renderLayer={percentage => (
                    <div>
                        <div
                            style={{
                                position: "absolute",
                                background: `rgba(255, 25, 0, ${percentage * 1})`,
                                left: "50%",
                                top: "50%",
                                borderRadius: "100%",
                                transform: "translate(-50%,-50%)",
                                width: percentage * 400,
                                height: percentage * 400
                            }}
                        />
                    </div>
                )}
            >
                <div style={{ height: 500 }}>
                    <div style={insideStyles}>renderProp</div>
                </div>
            </Parallax>
            <div style={{ height: 500 }} />
            <h2>{"\u2728"}</h2>
        </div>
    );
};

export default Tryparallax;