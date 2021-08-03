import React, { useState, useEffect } from 'react'
import { Nav, NavbarContainer, NavbarLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from "./NavbarElements"
import { FaBars } from "react-icons/fa"
import { animateScroll as scroll } from "react-scroll"

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        }
        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeNav)
    }, []);


    const goingToTop = () => {
        scroll.scrollToTop();
    }

    return (
        // <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavbarLogo to="/" onClick={goingToTop}>Olympia Gym</NavbarLogo>

                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>

                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" spy={true} exact={true} duration={500} smooth={true} offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover" spy={true} exact={true} offset={-80} duration={500} smooth={true}>Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services" spy={true} exact={true} offset={-80} duration={500} smooth={true}>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup" spy={true} exact={true} offset={-80} duration={500} smooth={true}>Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>

                <NavBtn>
                    <NavBtnLink to="/sign-in">Sign In</NavBtnLink>

                </NavBtn>

            </NavbarContainer>
        </Nav>
        // </>
    )
}

export default Navbar
