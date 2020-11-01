import * as React from "react";

import logo from "../../assets/images/logo_white.svg";

const Header: React.FunctionComponent= () => {
  return (
    <header id="header">
      {/*
      //eslint-disable-next-line */}
      <a href="#" className="logo">
        <img src={logo} alt='STOLENTIQ STUDIO' />
      </a>
    </header>
  )
}

export {Header}