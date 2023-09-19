import * as S from "./styled";
import React, { useContext, useEffect, useState } from 'react';
import Post from '../../components/Post';
import { PostsContext } from '../../context/PostsContext';
import jwtDecode from "jwt-decode";

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    const { listPosts } = useContext(PostsContext);

    async function randomGet() {
        const res = await listPosts();
        setPosts(res);
    }

    useEffect(() => {
        randomGet();
    }, []);

    return (
        <>
            <S.Content>
                <S.HorizontalAlign>
                    <h1>Your Feed</h1>
                </S.HorizontalAlign>
                {
                    posts.length > 0 && posts.map((post, index) => {
                        var flag = true;

                        post.likes.map((like) => {
                            if (like === jwtDecode(sessionStorage.getItem("token")).id) {
                                flag = false;
                            }
                            return null;
                        })

                        if (flag) {
                            return <Post key={index} id={post._id} title={post.title} likes={post.likes.length} content={post.content} like={false} user={post.owner} />
                        } else {
                            return <Post key={index} id={post._id} title={post.title} likes={post.likes.length} content={post.content} like={true} user={post.owner} />
                        }
                    })
                }
            </S.Content>
        </>
    )
}
