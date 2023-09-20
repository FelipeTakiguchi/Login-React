import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtdecode from 'jwt-decode';
import axios from 'axios';

export const PostsContext = React.createContext();
PostsContext.displayName = 'Posts';

export const PostProvider = ({ children }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [posts, setPosts] = useState([]);
    const navigator = useNavigate();

    async function createPost(title, content){
        const token = jwtdecode(sessionStorage.getItem("token"));
        const res1 = await axios.get('http://127.0.0.1:8080/api/auth/'+token.id);

        const post = {
            title: title,
            content: content,
            owner: res1.data.name,
        };
 
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
        await axios.patch('http://127.0.0.1:8080/api/post/likes/'+postId, {token});
    }

    async function createComment(postId, content){
        const owner = jwtdecode(sessionStorage.getItem("token")).name;
        const res = await axios.post('http://127.0.0.1:8080/api/comment/', {postId, owner, content});
        console.log(res.data.body);


        if(res.data){

        }
    }

    async function listComments(comments)
    {
        const res = await axios.post('http://127.0.0.1:8080/api/comment/list', {comments});

        if(res.data){
            return res.data.data;
        }

        return null;
    }

    async function listPosts(){
        const posts = await axios.get('http://127.0.0.1:8080/api/post/');
        setPosts(posts);
        console.log(posts);
        return posts.data.data;
    }

    return(
        <PostsContext.Provider
            value={{
                title, content,
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