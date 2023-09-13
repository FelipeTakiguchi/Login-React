import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const Content = styled(Container)`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    position: relative;
    flex: 1;
    height: 90vh;
    gap: 1rem;
`;

export const FormContainer = styled(Form)`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    gap: 2rem;
`;

export const Title = styled(Col)`
    text-align: center;
    font-size: 20px;
`;

export const ButtonSubmit = styled(Button)`
    width: 100%;
`;