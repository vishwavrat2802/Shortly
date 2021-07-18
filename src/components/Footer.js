import React from 'react'
import styled from 'styled-components';
import LogoImg from "../images/logo.svg";
import Facebook from "../images/icon-facebook.svg";
import Instagram from "../images/icon-instagram.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";

const Container = styled.div`
    background: black;
    padding:50px calc((100vw - 1110px)/2);
    min-height:250px;
    display:flex;
    flex-wrap:wrap;
    @media(max-width:1110px){
        padding:0 5vw;
        text-align:center;
    }
`;
const LogoBox = styled.div`
    flex:0.3;
    @media(max-width:800px){
        flex:100%;
        display:flex;
        align-items: flex-end;
        justify-content: center;
    }
`;
const Logo = styled.div`
    height:100px;
    max-width:50%;
    background-color: white;
    -webkit-mask: url(${LogoImg}) no-repeat center / contain;
    @media(max-width:800px){
        flex:100%;
        transform:scale(0.72);
    }
`;
const Tags = styled.div`
    flex:0.15;
    height:auto;
    h4{
        color:white;
        font-family: 'Poppins', sans-serif;
        font-weight:700;
    }
    @media(max-width:800px){
        flex:100%;
        padding-bottom:40px;
    }
`;
const SocialMedia = styled.div`
    flex:0.25;
    height:auto;
    padding-top:20px;
    display:flex;
    @media(max-width:800px){
        flex:100%;
        justify-content:center;
        padding-bottom:60px;
    }
`;
const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;
const Li = styled.li`
    color:#bfbfbf;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
    font-weight:500;
    font-size:14px;
    cursor:pointer;
    &:hover{
        color:cyan;
    }
`;
const SocialLogo = styled.div`
    background-color: white;
    -webkit-mask:url(${props => props.img}) no-repeat center;
    margin:0 10px;
    width:30px;
    height:30px;
    cursor:pointer;
    &:hover{
        background-color: cyan;
    }
`;
function Footer() {
    return (
        <>
            <Container>
                <LogoBox>
                    <Logo>
                    </Logo>
                </LogoBox>
                <Tags>
                    <h4>Features</h4>
                    <Ul>
                        <Li>Link Shortening</Li>
                        <Li>Branded Links</Li>
                        <Li>Analytics</Li>
                    </Ul>
                </Tags>
                <Tags>
                    <h4>Resources</h4>
                    <Ul>
                        <Li>Blog</Li>
                        <Li>Developers</Li>
                        <Li>Support</Li>
                    </Ul>
                </Tags>
                <Tags>
                    <h4>Company</h4>
                    <Ul>
                        <Li>About</Li>
                        <Li>Our Team</Li>
                        <Li>Careers</Li>
                        <Li>Contact</Li>
                    </Ul>
                </Tags>
                <SocialMedia>
                    <SocialLogo img={Facebook}></SocialLogo>
                    <SocialLogo img={Twitter}></SocialLogo>
                    <SocialLogo img={Pinterest}></SocialLogo>
                    <SocialLogo img={Instagram}></SocialLogo>
                </SocialMedia>
            </Container>
        </>
    )
}
export default Footer
