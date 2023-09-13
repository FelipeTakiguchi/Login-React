import { Form, Button, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

export const SpacedForm = styled(Form)`
    gap: .7rem;
    min-width: 32rem;
    max-width: 34rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: .6rem 2rem;
    margin: 10% 28% 0%;
`;

export const InputText = styled(FormControl)`
    max-width: 30rem;
`;

export const SubmitButton = styled(Button)`
    font-size: 1.2rem;
`;