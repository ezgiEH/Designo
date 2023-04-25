import React from 'react'
import styled from 'styled-components'
import Canada from '../assets/shared/desktop/illustration-canada.svg'
import Australia from '../assets/shared/desktop/illustration-australia.svg'
import UnitedKingdom from '../assets/shared/desktop/illustration-united-kingdom.svg'
import { Link } from 'react-router-dom'
import { mobile } from '../responsive'


const ListContainer = styled.div`
    width: 1100px;
    margin: 90px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({
        width: "100vw",
        flexDirection: "column",
    })}
`
const ListItem = styled.div`
    width: 350px;
    height: 364px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ImageSection = styled.div`
    width: 202px;
    height: 202px;
    background: var(--Very-light-Peach);
    border-radius: 50%;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Header = styled.h3`
    text-transform: uppercase;
`

const Button = styled.button`
    width: 152px;
  height: 56px;
  background-color: var(--Peach);
  color: var(--White);
  border: none;
  border-radius: var(--Border-radius);
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  box-shadow: var(--Box-Shadow);
  &:hover{
    background-color: var(--Light-Peach);
    color: var(--White);
  } `


const LocationList = () => {
    return (
        <ListContainer>
            <ListItem>
                <ImageSection>
                    <Image src={Canada}></Image>
                </ImageSection>
                <Header>Canada</Header>
                <Link to="/location"><Button>View Location</Button></Link>
            </ListItem>
            <ListItem>
                <ImageSection>
                    <Image src={Australia}></Image>
                </ImageSection>
                <Header>Australia</Header>
                <Link to="/location"><Button>View Location</Button></Link>
            </ListItem>
            <ListItem>
                <ImageSection>
                    <Image src={UnitedKingdom}></Image>
                </ImageSection>
                <Header>United Kingdom</Header>
                <Link to="/location"><Button>View Location</Button></Link>
            </ListItem>
        </ListContainer>
    )
}

export default LocationList