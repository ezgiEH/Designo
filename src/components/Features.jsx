import React from 'react'
import styled from 'styled-components'
import Passionate from '../assets/home/desktop/illustration-passionate.svg'
import Resourceful from '../assets/home/desktop/illustration-resourceful.svg'
import Friendly from '../assets/home/desktop/illustration-friendly.svg'
import { mobile, tablet } from '../responsive'

const FeaturesContainer = styled.div`
    width: 1100px;
    height: 412px;
    margin: 90px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    ${mobile({
        width: "100vw",
        flexDirection : "column",
        height: "auto",
    })}
`
const FeaturesBox = styled.div`
    width: 350px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
`
const Image = styled.img`
    width: 202px;
    height: 202px;
    object-fit: fill;
    cursor: pointer;
 
`
const Header = styled.header`
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-weight: 500;
`

const Text = styled.p``

const Features = () => {
  return (
    <FeaturesContainer>
       <FeaturesBox>
            <Image src={Passionate} alt='passionate'></Image>
            <Header>Passionate</Header>
            <Text>Each project starts with an in-depth brand 
                research to ensure we only create products 
                that serve a purpose. We merge art, design,
                 and technology into exciting new solutions.</Text>
       </FeaturesBox>
       <FeaturesBox>
            <Image src={Resourceful} alt='Resourceful'></Image>
            <Header>Resourceful</Header>
            <Text>Everything that we do has a strategic purpose. 
                We use an agile approach in all of our projects 
                and value customer collaboration. It guarantees 
                superior results that fulfill our clients' needs.</Text>
       </FeaturesBox>
       <FeaturesBox>
            <Image src={Friendly} alt='Friendly'></Image>
            <Header>Friendly</Header>
            <Text> We are a group of enthusiastic folks 
                who know how to put people first. Our success 
                depends on our customers, and we strive to give
                 them the best experience a company can provide.</Text>
       </FeaturesBox>
    </FeaturesContainer>
  )
}

export default Features