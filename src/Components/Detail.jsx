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

                </TrailorButton>
                <AddButton>

                </AddButton>
                <GroupWatchButton>

                </GroupWatchButton>

            </Controls>
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

    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`
const Controls = styled.div`

`
const PlayButton = styled.button``

const TrailorButton = styled.button``

const AddButton = styled.button``

const GroupWatchButton = styled.button``