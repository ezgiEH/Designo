import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/shared/desktop/logo-dark.png'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`
const NavbarContainer = styled.div`
    width: 1100px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const LogoSection = styled.div`
    width: 196px;
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
`
const MenuItem = styled.button`
    background: transparent;
    border: none;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 2px;
    cursor: pointer;
    transition: 2ms all ease-in;
    &:hover{
        color: var(--Peach);
        border-bottom: 1px solid var(--Peach);
    }
`
const Navbar = () => {
    return (
        <Container>
            <NavbarContainer>
                <LogoSection>
                    <Link to="/"><Image src={Logo} alt="designo"></Image></Link>
                </LogoSection>
                <MenuSection>
                    <Link to="/about"><MenuItem>Our Company</MenuItem></Link>
                    <Link to="/location"><MenuItem>Location</MenuItem></Link>
                    <Link to="/contact"><MenuItem>Contact</MenuItem></Link>
                </MenuSection>
            </NavbarContainer>
        </Container>
    )
}

export default Navbar