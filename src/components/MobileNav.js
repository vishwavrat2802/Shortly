import React from 'react'
import styled from 'styled-components';
import { NavBtnLink } from './Navbar';
const OuterBox = styled.div`
    ${props => props.visible?`display:block`:`display:none`};
    background:#35323e;
    width:80%;
    max-height:450px;
    position:absolute;
    left:0;
    right:0;
    margin:auto;
    border-radius:10px;
    top:80px;
    z-index:3;
    padding:30px 10px;
`;
const Options = styled.div`
    color:white;
    padding: 15px 15px;
    font-family: 'Poppins', sans-serif;
    font-weight:600;
    font-size:1.05rem;
    text-align:center;
`;
const Hr = styled.hr`
    width:90%;
    border-top:0px solid #bfbfbf;
    margin:15px;
`;
function MobileNav(props) {
    return (
        <>
            <OuterBox visible={props.visible}>
                <Options>Features</Options>
                <Options>Pricing</Options>
                <Options>Resources</Options>
                <Hr></Hr>
                <Options>Login</Options>
                <Options><NavBtnLink to='/signup' mobileView>Sign Up</NavBtnLink></Options>
            </OuterBox>
        </>
    )
}

export default MobileNav
