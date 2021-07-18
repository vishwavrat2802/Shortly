import React from 'react'
import styled from 'styled-components';
import Working from "../images/illustration-working.svg";
import { NavBtnLink } from "./Navbar";

const Container = styled.div`
    overflow:hidden;
    padding: 0.2rem calc((100vw - 1110px) / 2);
    @media (max-width: 1110px) {
        padding:5vw;
    }
`;
const JumbotronBox = styled.div`
    width:100%;
    display:flex;
    flex-wrap: wrap-reverse;
    /* margin-left:12vw;
    @media (max-width: 800px) {
        margin-left: 8vw;
        width:90vw;
  } */
`;
const MessageBox = styled.div`
    flex: 50%;
    display:flex;
    align-items: center;
    height:400px;
    overflow:hidden;
    @media (max-width: 800px) {
        flex: 100%;
        text-align:center;
    }
    @media (max-width: 490px) {
        align-items: initial;
    }
`;
const MessageText = styled.div`
    h1{
        font-family: 'Poppins', sans-serif;
        font-size:4rem;
        line-height:1.2;
        font-weight:700;
        margin:0;
    }
    p{
        margin-top:0;
        font-family: 'Poppins', sans-serif;
        color:#bfbfbf;
        font-size:1.15rem;
    }
    @media (max-width: 800px) {
        h1{
            font-size:2rem;
        }
        p{
            font-size:0.8rem;
        }
    }
`;
const MessageImage = styled.div`
    width:100%;
    position:absolute;
    right:-20%;
    margin-top: 70px;
    background-image: url(${Working});
    height:400px;
    background-repeat: no-repeat;
    background-size: contain;
    background-color:white; 
    @media (min-width: 800px) {
        right:-60%;
    }
    @media (max-width: 490px) {
        z-index:-3;
    }      
`;

function Jumbotron() {
    return (
        <>
            <Container>
                <JumbotronBox>
                    <MessageBox>
                        <MessageText text={true}>
                            <h1>More than just shorter links</h1>
                            <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
                            <NavBtnLink as="button" getStarted={true} >Get Started</NavBtnLink>
                        </MessageText>
                    </MessageBox>
                    <MessageBox>
                        <MessageImage/>
                    </MessageBox>
                </JumbotronBox>
            </Container>
        </>
    )
}

export default Jumbotron;
