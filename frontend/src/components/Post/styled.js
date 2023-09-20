import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Card = styled.div`
    min-width: 85%;
    max-width: 85%;
    min-height: 10rem;
    background-color: aliceblue;
    padding: 1.5rem;
    box-sizing: border-box;
    border-radius: 0 0 1rem 1rem;
    animation: fadeInAnimation ease .4s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    font-size: 1rem;
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
    background-color: #2691FF; //BCF4DE
    color: #fff;
    margin: 0;
    margin-top: 1.5rem;
    min-width: 85%;
    max-width: 85%;
    text-align: center;
    padding: .3rem;
    border-radius: 1rem 1rem 0 0;
    user-select: none;
`;

export const Description = styled.p`
    padding: .5rem;
    text-indent: 1rem;
    margin-bottom: 3rem;
    border-radius: 1rem;
    word-wrap: break-word;
    text-justify: inter-word;
    text-align: justify;
    user-select: none;
`;

export const Logo = styled.path`
    fill: #ea0016;
`;

export const Separator = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
`;

export const FlipIcon = styled(FontAwesomeIcon)`
    transition: transform .3s ease; 
    cursor: pointer;
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.4rem;
    background-color: aliceblue;
    border-radius: 100%;
    &:hover{
        background-color: #F1EDEE;
    }
`;

export const HorizontalAlign = styled.div`
    display: flex;
    justify-content: center;
`;

export const ListAlign = styled.div`
    margin-top: 1.2rem;
    display: flex;
    flex-direction: column;
    min-width: 40%;
    max-width: 100%;
    word-wrap: break-word;
`;
