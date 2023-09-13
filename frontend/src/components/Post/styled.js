import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled.div`
    min-width: 40rem;
    max-width: 70rem;
    min-height: 10rem;
    background-color: aliceblue;
    padding: 1.5rem;
    border-radius: 1rem;
`;

export const CenterComponent = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    padding: .6rem;
    background-color: antiquewhite;
    width: 3.5rem;
    font-size: 1rem;
    border-radius: 1rem;
    &:hover{
        cursor: pointer;
        background-color: aquamarine;
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