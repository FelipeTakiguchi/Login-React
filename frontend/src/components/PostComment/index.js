import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import * as S from "./styled";
import { PostsContext } from '../../context/PostsContext';

export default function PostComment(props) {
    const [content, setContent] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);
    const { createComment } = useContext(PostsContext);

    function handleButtonClick() {
        createComment(props.id, content);
        setContent('');
        setButtonClicked(true);
    }

    return ( 
        <>
            <section>
                <Container>
                    <S.SpacedForm>
                        <S.SmallText>Leave a comment</S.SmallText>
                        <S.TextArea
                            type=""
                            placeholder='Content'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <S.SubmitButton
                            onClick={() => handleButtonClick()}
                        >
                            Send
                        </S.SubmitButton>
                    </S.SpacedForm>
                </Container>
            </section>
        </>
    )
}