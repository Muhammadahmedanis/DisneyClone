import React from "react";
import styled from "styled-components";
// import Link from 'react-router-dom';


function Movies(){
    return(
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                {/* {
                    <Link />
                } */}
                <Wrap>
                    <img src="https://variety.com/wp-content/uploads/2024/02/Disneyland-Mickey-Mouse.jpg?w=1000&h=667&crop=1" alt="" />
                </Wrap>
            </Content>
        </Container>
    )
}
export default Movies;

const Container = styled.div`
`
const Content = styled.div`
    padding: 15px 0px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

`
const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 50ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    &:hover{
        transition: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border: 3px solid rgba(249, 249, 249, 0.8);
    }
`
