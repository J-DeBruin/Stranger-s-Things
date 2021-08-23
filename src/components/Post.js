import React from 'react';
import API from '../utilities/api';

const Post = ({title, description, price, seller, location, id, updatePostList }) => {

    // const [updatePost, setUpdatePost] = useState()

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
                    <button>Edit</button>
                    <button>Delete</button>
                </>
            </div>
        </div>
    )
}

export default Post