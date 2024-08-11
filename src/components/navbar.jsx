import React, { useState } from "react";
// import logo from "../images/whitelogo.png";
import lineLogo from "../images/lineLogo.svg";
import { Link, NavLink } from "react-router-dom";
import profilePic from "../images/profilePic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie,faBars,faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../app";

function Navbar() {
    const { isLoggedIn, logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const [mblMenuOpen, setMblMenuOpen] =useState({});
    const [overlayPos, setOverlayPos] =useState({});

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    const handleLogout = () => {
        // Perform logout actions and set loggedIn to false
        logout();
        // Close the menu after logout
        setMenuOpen(false);
    };

    // for mobile menu
    const openMblMenu= ()=>{
        setOverlayPos({
            left: '0',
            right: '0'
        });
        const openMode={
            right: '0'
        }
        setMblMenuOpen(openMode);
    }

    const closeMblMenu = ()=>{
        setOverlayPos({
            right: '-100%'
        });
        const closeMode={
            right: '-100%'
        }
        setMblMenuOpen(closeMode);
    }

    // for scrolling 



    const scrollToContract = () =>
    {
        const contractSection = document.getElementById('footerContract');
        contractSection.scrollIntoView({ behavior: "smooth"});
    }

    // const scrollToServices = () =>
    // {
    //     const servicesSection = document.getElementById('ourServicesSection');
    //     servicesSection.scrollIntoView({behavior: "smooth"});
    // }

    

    return (
        <nav>
            <div className="nav-mid">
                <div className="company-logo">
                    <a href="/">
                        <img src={lineLogo} alt="logo" />
                    </a>
                </div>
                
                <div className="overlay" style={overlayPos}></div>
                <div className="menu" style={mblMenuOpen}>
                    
                    <button className="mblMenuCross" onClick={closeMblMenu}><FontAwesomeIcon icon={faXmark} /></button>
                    <ul className="mainMenu">
                        <li>
                            <NavLink to="/">
                                Home <span>{" />"}</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                                About <span>{" />"}</span>
                            </NavLink>

                        </li>
                        <li>
                            {/* <NavLink to="/services">
                                Pricing <span>{" />"}</span>
                                <ul className="subMenu">
                                    <li>Web<span>{" />"}</span></li>
                                    <li>App<span>{" />"}</span></li>
                                    <li>SEO<span>{" />"}</span></li>
                                </ul>
                            </NavLink> */}

                            {/* for scrolling with react */}
                            {/* <Link to="/" onClick={scrollToServices}>Our Services <span>{" />"}</span></Link> */}

                            {/* using a tag */}
                            <a href="./#ourServicesSection">Our Services <span>{" />"}</span></a>
                        </li>
                        {/* <li>
                            <NavLink to="/blog">
                                Blog <span>{" />"}</span>
                            </NavLink>

                        </li> */}
                        <li>
                            {/* <NavLink to="contact">
                                Contact <span>{" />"}</span>
                            </NavLink> */}
                            <Link to="#" onClick={scrollToContract}>Contact <span>{" />"}</span></Link>
                        </li>
                        <li className="profileBtn">
                            {isLoggedIn ? (
                                <React.Fragment>
                                    <button className="userButton" onClick={toggleMenu}>
                                        <img src={profilePic} alt="profile" />
                                    </button>

                                    {menuOpen && (
                                        <ul className="userDropMenu">
                                            <li>
                                                <a href="/" onClick={toggleMenu}>
                                                    Profile
                                                </a>
                                            </li>
                                            <li>
                                                <NavLink to="myprojects" className="myProject" onClick={toggleMenu}>
                                                    My Projects
                                                </NavLink>
                                            </li>
                                            <li>
                                                <a href="/" onClick={toggleMenu}>
                                                    Settings
                                                </a>
                                            </li>

                                            
                                            <li>

                                                <a href="/" onClick={handleLogout}>
                                                    LogOut
                                                </a>
                                            </li>

                                        </ul>
                                    )}


                                </React.Fragment>
                            ) : (
                                // If not logged in, show default user icon
                                <NavLink to="signup" className="userBtn">
                                    <FontAwesomeIcon icon={faUserTie} />
                                </NavLink>
                                

                            )}



                        </li>
                    </ul>
                </div>
                <button onClick={openMblMenu} className="navbarToggler">
                <FontAwesomeIcon icon={faBars} />
                </button>
            </div>




        </nav>



    );
}

export default Navbar;