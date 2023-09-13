import { Col, Container, Row } from 'react-bootstrap';
import * as S from "./styled";
import { useCallback, useState } from 'react';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React  from 'react';

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigator = useNavigate();

    const handlePost = useCallback(async () => {
        navigator("/");
    }, [title, content]);

    return (
        <>
            <section>
                <Container>
                    <S.SpacedForm>
                        <h2>NEW POST</h2>
                        <S.InputText type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)}></S.InputText>
                        <S.TextArea type="" placeholder='Content' onChange={(e) => setContent(e.target.value)}></S.TextArea>
                        <S.SubmitButton onClick={handlePost}>Post</S.SubmitButton>
                    </S.SpacedForm>
                </Container>
            </section>
        </>
    )
}
