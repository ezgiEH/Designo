import React from 'react'
import styled from 'styled-components'
import Pattern from '../assets/shared/desktop/bg-pattern-three-circles.svg'
import { mobile, tablet } from '../responsive'


const TouchContainer = styled.div`
    width: 920px;
    padding: 60px 90px;
    background: var(--Peach) url(${Pattern});
    background-repeat: repeat-x;
    background-position: right;
    border-radius: var(--Border-radius);
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
    ${mobile({
        width:"327px",
        height:"380px",
        padding: "0",
        flexDirection : "column",
        justifyContent: "center",
    })}
`
const MessageBox = styled.div`
    width: 460px;
    color: var(--White);
    ${mobile({
        width:"280px",
        height:"190px",
        textAlign :" center",
    })}
`

const Header = styled.header`
    width: 60%;
    font-size: 40px;
    line-height: 40px;
    font-weight: 500;
    ${mobile({
        width:"100%",
    })}
`

const Text = styled.p``

const Button = styled.button`
  
`

const GetInTouch = () => {
    return (
        <TouchContainer>
            <MessageBox>
                <Header>Let's talk about your project</Header>
                <Text>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
                </Text>
            </MessageBox>
            <Button className='btn-primary'>Get in Touch</Button>
        </TouchContainer>
    )
}

export default GetInTouch