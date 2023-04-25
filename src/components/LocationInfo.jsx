import React from 'react'
import styled from 'styled-components'
import CA from '../assets/locations/desktop/image-map-canada.png'
import AU from '../assets/locations/desktop/image-map-australia.png'
import UK from '../assets/locations/desktop/image-map-united-kingdom.png'

const LocationsContainer = styled.div`
    width: 1100px;
    margin: 90px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 45px;
`
const LocationItem = styled.div`
    width: 100%;
    height: 326px;
    display: flex;
    align-items: center;
    flex-direction: ${props => props.right ? "row" : "row-reverse"};
    justify-content: space-between;
    
`

const ContentSection = styled.div`
    width: 730px;
    height: 100%;
    background-color: var(--Very-light-Peach);
    border-radius: var(--Border-radius);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: var(--Box-Shadow);
`
const Header = styled.h2`
    color: var(--Peach);
`

const ContentBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 90px;
`

const Text = styled.p`
    font-weight: ${props => props.bold ? "700" : "400"} ;
    margin: 5px 0;
`

const ImageSection = styled.div`
    width: 350px;
    height: 100%;
    border-radius: var(--Border-radius);
    overflow: hidden;
    box-shadow: var(--Box-Shadow);
    cursor: crosshair;
    &:hover{
        box-shadow: var(--Box-Shadow-Hover);
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`



const LocationInfo = () => {
    return (
        <LocationsContainer>
            <LocationItem right>
                <ContentSection>
                    <Header>Canada</Header>
                    <ContentBox>
                        <div>
                            <Text bold>Designo Central Office</Text>
                            <Text>3886 Wellington Street</Text>
                            <Text>Toronto, Ontario M9C 3J5</Text>
                        </div>
                        <div>
                            <Text bold>Contact </Text>
                            <Text>P : +1 253-863-8967</Text>
                            <Text>M : contact@designo.co</Text>
                        </div>
                    </ContentBox>
                </ContentSection>
                <ImageSection>
                    <Image src={CA}></Image>
                </ImageSection>
            </LocationItem>

            <LocationItem >
                <ContentSection>
                    <Header>Australia</Header>
                    <ContentBox>
                        <div>
                            <Text bold>Designo Central Office</Text>
                            <Text>19 Balonne Street</Text>
                            <Text>New South Wales 2443</Text>
                        </div>
                        <div>
                            <Text bold>Contact </Text>
                            <Text>P : (02) 6720 9092</Text>
                            <Text>M : contact@designo.au</Text>
                        </div>
                    </ContentBox>
                </ContentSection>
                <ImageSection>
                    <Image src={AU}></Image>
                </ImageSection>
            </LocationItem>

            <LocationItem right>
                <ContentSection>
                    <Header>United Kingdom</Header>
                    <ContentBox>
                        <div>
                            <Text bold>Designo Central Office</Text>
                            <Text>13  Colorado Way</Text>
                            <Text>Rhyd-y-fro SA8 9GA</Text>
                        </div>
                        <div>
                            <Text bold>Contact </Text>
                            <Text>P : 078 3115 1400</Text>
                            <Text>M : contact@designo.uk</Text>
                        </div>
                    </ContentBox>
                </ContentSection>
                <ImageSection>
                    <Image src={UK}></Image>
                </ImageSection>
            </LocationItem>

        </LocationsContainer>
    )
}

export default LocationInfo