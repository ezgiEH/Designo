import React from 'react'
import data from '../data.json'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import WebImage from '../assets/home/desktop/image-web-design-large.jpg'
import AppImage from '../assets/home/desktop/image-app-design.jpg'
import GraphImage from '../assets/home/desktop/image-graphic-design.jpg'


const ServicesContainer = styled.div`
    width: 1100px;
    height: 640px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const LeftSection = styled.div`
    
`
const RightSection = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

`
const ItemBox = styled.div`
    position: relative;
    height: ${props => props.small ? "calc(50% - 12px)" : "640px"};
    width: 540px;
    overflow: hidden;
    border-radius: var(--Border-radius);
    background-color:  rgba(0, 0, 0, .5);
    transition: all 300ms;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    cursor: pointer;
    &:hover{
        background-color: transparent;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
   
`

const Image = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
`
const BoxContent = styled.div`
    position: absolute;
    top: 25%;
    left: 10%;
    display: flex;
    height: 50%;
    width: 80%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #ffffff15;
     backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
     border-radius: 15px;
     box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`
const Header = styled.h2`
    margin: 15px 0;
    text-transform: uppercase;
    color: var(--White);
    font-weight: 500;
`

const BoxButton = styled.button`
    border: none;
    background-color: transparent;
    color: var(--White);
    text-transform: uppercase;
    letter-spacing: 5px;
`

const ServicesList = () => {
    return (
        <ServicesContainer>
            <LeftSection>
                <ItemBox>
                    <Image src={WebImage}></Image>
                    <Link to={`/services/${data[0].id}`}>
                        <BoxContent>
                            <Header>{data[0].name}</Header>
                            <BoxButton>View Projects</BoxButton>
                        </BoxContent>
                    </Link>
                </ItemBox>
            </LeftSection>
            <RightSection>
                <ItemBox small>
                    <Image src={AppImage}></Image>
                    <Link to={`/services/${data[1].id}`}>
                        <BoxContent>
                            <Header>{data[1].name}</Header>
                            <BoxButton>View Projects</BoxButton>
                        </BoxContent>
                    </Link>
                </ItemBox>
                <ItemBox small>
                    <Image src={GraphImage}></Image>
                    <Link to={`/services/${data[2].id}`}>
                        <BoxContent>
                            <Header>{data[2].name}</Header>
                            <BoxButton >View Projects</BoxButton>
                        </BoxContent>
                    </Link>
                </ItemBox>
            </RightSection>
        </ServicesContainer>
    )
}

export default ServicesList