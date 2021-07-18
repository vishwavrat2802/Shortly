import React, {useState} from 'react'
import styled from 'styled-components';
import { NavLink as Link, BrowserRouter as Router } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import LogoImg from "../images/logo.svg";
import MobileNav from './MobileNav';

export const Nav = styled.nav`
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1100px) / 2);
  z-index: 12;
  @media (max-width: 1100px) {
        padding:5vw;
  }
`;
export const NavLink = styled(Link)`
  color: #bfbfbf;
  display: flex;
  align-items: center;
  align-content:center;
  text-decoration: none;
  padding: 0 1.5rem;
  font-family: 'Poppins', sans-serif;
  height: 100%;
  cursor: pointer;
`;
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(Link)`
  border-radius: 22px;
  background: #2acfcf;
  padding: 10px 30px;
  ${props => props.mobileView?`padding:10px 23vw`:``};
  color: white;
  outline: none;
  border: none;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;
function Navbar() {
    const [mobileMenu, setmobileMenu] = useState(false);
    return (
        <>
        <Router>
            <Nav>
                <Bars onClick={() => {console.log(mobileMenu);setmobileMenu(!mobileMenu)}}/>
                <MobileNav visible={mobileMenu}></MobileNav>
                <NavMenu>
                    <img src={LogoImg} alt="logo" />
                    <NavLink to='/about' activeStyle={{color: '#000000',}}>
                        About
                    </NavLink>
                    <NavLink to='/events' activeStyle={{color: '#000000',}}>
                        Events
                    </NavLink>
                    <NavLink to='/annual' activeStyle={{color: '#000000',}}>
                        Annual Report
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavLink to='/login' activeStyle={{color: '#000000',}}>
                        Login
                    </NavLink>
                    <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
                </NavBtn>
            </Nav>
        </Router>
        </>
    )
}

export default Navbar
