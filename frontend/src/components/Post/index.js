
import { Card, CenterComponent, Description, Separator, Title } from "./styled";
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Counter from "../Counter";
import { PostsContext } from "../../context/PostsContext";

export default function Post(props) {
    const { createOrUpdateLike } = useContext(PostsContext);
    return (
        <>
            <Card>
                <Title>{props.title}</Title>
                <Description>{props.content}</Description>
                <Separator>
                    <CenterComponent onClick={() => {createOrUpdateLike(props.key)}}>
                        <Counter></Counter>
                        <FontAwesomeIcon icon={icon({ name: 'thumbs-up' })} />
                    </CenterComponent>
                    <p>
                        Published by: {props.user}
                    </p>
                </Separator>
            </Card>
        </>
    )
}