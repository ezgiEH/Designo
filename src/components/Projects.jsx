import React from 'react'
import data from '../data.json'
import styled from 'styled-components'
import { mobile, tablet } from '../responsive'

const ProjectsContainer = styled.div`
    width: 1100px;
    margin: 45px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    ${mobile({
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
    })}
`
const ProjectBox = styled.div`
    width: 350px;
    height: 478px;
    background: var(--Very-light-Peach);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: var(--Border-radius);
    overflow: hidden;
    box-shadow: var(--Box-Shadow);
    cursor: pointer;
    &:hover{
        box-shadow: var(--Box-Shadow-Hover);
    }
`
const Image = styled.img`
    width: 350px;
    height: 320px;
    object-fit: cover;
`
const Header = styled.h3`
    color: var(--Peach);
`
const Text = styled.p`
    margin: 0;
    width: 80%;
    text-align: center;
`


const Projects = ({id}) => {
    const projects = data[id.id].projects

  return (
    <ProjectsContainer>
        {
            projects.map(item => {
                return <ProjectBox key={item.id}>
                <Image src={item.image}></Image>
                <Header>{item.name}</Header>
                <Text>{item.description}</Text>
            </ProjectBox>
            })
        }
    </ProjectsContainer>
  )
}

export default Projects