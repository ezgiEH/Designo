import React from 'react'
import styled from 'styled-components'
import HeroPhone from '../assets/home/desktop/image-hero-phone.png'
import { Link } from 'react-router-dom'
import { mobile, tablet } from '../responsive'

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
  ${mobile({
    width: "375px",
    flexDirection: "column",
  })}
`
const Image = styled.img`
  position: absolute;
  right: 0;
  bottom: -180px;
  width: 450px;
  height: 810px;
  object-fit: cover;
  ${mobile({
    width:"284px",
    height:"573px",
    bottom: "-240px",
    right: "12%"
  })}
`
const HeroContent = styled.div`
  padding: 90px;
  width: 540px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${mobile({
    width: "90%",
    height: "312px",
    textAlign: "center",
    alignItems :"center",
    padding:"0px",
  })}
`
const Header = styled.h1`
  color: var(--White);
  font-weight: 500;
  ${mobile({
    fontSize :"30px",
    lineHeight: "36px"
  })}
`

const Text = styled.p`
  color: var(--White);
`

const Button = styled.button`
  /* width: 152px;
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
  } */
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
        <Link to="/about"><Button className='btn-primary'>Learn More</Button></Link>
      </HeroContent>
    </HeroContainer>
  )
}

export default HomeHero