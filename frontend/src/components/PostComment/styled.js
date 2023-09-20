import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

export const SpacedForm = styled(Form)`
    gap: .7rem;
    min-width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: .6rem 2rem;
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 1rem;
    border-radius: .3rem;
`;

export const SubmitButton = styled(Button)`
    font-size: 1.2rem;
`;

export const SmallText = styled.span`
    user-select: none;
    font-weight: 100;
`;