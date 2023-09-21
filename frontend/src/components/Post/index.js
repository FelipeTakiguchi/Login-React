import { Card, CenterComponent, Description, FlipIcon, HorizontalAlign, Separator, Title, ListAlign } from "./styled";
import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Counter from "../Counter";
import { PostsContext } from "../../context/PostsContext";
import PostComment from "../PostComment";
import Comment from "../Comment";

export default function Post(props) {
    const { createOrUpdateLike } = useContext(PostsContext);
    const [like, setLike] = useState(false);
    const [totalLikes, setTotalLikes] = useState(false);
    const [iconRotation, setIconRotation] = useState(0);
    const [showComments, setShowComments] = useState(false);
    
    async function flipIcon() {
        setIconRotation(iconRotation + 180);
        setShowComments(!showComments);
    }

    useEffect(() => {
        setLike(props.like);
        setTotalLikes(props.likes);
    }, []);

    function updateLike() {
        setTotalLikes(totalLikes + (like === false ? 1 : -1));
        createOrUpdateLike(props.id);
        setLike(!like);
    }

    return (
        <>
            <Title>{props.title}</Title>
            <Card>
                <Description>{props.content}</Description>
                <Separator>
                    <CenterComponent style={like ? { color: "green" } : {}} onClick={updateLike}>
                        <Counter likes={totalLikes}></Counter>
                        <FontAwesomeIcon icon={icon({ name: 'thumbs-up' })} />
                    </CenterComponent>
                    <span>
                        Published by: {props.user}
                    </span>
                </Separator>
                <hr></hr>
                <HorizontalAlign>
                    <FlipIcon
                        icon={icon({ name: 'arrow-up' })}
                        onClick={() => {
                            flipIcon();
                        }}
                        style={{
                            transform: `rotate(${iconRotation}deg)`,
                        }}
                    />
                </HorizontalAlign>
                <ListAlign>
                    {
                        showComments && <h4>Comments</h4>
                    }
                    {
                        showComments && props.comments.length > 0 && props.comments.map((comment, index) => {
                            return <Comment key={index} id={comment.id} postId={props.id} owner={comment.owner} content={comment.content} likes={comment.likes}></Comment>
                        })
                    }
                </ListAlign>
                {
                    showComments && <PostComment id={props.id}></PostComment>
                }
            </Card>
        </>
    )
}