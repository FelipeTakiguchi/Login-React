import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtdecode from 'jwt-decode';
import axios from 'axios';

export const PostsContext = React.createContext();
PostsContext.displayName = 'Posts';

export const PostProvider = ({ children }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [allPosts, setAllPosts] = useState([]);
    const navigator = useNavigate();

    async function createPost(title, content) {
        const token = jwtdecode(sessionStorage.getItem("token"));
        const res1 = await axios.get('http://127.0.0.1:8080/api/auth/' + token.id);

        const post = {
            title: title,
            content: content,
            owner: res1.data.name,
        };

        const res2 = await axios.post('http://127.0.0.1:8080/api/post/', {
            post
        });

        if (res2.data) {
            navigator("/");
        }
    }

    async function createOrUpdateLike(postId) {
        const token = jwtdecode(sessionStorage.getItem("token")).id;
        await axios.patch('http://127.0.0.1:8080/api/post/likes/' + postId, { token });
    }

    async function createComment(postId, content) {
        const owner = jwtdecode(sessionStorage.getItem("token")).name;
        const res = await axios.post('http://127.0.0.1:8080/api/comment/', { postId, owner, content });

        if (res.data) {
            setAllPosts((prevAllPosts) => {
                return prevAllPosts.map((post) => {
                    if (post.id === res.data.body.id) {
                        return { ...post, comments: res.data.body.comments };
                    }
                    return post;
                });
            });
        }
    }

    async function listComments(comments) {
        const res = await axios.post('http://127.0.0.1:8080/api/comment/list', { comments });

        if (res.data) {
            return res.data.data;
        }

        return null;
    }

    async function listPosts() {
        const posts = await axios.get('http://127.0.0.1:8080/api/post/');
        setAllPosts(posts.data.data);
        return posts.data.data;
    }

    return (
        <PostsContext.Provider
            value={{
                title, content, allPosts,
                setTitle, setContent,
                createPost,
                listPosts,
                createOrUpdateLike,
                createComment,
                listComments
            }}
        >
            {children}
        </PostsContext.Provider>
    )
}