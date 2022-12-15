import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.div`
    width: 100%;
    height: 120px;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: transparent;
    
`;

export const NavbarWrapper = styled.div`
    margin: auto;
    width: 70%;
    /* max-width: 1300px; */
    height: 100%;
    align-items: center;
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: space-between;  
`;

export const IconLogo = styled.div`
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: flex-start;
    align-items: center;
    font-size: 1.2rem;
    padding-right: 5%;
    `;

export const Nav = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavbarLink = styled.ul`
    height: 100%;
    padding-right: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: white;

&:hover {
    color: #2E3852;
    }
`;

export const MenuItemLink = styled(Link)`
    text-decoration: none;
    color: white;
    padding-right: 10%;

    &:hover {
    color: #2E3852;
    }
`;