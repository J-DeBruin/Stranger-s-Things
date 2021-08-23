// import React, { useState } from 'react';
// import { useHistory, Link } from 'react-router-dom';

// import API from '../utilities/api';

// //This will be a link in the Posts page for adding new post
// //New post page is a form that needs: 3 text input (Title, Description, and Location)
// //  and 1 numerical (Price)
// //  and checkbox for "Willing to Deliver"
// //  and button "Create"

// const EditPost = () => {
//     const defaultState = {title: '', description: '', price: '', location:''};
//     const [post, setPost] = useState(defaultState);
//     // const [description, setDescription] = useState('');
//     // const [title, setTitle] = useState('');
//     // const [location, setLocation] = useState('');

//     let history = useHistory();

//     function handleChange(e, stateKey) {
//         // if(stateKey === 'title') {
//         //     setTitle(e.target.value);
//         // } else if (stateKey === 'description') {
//         //     setDescription(e.target.value);
//         // } else if (stateKey === 'location') {
//         //     setLocation(e.target.value);
//         // }
        
//         const newState = {...post};
        
//         let value = e.target.value;
        
//         // if (stateKey === 'price') {
//         //     value = Number(value);
//         // }
        
//         newState[stateKey] = e.target.value;
//         setPost(newState);
//         console.log(post);
//     }
    
//     async function onSubmit(e) {
//         e.preventDefault();
//         // {name, type, amount}
//         await API.makeRequest('/posts/{id}', 'PUT', post);
//         history.push('/Posts');
//     }

//     return (
//         <div id="post-form-container">
//             <form onSubmit={onSubmit}>
//                 <div>
//                     <label>Title:</label>
//                     <input onChange={e => handleChange(e, 'title')} value={post.title} type="text" />
//                 </div>
//                 <div>
//                     <label>Description:</label>
//                     <input onChange={e => handleChange(e, 'description')} value={post.description} type="text" />
//                 </div>
//                 <div>
//                     <label>Price:</label>
//                     <input onChange={e => handleChange(e, 'price')} value={post.price} type="text" />
//                 </div>
//                 <div>
//                     <label>Location:</label>
//                     <input onChange={e => handleChange(e, 'location')} value={post.location} type="text" />
//                 </div>
//                 <div>
//                     <button>Submit</button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default EditPost;