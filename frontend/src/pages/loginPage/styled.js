import { Form, Button, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

export const SpacedForm = styled(Form)`
    gap: .7rem;
    min-width: 30%;
    max-width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: .6rem 2rem;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
`;

export const InputText = styled(FormControl)`
    max-width: 100%;
`;

export const FontSize = styled.div`
    font-size: .8rem;
    text-align: center;
`;

export const SubmitButton = styled(Button)`
    font-size: 1.2rem;
`;