import React from 'react'
import { NavbarWrapper, IconLogo, Nav, NavbarLink, NavbarContainer, MenuItemLink } from '../atomos/navbar.elements'
import Logo from '../img/logo.png'
import {Link} from "react-router-dom"

function Navbar  ()  {
    return (
        <>
            <NavbarContainer> 
                 <NavbarWrapper>
                    <IconLogo>
                       <Link to="/"><img src={Logo} width="45px" alt="logo"/></Link>
                       <font color="white"><h3>Soundwave</h3></font>
                    </IconLogo>
                    <Nav>
                      <NavbarLink>
                          <MenuItemLink to="/Discover">Discover</MenuItemLink>
                          <MenuItemLink to="/Join">Join</MenuItemLink>
                      </NavbarLink>
                    </Nav>
                 </NavbarWrapper> 
             </NavbarContainer> 
         
        </>
        

    )
}

export default Navbar