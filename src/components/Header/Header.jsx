import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import Logo from'../../assets/all-images/logo.png'
import World from '../../assets/all-images/location.png'
import Time from '../../assets/all-images/date.png'
import ButtonUp from '../../assets/all-images/cars-img/go.png'
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  useEffect(() => {
    const backToTopButton = document.querySelector('.back-to-top');

    const scrollListener = () => {
      if (window.scrollY > 100) {
        backToTopButton.style.display = 'flex';
      } else {
        backToTopButton.style.display = 'none';
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
      <header className="header">
        {/* Header üst kısmı */}
        <div className="header__top">
          <Container>
            <Row>
              <Col lg="6" md="6" sm="6">
                <div className="header__top__left">
                  <span>Contact With Us</span>
                  <span className="header__top__help">
                  <i className="ri-phone-fill"></i> +994-202-555-0149
                </span>
                </div>
              </Col>

              <Col lg="6" md="6" sm="6">
                <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                  <Link to="#" className="d-flex align-items-center gap-1">
                    <i className="ri-login-circle-line"></i> Login
                  </Link>

                  <Link to="#" className="d-flex align-items-center gap-1">
                    <i className="ri-user-line"></i> Register
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Header orta kısmı */}
        <div className="header__middle">
          <Container>
            <Row>
              <Col lg="4" md="3" sm="4">
                <div className="logo">
                  <h1>
                    <Link to="/home" className="d-flex align-items-center gap-2">
                      <img className='w-25 position-relative'   src={Logo} alt=""/>
                      <span>
                      Rent <sup className= 'text-danger fw-bolder'>Car </sup>
                    </span>
                    </Link>
                  </h1>
                </div>
              </Col>

              <Col lg="3" md="3" sm="4">
                <div className="header__location d-flex align-items-center gap-2">
                <span>
                <img src={World} style={{width:'55px'}} alt=""/>
                </span>
                  <div className="header__location-content">
                    <h4>Azerbaijan</h4>
                    <h6>Baku City, Center</h6>
                  </div>
                </div>
              </Col>

              <Col lg="3" md="3" sm="4">
                <div className="header__location d-flex align-items-center gap-2">
                <span>
                <img style={{width:'55px'}} src={Time}  alt=""/>
                </span>
                  <div className="header__location-content">
                    <h4>Sunday to Friday</h4>
                    <h6>10am - 7pm</h6>
                  </div>
                </div>
              </Col>

              <Col
                  lg="2"
                  md="3"
                  sm="0"
                  className="d-flex align-items-center justify-content-end"
              >
                <button className="header__btn btn ">
                  <Link to="/contact">
                    <i className="ri-phone-line"></i> Request a call
                  </Link>
                </button>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Main navigasyon */}
        <div className="main__navbar">
          <Container>
            <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

              <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                <div className="menu position-relative">
                   <span className='X-button'>✕</span>
                  {navLinks.map((item, index) => (
                      <NavLink
                          to={item.path}
                          className={(navData) =>
                              navData.isActive ? "nav__active nav__item" : "nav__item"
                          }
                          key={index}
                      >
                        {item.display}
                      </NavLink>
                  ))}
                </div>
              </div>

              <div className="nav__right">
                <div className="search__box">
                  <input type="text" placeholder="Search" />
                  <span>
                  <i className="ri-search-line"></i>
                </span>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Yukarı Git Butonu */}
        <div className="back-to-top" onClick={scrollToTop} style={{ display: 'none' }}>
          <img src={ButtonUp} className='w-100' alt=""/>
        </div>
      </header>
  );
};

export default Header;
