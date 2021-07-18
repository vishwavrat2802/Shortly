import React from 'react'
import styled from 'styled-components';
import Formlink from './Formlink';
import ContentBoxes from './ContentBoxes';
import Boost from './Boost';
import Footer from './Footer';
const Container = styled.div`
    min-height:700px;
    padding:0 calc((100vw - 1110px)/2);
    padding-bottom:100px;
    position:relative;
    background:rgba(158,154,167,0.2);
    ${'' /* &:after{
        content:'';
        width:100%;
        background:#9e9aa7;
        opacity:0.2;
        height:400px;
        position:absolute;
        top:0;
        left:0;
    } */}
    @media(max-width:1110px){
        padding:0 5vw;
    }
`;
const Hr = styled.div`
    height:150px;
    @media(max-width:800px){
        display:none;
    }
`;


function Body() {
    return (
        <>
            <Hr></Hr>
            <Container>
                <Formlink/>
                <ContentBoxes/>
            </Container>
            <Boost></Boost>
            <Footer></Footer>
        </>
    )
}

export default Body
