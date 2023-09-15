import { Col } from 'react-bootstrap';
import * as S from "./styled";
import React, { useContext, useEffect, useState } from 'react';
import Post from '../../components/Post';
import { PostsContext } from '../../context/PostsContext';

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    const { listPosts } = useContext(PostsContext);

    async function randomGet(){
        const res = await listPosts();

        setPosts(res);
    }

    useEffect(() => {
        randomGet();
    }, []);

    useEffect(() => {
        console.log(posts);
    }, [posts]);


    return (
        <>
            <S.Content>
                {
                    posts.length > 0 && posts.map(post => {
                        return (
                            <Col>
                                <Post />
                            </Col>
                        )
                    })
                }
            </S.Content>
        </>
    )
}
