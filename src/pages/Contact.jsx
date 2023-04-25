import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import LocationList from '../components/LocationList'
import ContactForm from '../components/ContactForm'

const ContactContaiener = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 90px;
  background: url('../assets/shared/desktop/bg-pattern-leaf.svg') no-repeat;
`


const Contact = () => {
  return (
    <ContactContaiener>
      <ContactForm />
      <LocationList />
      <Footer />
    </ContactContaiener>
  )
}

export default Contact