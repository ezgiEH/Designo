import React from 'react'
import styled from 'styled-components'
import AboutHero from '../components/AboutHero'
import GetInTouch from '../components/GetInTouch'
import Footer from '../components/Footer'
import AboutFeatures from '../components/AboutFeatures'

const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 45px;
  background: url('../assets/shared/desktop/bg-pattern-leaf.svg') no-repeat;
`


const About = () => {
  return (
    <AboutContainer>
     <AboutHero />
     <AboutFeatures />
     <GetInTouch />
     <Footer />
    </AboutContainer>
  )
}

export default About