import React from 'react'
import styled from 'styled-components'
import HomeHero from '../components/HomeHero'
import Service from '../components/ServicesList'

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 45px;
`
const Home = () => {
  return (
    <Container>
        <HomeHero />
        <Service />
        Home
    </Container>
  )
}

export default Home