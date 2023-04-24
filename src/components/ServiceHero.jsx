import React from 'react'
import data from '../data.json'
import styled from 'styled-components'
import Circle from '../assets/shared/desktop/bg-pattern-two-circles.svg'

const HeroContainer = styled.div`
    width: 1100px;
    height: 280px;
    background: var(--Peach) url(${Circle});
    background-repeat: repeat-y;
    background-size: 600px;
    background-position: right;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: var(--Border-radius);
`
const Header =styled.h1`
    color: var(--White);
`
const Text =styled.p`
    color: var(--White);
    width: 40%;
    text-align: center;
`


const ServiceHero = ({id}) => {
    const name = data[id.id].name
    const description = data[id.id].description

  return (
   <HeroContainer>
    <Header>{name}</Header>
    <Text>{description}</Text>
   </HeroContainer>
  )
}

export default ServiceHero