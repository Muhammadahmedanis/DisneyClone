import React from "react";
import styled from "styled-components";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider(){
    let setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slideToScroll: 1,
        autoplay: true,
    }
    return(
        <Crousel {...setting}>
            <Wrap>
                <img src="/images/slider-badging.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-scale.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-scales.jpg" alt="" />
            </Wrap>
        </Crousel>
    )
}
export default ImageSlider;

const Crousel = styled(Slider)`
    margin-top: 20px;

    ul li button {
        &:before{
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }
    li.slick-active button::before{
        color: white;
    }
    @media(max-width: 760px){
        .slick-prev,
        .slick-next {
         display: none !important; 
        }
    }

    .slick-list{
        overflow: visible;
    }
    button{
        z-index: 1;
    }
`
const Wrap = styled.div`
    cursor: pointer;
    img{
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        transition-duration: 300ms;
        @media(max-width: 760px){
            height: 135px;
        }
    }

    &:hover{
        border: 4px solid rgba(249, 249, 249, 0.8);
    }
`