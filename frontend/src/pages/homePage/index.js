import * as S from "./styled";
import React, { useCallback, useContext, useEffect } from 'react';
import Post from '../../components/Post';
import { PostsContext } from '../../context/PostsContext';
import jwtDecode from "jwt-decode";
import NavBar from "../../components/NavBar";

export default function HomePage() {
    const { listPosts, allPosts } = useContext(PostsContext);

    async function randomGet() {
        await listPosts();
    }

    useEffect(() => {
        randomGet();
    }, []);

    const render = useCallback(renderPosts(), [allPosts]);

    function renderPosts() {
        return(
            allPosts.length > 0 && allPosts.map((post, index) => {
                var flag = true;

                post.likes.map((like) => {
                    if (like === jwtDecode(sessionStorage.getItem("token")).id) {
                        flag = false;
                    }
                    return null;
                })

                if (flag) {
                    return <Post key={index} id={post._id} title={post.title} likes={post.likes.length} content={post.content} like={false} user={post.owner} comments={post.comments} />
                } else {
                    return <Post key={index} id={post._id} title={post.title} likes={post.likes.length} content={post.content} like={true} user={post.owner} comments={post.comments} />
                }
            })
        )
    }

    return (
        <>
            <NavBar />
            <S.Pad>
            <S.Content>
                <S.HorizontalAlign>
                    <h1>Your Feed</h1>
                </S.HorizontalAlign>
                {
                    render
                }
            </S.Content>

            </S.Pad>
        </>
    )
}
