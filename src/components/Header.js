import React from 'react';

const Header = () => (
    <header className="navbar navbar-light navbar-static-top bd-navbar" role="banner">
      <div className="container">
        <div className="clearfix">
          <a className="navbar-brand hidden-sm-up" href="/">
            Marketplace UI
          </a>
        </div>
        <div className="collapse navbar-toggleable-xs" id="bd-main-nav">
          <nav className="nav navbar-nav">
            <a className="nav-item nav-link active" href="https://bitbucket.org/grayshirts-docturno/docturno-ui"
               target="_blank">Repositorio Github</a>
          </nav>
        </div>
      </div>
    </header>
)

export default Header;
