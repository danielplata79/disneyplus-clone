import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
        <Background>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
        </Background>

        <ImageTitle>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="" />
        </ImageTitle>

        <Controls>
            <PlayButton>
                <img src="/images/play-icon-black.png" alt="" />
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
                <img src="/images/play-icon-white.png" alt="" />
                <span>Trailer</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src="/images/group-icon.png" alt=""/>
            </GroupWatchButton>
        </Controls>

        <Subtitle>
            2018 • 7m • Family, fantasy, Kids, Animation
        </Subtitle>

        <Description>
            A Chinese-Canadian woman suffering from empty nest syndrome gets a second shot at motherhood when one of her handmade dumplings comes alive.
        </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`

const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;

    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.div`
    border-radius: 4px;
    font-size: 15px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    padding: 0px 24px;
    background: rgb(249,249,249);
    color: black;
    font-size: 15px;
    letter-spacing: 1.8px;
    cursor: pointer;
    border: none;

    &:hover {
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`

const AddButton = styled.div`
    margin-right: 16px; 
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.6);
    border: 2px solid white;
    cursor: pointer;

    span {
        font-size: 30px;
        color: white;

        &:hover {
            color: rgba(0, 0, 0, 0.6);
        }
    }

    &:hover {
        background: rgba(249, 249, 249, 0.5);
        border: 2px solid rgba(0, 0, 0, 0.6);
    }


`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0)
`

const Subtitle = styled.div`
    margin-top: 26px;
    color:rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);

`