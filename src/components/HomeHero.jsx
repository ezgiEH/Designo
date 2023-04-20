import React from 'react'
import styled from 'styled-components'
import HeroPhone from '../assets/home/desktop/image-hero-phone.png'
import { Link } from 'react-router-dom'

const HeroContainer = styled.div`
  width: 1100px;
  height: 640px;
  border-radius: var(--Border-radius);
  background: var(--Peach) url("../assets/home/desktop/bg-pattern-hero-home.svg");
  background-repeat: no-repeat;
  background-position: right bottom;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const Image = styled.img`
  position: absolute;
  right: 0;
  bottom: -180px;
  width: 450px;
  height: 810px;
  object-fit: cover;
`
const HeroContent = styled.div`
  padding: 90px;
  width: 540px;
  height: 350px;
`
const Header = styled.h1`
  color: var(--White);
  font-weight: 500;
`

const Text = styled.p`
  color: var(--White);
`

const Button = styled.button`
  width: 152px;
  height: 56px;
  background-color: var(--White);
  border: none;
  border-radius: var(--Border-radius);
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  &:hover{
    background-color: var(--Light-Peach);
    color: var(--White);
  }
`


const HomeHero = () => {
  return (
    <HeroContainer>
      <Image src={HeroPhone} alt="hero phone"></Image>
      <HeroContent>
        <Header>Award-winning custom designs and digital branding solutions</Header>
        <Text>With over 10 years in the industry, we are experienced in creating 
          fully responsive websites, app design, and engaging brand experiences. 
          Find out more about our services.</Text>
        <Link to="/about"><Button>Learn More</Button></Link>
      </HeroContent>
    </HeroContainer>
  )
}

export default HomeHero