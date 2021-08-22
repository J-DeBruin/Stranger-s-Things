// import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';

// import API from '../utilities/api';
// import TokenUtilities from '../utilities/token';

// function RegistrationForm(props) {
//     const [user , setUser] = useState({
//         username : "",
//         password : ""
//     })

//     const handleChange = (e) => {
//         const {id , value} = e.target   
//         setUser(prevState => ({
//             ...prevState,
//             [id] : value
//         }))
//     }

//     const handleSubmitClick = (e) => {
//         e.preventDefault();
//         if(user.password === user.confirmPassword) {
//             sendDetailsToServer()    
//         } else {
//             props.showError('Passwords do not match');
//         }
//     }

//     const sendDetailsToServer = async () => {
//         if(user.username.length && user.password.length) {
//             props.showError(null);
//             const user={
//                 "username":user.username,
//                 "password":user.password,
//             }
//             // axios.post(API_BASE_URL+'/user/register', payload)
//             //     .then(function (response) {
//             //         if(response.status === 200){
//             //             setState(prevState => ({
//             //                 ...prevState,
//             //                 'successMessage' : 'Registration successful. Redirecting to home page..'
//             //             }))
//             //             redirectToHome();
//             //             props.showError(null)
//             //         } else{
//             //             props.showError("Some error ocurred");
//             //         }
//             //     })
//             //     .catch(function (error) {
//             //         console.log(error);
//             //     });    
//             //     } else {
//             //         props.showError('Please enter valid username and password')    
//             //     }
//             try{
//                 const data = await API.makeRequest('/api/2105-OKU-RM-WEB-PT/users/register', 'POST', user);
//                 TokenUtilities.setToken(data.token);
//                 setToken(data.token);
//             } catch (error){
//                 alert(error);
//             } finally {
//                 history.push("/");
//             }
//     }

//     return(
//           <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
//               <form>
//                   <div className="form-group text-left">
//                   <label htmlFor="username">Username</label>
//                   <input type="username" 
//                          className="form-control" 
//                          id="username" 
//                          aria-describedby="usernameHelp" 
//                          placeholder="Enter username"
//                          value={user.username}
//                          onChange={handleChange}
//                   />
//                   <small id="usernameHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//                   </div>
//                   <div className="form-group text-left">
//                       <label htmlFor="exampleInputPassword1">Password</label>
//                       <input type="password" 
//                           className="form-control" 
//                           id="password" 
//                           placeholder="Password"
//                           value={user.password}
//                           onChange={handleChange}
//                       />
//                   </div>
//                   <div className="form-group text-left">
//                       <label htmlFor="exampleInputPassword1">Confirm Password</label>
//                       <input type="password" 
//                           className="form-control" 
//                           id="confirmPassword" 
//                           placeholder="Confirm Password"
//                       />
//                   </div>
//                   <button 
//                       type="submit" 
//                       className="btn btn-primary"
//                       onSubmit={handleSubmitClick}
//                   >
//                       Register
//                   </button>
//               </form>
//           </div>
//       )
//   }
// }
// // export default Register;