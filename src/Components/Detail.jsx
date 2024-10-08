import React from "react";
import styled from "styled-components";
function Detail(){
    return(
        <Container>
            <Backround>
                <img src="" alt="" />
            </Backround>
            <ImgTitle>
                <img src="" alt="" />
            </ImgTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailorButton>
                <img src="/images/play-icon-white.png" alt="" />
                <span>TRAILOR</span>
                </TrailorButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2018 7m Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis atque placeat deserunt eaque id sapiente ea quidem officia odio ad dicta, nam repellat facere incidunt nemo sed maiores molestias facilis!
            </Description>
        </Container>
    )
}
export default Detail;
const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;

`
const Backround = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        height: 100%
        width: 100%;
        object-fit: cover;

    }
`
const ImgTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin-top: 60px;

    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
`
const PlayButton = styled.button`
    border-radius: 4px;
    padding: 0 24px;
    margin-right: 22px; 
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 52px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing; 1.8px;
    cursor: pointer;

    &:hover{
        background: rgb(198, 198, 198);
    }
`

const TrailorButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(249, 249, 249);
    color: rgb(249, 249, 249);
`

const AddButton = styled.button`
    margin-right: 16px;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span{
        font-size: 30px;
        color: white;
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`
const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    fon-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    max-width: 700px;
`