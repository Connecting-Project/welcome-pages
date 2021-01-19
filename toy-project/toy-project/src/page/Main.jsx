import React, { useState } from 'react';
import Menu from "../component/Menu";
import Nav from "../component/Nav";
import Header from "../component/Header";
import About from "../component/About";
import Projects from "../component/Projects";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

function Main(){

    const [state, setState] = useState({
        menuState: false
      });

      const { menuState } = state;

    const toggleMenu = () => {
        setState(state => ({
          menuState: !state.menuState
            ? 'active'
            : state.menuState === 'deactive'
              ? 'active'
              : 'deactive'
        }));
      };

    return(
        <React.Fragment>
        <Menu toggleMenu={toggleMenu} showMenu={menuState} />
        <Nav toggleMenu={toggleMenu} showMenu={menuState} />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </React.Fragment>
    )

}

export default Main;