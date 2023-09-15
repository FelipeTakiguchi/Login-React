import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #000;
    font-weight: 300;
`;

export const NavContent = styled(Nav)`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const NavCollapse = styled(Navbar.Collapse)`
    display: flex;
    justify-content: flex-end;
`;

export const IconOption = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
`;

export const Header = styled(Navbar)`
    &:before{
        background-image: url("./band.svg");
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        content: " ";
        height: .375rem;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 2; 
    };

    max-width: 100%;
    height: 6rem;
    align-items: center;
`;

export const Logo = styled.path`
    fill: #ea0016;
`;