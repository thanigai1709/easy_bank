import React from "react"
import BrandLogo from "../images/logo.svg"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className="header">
      <nav className="flex flex-jc-sb flex-ai-c">
        <Link to="/" className="header__logo">
          <img src={BrandLogo} alt="logo" />
        </Link>
        <a href="#" className="header__menu hide-for-desktop">
          <span></span>
          <span></span>
          <span></span>
        </a>
        <div className="header__links hide-for-mobile">
          <Link to="/" activeClassName="active">
            Home
          </Link>
          <Link activeClassName="active">About</Link>
          <Link activeClassName="active">Contact</Link>
          <Link activeClassName="active">Blog</Link>
          <Link activeClassName="active">Careers</Link>
        </div>
        <Link className="cta-btn header__cta hide-for-mobile">
          Request Invite
        </Link>
      </nav>
    </header>
  )
}

export default Header
