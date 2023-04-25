import React from 'react'
import styled from 'styled-components'
import Circle from '../assets/about/desktop/bg-pattern-hero-about-desktop.svg'
import HeroImage from '../assets/about/desktop/image-about-hero.jpg'
import { mobile, tablet } from '../responsive'

const HeroContainer = styled.div`
    width: 1100px;
    height: 480px;
    background: var(--Peach) url(${Circle});
    border-radius: var(--Border-radius);
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    ${mobile({
      width: "100vw",
      flexDirection: "column-reverse",
      height: "auto",
    })}
`
const AboutContent = styled.div`
    padding: 90px 60px;
    color: var(--White);
    ${mobile({
     textAlign: "center",
    })}
`

const Header = styled.h1``
const Text = styled.p``
const Image = styled.img``

const AboutHero = () => {
  return (
    <HeroContainer>
        <AboutContent>
            <Header>About Us</Header>
            <Text>Founded in 2010, we are a creative agency 
                that produces lasting results for our clients. 
                We've partnered with many startups, corporations, 
                and nonprofits alike to craft designs that make real impact. 
                We're always looking forward to creating brands, products, 
                and digital experiences that connect with our clients' audiences.</Text>
        </AboutContent>
        <Image src={HeroImage}></Image>
    </HeroContainer>
  )
}

export default AboutHero