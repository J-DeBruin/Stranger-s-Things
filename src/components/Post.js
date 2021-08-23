import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import API from '../utilities/api';
import EditPost from './Edit';

const Post = ({title, description, price, seller, location, id, updatePostList }) => {

    const [updatePost, setUpdatePost] = useState({});

    function handleUpdate(e) {
        setUpdatePost(e.target.value)
    }

    return (
        <div className="post">
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>Seller: {seller}</p>
                <p>Price: {price}</p>
                <p>Location: {location}</p>
            </div>
            <div className="">
                <>
                    <Link to="/posts/edit/${id}">Edit</Link>
                    <input title={title} description={description} price={price} seller={seller} location={location}></input>
                    <button className="delete">Delete</button>
                </>
            </div>
        </div>
    )
}

export default Post;