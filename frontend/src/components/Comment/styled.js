import styled from 'styled-components';

export const Container = styled.div`
    background-color: #CDF7F6;
    margin: .5rem;
    padding: .5rem;
    border-radius: .6rem;
    font-size: .75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CenterComponent = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    padding: .6rem;
    background-color: #DAE0F2;
    font-size: .8rem;
    border-radius: 1rem;
    &:hover{
        cursor: pointer;
        filter: brightness(.75);
        transition: .2s;
    }
`;