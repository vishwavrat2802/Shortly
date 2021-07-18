import React,{useState} from 'react';
import BackImg from "../images/bg-shorten-desktop.svg"
import styled from 'styled-components';
import axios from 'axios';
import Loader from "../Optional/Loader";

const OuterBox = styled.div`
    position:relative;
    width:100%;
    height:100px;
`;
const InputOuterBox = styled.div`
    position:absolute;
    z-index:2;
    top:0;
    left:0;
    right:0;
    top:-80px;
    background:linear-gradient(0deg, rgba(59,48,84, 0.93), rgba(59,48,84, 0.93)), url(${BackImg}) no-repeat;
    min-height:168px;
    max-width:1110px;
    margin:0 auto;
    border-radius:10px;
    display:flex;
    align-items:center;
    ${'' /* &:before {
        content: "";
        background:#3b3054 ;
        opacity:0.95;
        display:block;
        height:168px;
        max-width:1110px;
        border-radius:10px;
    } */}
`;
const Form = styled.form`
    width:90%;
    height:auto;
    display:flex;
    margin:0 auto;
    flex-wrap: wrap;
    justify-content:space-between;
    @media(min-width:800px){
        margin-top:${props => props.error?`21.6px`:`0px`};
    }
`;
const Input = styled.input.attrs({ 
    type: 'text',
  })`
    border-radius:10px;
    padding: 10px 22px;
    outline: none;
    border: none;
    font-family: 'Poppins', sans-serif;
    width:calc(100% - 44px);
    @media(max-width:800px){
        margin-bottom:${props => props.error?`0px`:`35px`};
    }
  `
const Button = styled.input.attrs({ 
    type: 'submit',
    value: 'Submit'
  })`
    flex:0.2;
    border-radius: 10px;
    height:40px;
    background: #2acfcf;
    padding: 10px 22px;
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
    @media(max-width:800px){
        flex:1;
    }
  `
const InputBox = styled.div`
    flex:0.75;
    display:flex;
    flex-direction: column;
    border-radius:10px;
    @media(max-width:800px){
        flex:100%;
    }
`;

const Error = styled.span`
    color:red;
    font-style: italic;
    @media(max-width:800px){
        margin-bottom:${props => props.error?`13.4px`:`0px`};
    }
`;
const Ul = styled.ul`
    list-style-type:none;
    padding:0;
`;
const Li = styled.li`
    background: white;
    display:flex;
    flex-wrap:wrap;
    margin:20px 0;
`;
const Links = styled.div`
    flex: ${props => props.short?'0.25':'0.65'};
    color:  ${props => props.short?'#2acfcf':'black'};
    ${props => {
        if(props.short) return `text-align:right`
    }};
    padding: 20px 20px;
    overflow: hidden;
    width:calc(100% - 30px);
    white-space: nowrap;
    @media(max-width:800px){
        flex:100%;
        padding:10px 0;
        margin:0 18px;
        text-align:left;
    }
`;
const Copy = styled.button`
  flex:0.1;
  background: ${props => props.isActive? `#3b3054`:`#2acfcf`};
  margin:10px 15px;
  color: white;
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 8px;
  border:none;
  cursor:pointer;
  @media(max-width:800px){
        flex:100%;
        border-radius: 3px;
        padding:10px 0;
    }
`;

function Formlink() {
    const [link,setLink] = useState("");
    const [index,setIndex] = useState(null);
    const [error,setError] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [linkArray, updatelinkArray] = useState([]);
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(!link) setError(true);
        else {
            const url = `https://api.shrtco.de/v2/shorten?url=${link}`;
            console.log(url);
            setIsLoading(true);
            axios.get(url)
                .then(res => {
                    console.log("Got the data");
                    const data = res.data;
                    updatelinkArray(arr => [...arr, 
                        {
                            full_link:link,
                            short_link:data.result.full_short_link2
                        }
                    ]);
                    setIsLoading(false);
                    console.log("Completed");
                })
        }
    }
    const copyCodeToClipboard = (shortLink) => {
        console.log("Copied " + shortLink);
        const dummy = document.createElement("input");
        document.body.appendChild(dummy);
        dummy.setAttribute('value', shortLink);
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
      }
    return (
        <>
            <OuterBox>
                <InputOuterBox >
                    <Form onSubmit={handleSubmit} error={error}>
                        <InputBox>
                            <Input value={link} onChange={event => 
                                {
                                    setLink(event.target.value);
                                    setError(false);}
                                } error={error}></Input> 
                                {error?<Error error={error}>Please add a link</Error>:<span></span>}
                            </InputBox>
                        <Button></Button>
                    </Form>
                </InputOuterBox>
            </OuterBox>
            <Ul>
                {isLoading?<Loader/>:<div></div>}
                {linkArray?.slice(0).reverse().map((Link,ind) => {
                    console.log(Link);
                    return <Li><Links>{Link.full_link}</Links><Links short>{Link.short_link}</Links><Copy onClick={() => {setIndex(ind);copyCodeToClipboard(Link.short_link)}} isActive={ind=== index}>{ind=== index?`Copied`:`Copy`}</Copy></Li>
                })}
            </Ul>
        </>
    )
}

export default Formlink
