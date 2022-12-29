import styled, { keyframes } from "styled-components";

export const Wrapper = styled.section`
    margin: 130px auto;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 48px;
`

const Spinning = keyframes`
    0% {
            transform: rotate(0);
    }
    100% {
            transform: rotate(360deg);
    }
`

export const SpinningImage = styled.img`
    max-width: 350px;
    max-height: 350px;
    animation: 1s ${Spinning} linear infinite;
`

export const Text = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`

export const Title = styled.h2`
    font-size: 40px;
    width: 80%;
    text-align: center;
    color: #f1f1f1;
`

export const AboutUs = styled.p`
    font-size: 24px;
    text-align: center;
    color: #f1f1f1;
`