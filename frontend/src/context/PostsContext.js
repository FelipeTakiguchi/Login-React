import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtdecode from 'jwt-decode';
import axios from 'axios';

export const PostsContext = React.createContext();
PostsContext.displayName = 'Posts';

export const PostProvider = ({ children }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigator = useNavigate();

    async function createPost(title, content){
        const token = jwtdecode(sessionStorage.getItem("token"));
        const res1 = await axios.get('http://127.0.0.1:8080/api/auth/'+token.id);
        console.log(res1)

        const post = {
            title: title,
            content: content,
            owner: res1.data.name,
        };
        console.log(post)
 
        const res2 = await axios.post('http://127.0.0.1:8080/api/post/', {
            post
        });
    
        if(res2.data)
        {
            navigator("/");
        }
    }

    async function createOrUpdateLike(postId){
        const token = jwtdecode(sessionStorage.getItem("token")).id;
 
        const res = await axios.patch('http://127.0.0.1:8080/api/post/likes/'+postId, {token});
        console.log(res);
    }

    async function listPosts(){
        const posts = await axios.get('http://127.0.0.1:8080/api/post/');
        return posts.data.data;
    }

    return(
        <PostsContext.Provider
            value={{
                title, content,
                setTitle, setContent,
                createPost,
                listPosts,
                createOrUpdateLike
            }}
        >
            {children}
        </PostsContext.Provider>
    )
}