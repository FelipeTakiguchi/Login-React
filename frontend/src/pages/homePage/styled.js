import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const Content = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3rem;
    border-radius: 1rem;
    background-color: #E6E6EA;
    margin-bottom: 1rem;
    width: 100%;
`;

export const HorizontalAlign = styled.div`
    display: flex;
    justify-content: center;
`;
