import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import moviesData from "../movieData";

function Detail(){
    const { id } = useParams();
    
    let movies = moviesData.find(val => val.id == id);
    console.log(movies);
    
    return(
        <Container>
            <Backround>
                <img src={movies.poster} alt="" />
            </Backround>
            <ImgTitle>
                <Text>{movies.title}</Text>
                {/* <p></p> */}
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
                {movies.releaseYear} {movies.duration} {movies.genre}
            </SubTitle>
            <Description>
                {movies.description}
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
        height: 100%;
        width: 100%;
        object-fit: cover;

    }
`
const Text = styled.div`
    // font-family: 'Baloo 2', cursive;  
    font-size: 4rem;                 
    font-weight: 600;                 
    color: #ffffffcc;                   
    margin: 0;
    padding: 10px;
    display: inline-block;            
    text-align: center;

    /* Bubble-like shadow effect */
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);

    /* Responsive size adjustment */
    @media (max-width: 760px) {
        font-size: 2rem;
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`

const ImgTitle = styled.div`
    // height: 15vh;
    width: 35vw;
    min-width: 200px;
    margin-top: 60px;
    
    `
    // min-height: 170px;
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
    font-size: 20px;
    font-weight: 600;
    min-height: 20px;
    margin-top: 26px;
`
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    max-width: 700px;
`