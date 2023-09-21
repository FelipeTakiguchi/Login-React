import React, { useContext, useEffect, useState } from 'react';
import * as S from "./styled";
import Counter from "../Counter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PostsContext } from '../../context/PostsContext';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Comment(props) {
    const { createOrUpdateLike, createLikeComment } = useContext(PostsContext);
    const [like, setLike] = useState(false);
    const [totalLikes, setTotalLikes] = useState(false);

    useEffect(() => { 
        setTotalLikes(props.likes.length);
    }, []);

    function updateLike() {
        setTotalLikes(totalLikes + (like === false ? 1 : -1));
        console.log(props.id)
        createLikeComment(props.postId, props.id);
        setLike(!like);
    }

    return (
        <>
            <section>
                <S.Container>
                    {props.owner}: {props.content}
                    
                    <S.CenterComponent style={like ? { color: "green" } : {}} onClick={updateLike}>
                        <Counter likes={totalLikes}></Counter>
                        <FontAwesomeIcon icon={icon({ name: 'thumbs-up' })} />
                    </S.CenterComponent>
                </S.Container>
            </section>
        </>
    )
}