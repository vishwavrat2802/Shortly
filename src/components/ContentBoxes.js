import React from 'react'
import styled from 'styled-components';
import BrandRecognition from "../images/icon-brand-recognition.svg";
import DetailedRecords from "../images/icon-detailed-records.svg";
import FullyCustom from "../images/icon-fully-customizable.svg";

const OuterBox = styled.div`
    max-width:1100px;
    display:flex;
    min-height:320px;
    flex-wrap: wrap;
    justify-content:space-between;
    position:relative;
`;
const InnerBox = styled.div`
    flex:100%;
    display:flex;
    margin-bottom:50px;
    @media(min-width:800px){
        flex-grow: 1;
        flex-basis: 0;
        flex:0.3;
        margin-bottom:0px;
        align-items: ${props => {
            console.log(props);
        switch(props.position){
            case 'top': return `flex-Start`;
            case 'middle' : return `center`;
            case 'bottom' : return `flex-end`;
            default: return `flex-Start`
        }
    }}
    }
`;

const Content = styled.div`
    width:100%;
    height:60%;
    background:white;
    padding:25px;
    h4{
        font-family: 'Poppins', sans-serif;
        font-weight:700;
        color:#35323e;
    }
    p{
        color:#bfbfbf;
    }
    @media(max-width:800px){
        height:70%;
    }
`;
const AdvancedStatistics = styled.div`
    text-align:center;
    
    h2{
        font-family: 'Poppins', sans-serif;
    }
    p{
        font-family: 'Poppins', sans-serif;
        color:#bfbfbf;
        font-size:1rem;
    }
`;

const IconBox = styled.div`
    height:10px;
    position:relative;
`;

const Icon = styled.div`
    width:65px;
    height:65px;
    padding:5px;
    ${'' /* border: 10px solid #3b3054; */}
    ${'' /* background-color:#3b3054;
    background-image: url('images/checked.png'); */}
    background: url(${props => props.image}) no-repeat center, #3b3054;
    border-radius:50%;
    position:absolute;
    top:-60px;
    transform:scale(0.8);
    @media(max-width:800px){
        margin:auto;
        left:0;
        right:0;
    }
`;

const Bluehr = styled.div`
    position:absolute;
    top:40%;
    width:70%;
    margin:auto auto;
    left:0;
    right:0;
    z-index:-1;
    height:10px;
    background:#2acfcf;
    @media(max-width:800px){
        width:10px;
        height:70%;
        transform: rotate(180deg);
        top:0;
        bottom:0;
    }
`;


function ContentBoxes() {
    return (
        <>    
            <AdvancedStatistics>
                <h1>Advanced Statistics</h1>
                <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
            </AdvancedStatistics><br></br>
            <OuterBox>
                <Bluehr></Bluehr>
                <InnerBox position={'top'}>
                    <Content>
                        <IconBox >
                            <Icon image={BrandRecognition}></Icon>
                        </IconBox>
                        <h4>Brand Recognition</h4>
                        <p>
                            Boost your brand recognition with each click Denenc links don't mean a thing 
                            Branded links help instil confidence in your content
                        </p>
                    </Content>
                </InnerBox>
                <InnerBox position={'middle'}>
                    <Content>
                        <IconBox >
                            <Icon image={DetailedRecords}></Icon>
                        </IconBox>
                        <h4>Detailed Records</h4>
                        <p>
                            Gain Insights into who is clicking your links knowing when and where people 
                            engage with your content helps inform better decisions
                        </p>
                    </Content>
                </InnerBox>
                <InnerBox position={'bottom'}>
                    <Content>
                        <IconBox >
                            <Icon image={FullyCustom}></Icon>
                        </IconBox>
                        <h4>Fully Customizable</h4>
                        <p>
                            Improve brand awareness and content discoverability through 
                            customizable inks, supercharging audience engagement
                        </p>
                    </Content>
                </InnerBox>
            </OuterBox>
        </>
    )
}

export default ContentBoxes
