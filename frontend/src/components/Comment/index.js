import React from 'react';
import { Container } from 'react-bootstrap';
import * as S from "./styled";

export default function Comment(props) {
    return (
        <>
            <section>
                <S.Container>
                    {props.owner}: {props.content}
                </S.Container>
            </section>
        </>
    )
}