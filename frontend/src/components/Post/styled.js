import styled from 'styled-components';

export const Card = styled.div`
    min-width: 60%;
    max-width: 70rem;
    min-height: 10rem;
    background-color: aliceblue;
    padding: 1.5rem;
    box-sizing: border-box;
    border-radius: 1rem;
    animation: fadeInAnimation ease .4s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    @keyframes fadeInAnimation {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

export const CenterComponent = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    padding: .6rem;
    background-color: #DAE0F2;
    width: 3.5rem;
    font-size: 1rem;
    border-radius: 1rem;
    &:hover{
        cursor: pointer;
        filter: brightness(.75);
        transition: .2s;
    }
`;

export const Title = styled.h1`
    font-size: 2rem;
`;

export const Description = styled.p`
    font-size: 1rem;
`;

export const Logo = styled.path`
    fill: #ea0016;
`;

export const Separator = styled.div`
    display: flex;
    justify-content: space-between;
`;