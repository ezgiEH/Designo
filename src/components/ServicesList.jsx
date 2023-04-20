import React from 'react'
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
    height: ${props => props.small ? "calc(50% - 12px)" : "640px"};
    width: 540px;
    overflow: hidden;
    border-radius: var(--Border-radius);
`

const Image = styled.img`
   width: 100%;
   height: 100%;
   filter: opacity(1.1);
`
const BoxContent = styled.div`
    z-index:2;
`
const Header = styled.h2``
const BoxButton = styled.button``

const ServicesList = () => {
    return (
        <ServicesContainer>
            <LeftSection>
                <ItemBox>
                    <Image src={WebImage}></Image>
                    <Link to="/services/id">
                        <BoxContent>
                            <Header>Web Design</Header>
                            <BoxButton>View Projects</BoxButton>
                        </BoxContent>
                    </Link>
                </ItemBox>
            </LeftSection>
            <RightSection>
                <ItemBox small>
                    <Image src={AppImage}></Image>
                    <Link to="/services/id">
                        <BoxContent>
                            <Header>App Design</Header>
                            <BoxButton>View Projects</BoxButton>
                        </BoxContent>
                    </Link>
                </ItemBox>
                <ItemBox small>
                    <Image src={GraphImage}></Image>
                    <Link to="/services/id">
                        <BoxContent>
                            <Header>Graphic Design</Header>
                            <BoxButton>View Projects</BoxButton>
                        </BoxContent>
                    </Link>
                </ItemBox>
            </RightSection>
        </ServicesContainer>
    )
}

export default ServicesList