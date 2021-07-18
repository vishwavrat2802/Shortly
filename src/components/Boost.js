import React from 'react'
import styled from 'styled-components';
import Bgboost from "../images/bg-boost-desktop.svg";
import { NavBtnLink } from "./Navbar";


const Boostbackground = styled.div`
    width:100vw;
    text-align:center;
    display:flex;
    align-items:center;
    height:250px;
    background: url(${Bgboost}) no-repeat, #3b3054;
    h2{
        color:white;
        font-family: 'Poppins', sans-serif;
    }
`;
const BoostBox = styled.div`
    width:100%;
    text-align:center;
    align-items:center;
    h2{
        color:white;
        font-family: 'Poppins', sans-serif;
        font-size:2.2em;
    }
    @media(max-width:800px){
        h2{
            font-size:1.6em;
        }
    }
`;
function Boost() {
    return (
        <>
            <Boostbackground>
                <BoostBox>
                    <h2>Boost your links today</h2>
                    <NavBtnLink as="button" >Get Started</NavBtnLink>
                </BoostBox>
            </Boostbackground>
        </>
    )
}

export default Boost
