import React, { useState, useEffect } from 'react';
import { Bounce, Fade } from 'react-awesome-reveal';
import './Splash.scss';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react"

const fadeOut = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }`;

const Splash = () => {
  const [showSplash, setShowSplash] = useState(0);

  const carga = () => {
    setTimeout(() => {
      setShowSplash(1);
    }, 10000);

    setShowSplash(0);
  };

  useEffect(() => {
    carga();
  }, [])

  return (
    <>
        {showSplash === 0 &&  <div className="pantallaDeCarga">
        <Reveal delay={2000} keyframes={fadeOut}>
        <Bounce>
          <img
            src="./Animations/presentation.gif"
            alt="logo"
          />
        </Bounce>
        <Fade delay={1000} triggerOnce>
        <h1>Alberto</h1>
        </Fade>
        <Fade delay={1000} triggerOnce>
        <h1>Sánchez</h1>
        </Fade>
        <Fade delay={1000} triggerOnce>
        <h1>Periñán</h1>
        </Fade>
        </Reveal>
    </div>}
        
    </>
  );
};

export default Splash;