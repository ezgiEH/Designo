import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Logo from '../assets/shared/desktop/logo-dark.png'
import HmbgrIcon from '../assets/shared/mobile/icon-hamburger.svg'
import CloseIcon from '../assets/shared/mobile/icon-close.svg'

import { Link } from 'react-router-dom'
import { mobile, tablet } from '../responsive'

const Container = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
const NavbarContainer = styled.div`
    width: 1100px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--White);
    ${mobile({
        width: "100vw",
        height: "96px"
    })}
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
    ${mobile({
        display: "none",
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
    transition: 2ms all ease-in;
    &:hover{
        color: var(--Peach);
        border-bottom: 1px solid var(--Peach);
    }
`
const MenuIcon = styled.button`
    display: none;
    cursor: pointer;
    ${mobile({
        display: "block",
        background: "transparent",
        border: "none",
        margin: "0 15px",
    })}
   
`
const Icon = styled.img`
    width: 24px;
    height: 20px;
    object-fit: cover;
`
const MobileMenuContainer = styled.div`
    display: none;
    ${mobile({
        position: "absolute",
        width: "100vw",
        height: "100vh",
        background:"rgba(0, 0, 0, 0.5)",
        top: "0",
        left: "0",
        zIndex: "2",
    })}
`
const MobileMenu = styled.div`
    display: none;
    ${mobile({
        width: "calc(100vw - 60px)",
        height: "235px",
        padding: "15px 30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-around",
        background: "var(--Black)",
    })}
`
const MobileMenuItem = styled.button`
    background: transparent;
    border: none;
    text-transform: uppercase;
    font-size: 24px;
    line-height: 25px;
    letter-spacing: 2px;
    cursor: pointer;
    color: var(--White);
    transition: 2ms all ease-in;
    &:hover{
        color: var(--Peach);
        transform: scale(1.1);
    }
`

const Navbar = () => {
    const [open ,setOpen] = useState("none")

    
    const handleOpen = () => {
        open === "none" ? setOpen("block") : setOpen("none")
    }

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
                <MenuIcon onClick={() => handleOpen()}>
                    <Icon src={HmbgrIcon} alt='mobile menu'></Icon>
                </MenuIcon>
                <MobileMenuContainer style={{display : `${open}`}}>
                    <NavbarContainer>
                        <LogoSection>
                            <Link to="/"><Image src={Logo} alt="designo"></Image></Link>
                        </LogoSection>
                        <MenuIcon onClick={() => handleOpen()}>
                            <Icon src={CloseIcon} alt='mobile menu'></Icon>
                        </MenuIcon>
                    </NavbarContainer>
                    <MobileMenu>
                        <Link to="/about"><MobileMenuItem>Our Company</MobileMenuItem></Link>
                        <Link to="/location"><MobileMenuItem>Location</MobileMenuItem></Link>
                        <Link to="/contact"><MobileMenuItem>Contact</MobileMenuItem></Link>
                    </MobileMenu>
                </MobileMenuContainer>
            </NavbarContainer>
        </Container>
    )
}

export default Navbar