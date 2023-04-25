import React from 'react'
import styled from 'styled-components'
import GetInTouch from '../components/GetInTouch'
import Footer from '../components/Footer'
import LocationInfo from '../components/LocationInfo'

const LocationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 45px;
  background: url('../assets/shared/desktop/bg-pattern-leaf.svg') no-repeat;
`


const Location = () => {
  return (
    <LocationContainer>
      <LocationInfo />
      <GetInTouch />
      <Footer />
    </LocationContainer>
  )
}

export default Location