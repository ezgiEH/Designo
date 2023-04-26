import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ServiceHero from '../components/ServiceHero'
import GetInTouch from '../components/GetInTouch'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import ServiceList from '../components/ServicesList'


const ServiceContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 45px;
`

const Service = () => {
  const id = useParams()

  return (
    <ServiceContainer>
      <ServiceHero id = {id}/>  
      <Projects id = {id}/>
      <ServiceList />
      <GetInTouch />
      <Footer />
    </ServiceContainer>
  )
}

export default Service