import React from "react";
import styled from "styled-components";
function Login(){
    return(
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Get a Premier Access to Ray and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/36/21, the price
                    and The Disney Bundle will increase by 1$.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}
export default Login;

const Container = styled.div`
    // positioin: relative;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    // align-items: top;


    &:before{
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/images/login-background.jpg");
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        opacity: 0.7;
    }
`
const CTA = styled.div`
    max-width: 650px;
    padding; 80px 40px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    
`
const CTALogoOne = styled.img`
`
const SignUp = styled.a`
    width: 60%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 3% 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background: #0483ee;
    }

`
const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;

`
const CTALogoTwo = styled.img`
    margin-top: 5px;
    width: 98%;
`