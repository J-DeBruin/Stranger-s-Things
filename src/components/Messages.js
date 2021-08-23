import React from "react";
import ReactDOM from "react-dom";
import Posts from "./Posts";
import Login from "./Login";

const Messages = () => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text'
                        required
                        name='message'
                        value={user.message}
                        onChange={handleInput}
                        placeholder='message'/>
                <button>Send</button>
            </form>
        </div>
    )
}

export default Messages;