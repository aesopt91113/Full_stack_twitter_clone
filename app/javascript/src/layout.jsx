// layout.js
import React from 'react';

const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <a href="/">
          <span className="navbar-brand mb-0 h1 pl-2"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></span>
        </a>
      </nav>
      { props.children }
    </React.Fragment>
  );
}

export default Layout;
