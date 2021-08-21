// This will show all the Posts
// Contains Header, POSTS, followed by text posts, search input, and basic link for Add Post
// then it populates all the different posts
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import API from '../utilities/api';


const Posts = () => {

    const [postList, setPostList] = useState([]); 

    useEffect( async function () {
        try {
            const data = await API.makeRequest(`/api/2105-OKU-RM-WEB-PT/posts`, 'GET');
            console.log(data);
            setPostList(data.data.posts);
        } catch (error) {
            console.error(error);
        }
    }, []);

    console.log(postList);

    const postElement = postList.map((post) => 
        <div>
            <h1>Title: {post.title}</h1>
            <h2>Description: {post.description}</h2>
        </div>
    )

    return (
        <div>
            {postElement}
        </div>
    )
}

export default Posts;