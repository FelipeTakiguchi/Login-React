import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import * as S from "./styled";
import { PostsContext } from '../../context/PostsContext';

export default function Comment(props) {
    const [content, setContent] = useState('');
    const { createComment } = useContext(PostsContext);

    return (
        <>
            <section>
                <Container>
                    <S.SpacedForm>
                        <S.SmallText>Leave a comment</S.SmallText>
                        <S.TextArea type="" placeholder='Content' onChange={(e) => setContent(e.target.value)}></S.TextArea>
                        <S.SubmitButton onClick={() => createComment(props.id, content)}>Send</S.SubmitButton>
                    </S.SpacedForm>
                </Container>
            </section>
        </>
    )
}