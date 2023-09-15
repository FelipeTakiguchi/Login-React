import { Container } from 'react-bootstrap';
import * as S from "./styled";
import { useContext, useState } from 'react';
import React  from 'react';
import { PostsContext } from '../../context/PostsContext';

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { createPost } = useContext(PostsContext);

    return (
        <>
            <section>
                <Container>
                    <S.SpacedForm>
                        <h2>NEW POST</h2>
                        <S.InputText type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)}></S.InputText>
                        <S.TextArea type="" placeholder='Content' onChange={(e) => setContent(e.target.value)}></S.TextArea>
                        <S.SubmitButton onClick={() => createPost(title, content)}>Post</S.SubmitButton>
                    </S.SpacedForm>
                </Container>
            </section>
        </>
    )
}
