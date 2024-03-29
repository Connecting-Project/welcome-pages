import React from 'react';

function Nav(props) {

  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand">
          hawaiian
            <strong>pizza</strong>
          </p>
          <a
            onClick={props.toggleMenu}
            className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
            href={() => false}
          >
            <span />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );

}

export default Nav;