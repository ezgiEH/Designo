import React from 'react'
import styled from 'styled-components'
import HomeHero from '../components/HomeHero'
import Service from '../components/ServicesList'
import Features from '../components/Features'
import GetInTouch from '../components/GetInTouch'
import Footer from '../components/Footer'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 45px;
    background: url('../assets/shared/desktop/bg-pattern-leaf.svg') no-repeat;
    
`
const Home = () => {
  return (
    <Container>
        <HomeHero />
        <Service />
        <Features />
        <GetInTouch />
        <Footer />
    </Container>
  )
}

export default Home