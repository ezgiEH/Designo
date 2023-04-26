import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const FormContainer = styled.div`
    width: 1100px;
    height: 480px;
    background: var(--Peach);
    border-radius: var(--Border-radius);
    display: flex;
    align-items: center;
    justify-content: space-around;
    ${mobile({
        width: "375px",
        flexDirection: "column",
        height: "764px"
    })}
`

const FormContent = styled.div`
    width: 40%;
    color: var(--White);
    ${mobile({
        width: "90%",
        textAlign: "center",
    })}
`

const Header = styled.h2``

const Text = styled.p``

const FormSection = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({
        width: "90%",
        textAlign: "center",
        height: "387px",
        
    })}
`
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
`
const Input = styled.input`
    width: 100%;
    height: 40px;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--White);
    color: var(--White);
    ::placeholder{
        padding: 0 15px;
        color: var(--Light-Gray);
    }
    :focus{
        outline: none;
    }
`


const Button = styled.button`
    width: 152px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--White);
    border: none;
    border-radius: var(--Border-radius);
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    align-self: flex-end;
    box-shadow: var(--Box-Shadow);
    cursor: pointer;
    &:hover{
        box-shadow: var(--Box-Shadow-Hover);
    }
`

const ContactForm = () => {
    return (
        <FormContainer>
            <FormContent>
                <Header>Contact Us</Header>
                <Text>Ready to take it to the next level?
                    Let's talk about your project or idea
                    and find out how we can help your business grow.
                    If you are looking for unique digital experiences
                    that's relatable to your users, drop us a line.
                </Text>
            </FormContent>
            <FormSection>
                <Form>
                    <Input type="text" name='Name' placeholder='Name'></Input>
                    <Input type="email" name='Email' placeholder='Email'></Input>
                    <Input type="number" name='Phone' placeholder='Phone'></Input>
                    <Input type="textarea" name='message' placeholder='Your Message'></Input>
                    <Button type="submit">Submit</Button>
                </Form>
            </FormSection>
        </FormContainer>
    )
}

export default ContactForm