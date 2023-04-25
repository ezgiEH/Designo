import React from 'react'
import styled from 'styled-components'
import CardImageOne from '../assets/about/desktop/image-world-class-talent.jpg'
import CardImageTwo from '../assets/about/desktop/image-real-deal.jpg'
import LocationList from './LocationList'


const FeaturesContainer = styled.div`
    width: 1100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;
`

const AboutCard = styled.div`
    width: 100%;
    margin: 45px;
    height: 640px;
    background: var(--Very-light-Peach);
    border-radius: var(--Border-radius);
    display: flex;
    flex-direction: ${props => props.right ? "row-reverse" : "row"};
    overflow: hidden;
    box-shadow: var(--Box-Shadow);
`
const CardContent = styled.div`
    padding: 90px 60px;
`

const Header = styled.h2`
    color: var(--Peach);
`
const Text = styled.p``
const Image = styled.img`
    height: 100%;
`


const AboutFeatures = () => {
    return (
        <FeaturesContainer>
            <AboutCard right>
                <CardContent>
                    <Header>World-class talent</Header>
                    <Text>We are a crew of strategists, 
                        problem-solvers, and technologists. 
                        Every design is thoughtfully crafted 
                        from concept to launch, ensuring success 
                        in its given market. We are constantly 
                        updating our skills in a myriad of platforms.
                        </Text>
                        <Text>
                        Our team is multi-disciplinary and we are 
                        not merely interested in form — content 
                        and meaning are just as important. 
                        We give great importance to craftsmanship, 
                        service, and prompt delivery. Clients have 
                        always been impressed with our high-quality 
                        outcomes that encapsulates their brand's 
                        story and mission.</Text>
                </CardContent>
                <Image src={CardImageOne}></Image>
            </AboutCard>
            <LocationList />
            <AboutCard>
                <CardContent>
                    <Header>The real deal</Header>
                    <Text>As strategic partners in our clients’ businesses, 
                        we are ready to take on any challenge as our own. 
                        Solving real problems require empathy and collaboration, 
                        and we strive to bring a fresh perspective to every 
                        opportunity. We make design and technology more accessible 
                        and give you tools to measure success</Text>
                        <Text>
                        We are visual storytellers in appealing and captivating ways.
                         By combining business and marketing strategies, we inspire
                          audiences to take action and drive real results.</Text>
                </CardContent>
                <Image src={CardImageTwo}></Image>
            </AboutCard>
        </FeaturesContainer>
    )
}

export default AboutFeatures