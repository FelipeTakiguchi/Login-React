
import { Card, CenterComponent, Description, Title } from "./styled";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Counter from "../Counter";

export default function Post() {
    return (
        <>
            <Card>
                <Title>Teste</Title>
                <Description>Descricao do teste</Description>
                <CenterComponent>
                    <Counter></Counter>
                    <FontAwesomeIcon icon={icon({ name: 'thumbs-up' })} />
                </CenterComponent>
            </Card>
        </>
    )
}