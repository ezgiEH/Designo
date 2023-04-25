import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../assets/shared/desktop/logo-light.png'
import Facebook from '../assets/shared/desktop/icon-facebook.svg'
import Twitter from '../assets/shared/desktop/icon-twitter.svg'
import Instagram from '../assets/shared/desktop/icon-instagram.svg'
import Pinterest from '../assets/shared/desktop/icon-pinterest.svg'
import Youtube from '../assets/shared/desktop/icon-youtube.svg'
import { mobile, tablet } from '../responsive'


const FooterContainer = styled.div`
  width: 100%;
  height: 393px;
  margin-top: -135px;
  background: var(--Black);
  color: var(--White);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  ${mobile({
    height: "715px",
    alignItems: "center",
  })}
`
const Wrapper = styled.div`
  width: 1110px;
  display: flex;
  flex-direction: column;
  ${mobile({
    width: "375px",
    gap: "45px",
  })}
`
const FooterMenu = styled.div`
    height: 89px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--Light-Gray);
    ${mobile({
        flexDirection: "column",
        height: "auto",
        gap: "30px",
        borderBottom: "none",
    })}
`
const LogoSection = styled.div`
    width: 196px;
    ${mobile({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      borderBottom: "1px solid var(--Light-Gray)",
    })}
`
const Image = styled.img`
    width: 196px;
    height: 24px;
    object-fit: contain;
`
const MenuSection = styled.div`
    width: 370px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({
        flexDirection: "column",
        gap: "15px",
    })}
`
const MenuItem = styled.button`
    background: transparent;
    border: none;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 2px;
    cursor: pointer;
    color: var(--White);
    transition: 2ms all ease-in;
    &:hover{
        color: var(--Peach);
        border-bottom: 1px solid var(--Peach);
    }
`

const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${mobile({
        flexDirection: "column",
  })}
`

const FooterBox = styled.div`
  width: 350px;
  padding: 45px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${mobile({
      alignItems: "center",
      padding :"15px 0"
  })}
`

const Text = styled.span`
  line-height: 26px;
  color: var(--Light-Gray);
  font-weight: ${props => props.bold ? "700" : "500"};
`
const FooterSocial = styled.div`
    width: calc(100% - 700px);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;
    ${mobile({
      justifyContent: "center",
      margin: "15px 0"
  })}
`
const Icon = styled.img`
  &:hover{
    transform: scale(1.2);
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <FooterMenu>
          <LogoSection>
            <Link to="/"><Image src={Logo} alt="designo"></Image></Link>
          </LogoSection>
          <MenuSection>
            <Link to="/about"><MenuItem>Our Company</MenuItem></Link>
            <Link to="/location"><MenuItem>Location</MenuItem></Link>
            <Link to="/contact"><MenuItem>Contact</MenuItem></Link>
          </MenuSection>
        </FooterMenu>
        <FooterBottom>
          <FooterBox>
            <Text bold>Designo Central Office</Text>
            <Text>3886 Wellington Street</Text>
            <Text>Toronto, Ontario M9C 3J5</Text>
          </FooterBox>
          <FooterBox>
            <Text bold>Designo Central Office</Text>
            <Text bold>P : +1 253-863-8967</Text>
            <Text bold>M : contact@designo.co</Text>
          </FooterBox>
          <FooterSocial>
            <a href="/"><Icon src={Facebook}></Icon></a>
            <a href="/"><Icon src={Twitter}></Icon></a>
            <a href="/"><Icon src={Instagram}></Icon></a>
            <a href="/"><Icon src={Pinterest}></Icon></a>
            <a href="/"><Icon src={Youtube}></Icon></a>
          </FooterSocial>
        </FooterBottom>
      </Wrapper>
    </FooterContainer>
  )
}

export default Footer