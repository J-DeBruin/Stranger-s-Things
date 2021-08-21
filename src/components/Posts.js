// This will show all the Posts
// Contains Header, POSTS, followed by text posts, search input, and basic link for Add Post
// then it populates all the different posts
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import API from '../utilities/api';

const BASE_URL = 'https://strangers-things.herokuapp.com';

const Posts = ({postList, setPostList}) => {
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
        <h1>{post.description}</h1>
        <h1>Hello</h1>
    </div>
)

    return <div>{postElement}</div>
}

export default Posts;