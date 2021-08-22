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

    // function updatePostList(data) {}

    const postElement = postList.map((post, i) => <Post title={post.title}
                                                        description={post.description}
                                                        price={post.price}
                                                        seller={post.author.username}
                                                        location={post.location} 
                                                        id={post._id}
                                                        key={`post-${i}`}
                                                        updatePostList={updatePostList} />);

    return (
        <div id="post-container">
            {postElement}
        </div>
    )
}

export default Posts;