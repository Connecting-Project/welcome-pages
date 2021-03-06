import React from 'react';

function Header(props) {

    return (
        <header id="welcome-section">
          <div className="forest" />
          <div className="silhouette" />
          <div className="moon" />
          <div className="container">
            <h1>
              <span className="line">I do</span>
              <span className="line">graphic design</span>
              <span className="line">
                <span className="color">&</span> code.
              </span>
            </h1>
            <div className="buttons">
              <a href="#projects">Our portfolio</a>
              <a href="#contact" className="cta">
                get in touch
              </a>
            </div>
          </div>
        </header>
      );
}

export default Header;