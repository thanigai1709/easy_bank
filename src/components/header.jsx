import React, { useState, useEffect } from "react"
import BrandLogo from "../images/logo.svg"
import { Link } from "gatsby"

const Header = () => {
  let [toggleMobileMenu, setMenuToggle] = useState(false)

  useEffect(() => {
    if (!toggleMobileMenu) {
      document.body.style.overflowY = "visible"
    }
  }, [])

  function handleMobileMenuToggle() {
    setMenuToggle(!toggleMobileMenu)
    if (toggleMobileMenu) {
      document.body.style.overflowY = "visible"
    } else {
      document.body.style.overflowY = "hidden"
    }
  }

  return (
    <header className={toggleMobileMenu ? "header active" : "header"}>
      <div className="overlay"></div>
      <nav className="container container--pall flex flex-jc-sb flex-ai-c">
        <Link to="/" className="header__logo">
          <img src={BrandLogo} alt="logo" />
        </Link>
        <div
          className="header__toggle hide-for-desktop"
          onClick={handleMobileMenuToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
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
      <div className="header__menu">
        <Link to="/" activeClassName="active">
          Home
        </Link>
        <Link activeClassName="active">About</Link>
        <Link activeClassName="active">Contact</Link>
        <Link activeClassName="active">Blog</Link>
        <Link activeClassName="active">Careers</Link>
      </div>
    </header>
  )
}

export default Header
