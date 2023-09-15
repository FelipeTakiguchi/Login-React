import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtdecode from 'jwt-decode';
import axios from 'axios';

export const PostsContext = React.createContext();
PostsContext.displayName = 'Pagamentos';

export const PostProvider = ({ children }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigator = useNavigate();

    async function createPost(title, content){
        const token = jwtdecode(sessionStorage.getItem("token"));

        const post = {
            title: title,
            content: content,
            userId: token.id,
        };
 
        const res = await axios.post('http://127.0.0.1:8080/api/post/', {
            post
        });
    
        console.log(res.data);
        if(res.data.token)
        {
            sessionStorage.setItem("token", res.data.token);
            navigator("/");
        }
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
                listPosts
            }}
        >
            {children}
        </PostsContext.Provider>
    )
}