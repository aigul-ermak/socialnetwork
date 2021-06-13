import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, subsciber, updateNewPostText} from './Redux/State';
import {BrowserRouter} from 'react-router-dom';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);

subsciber(rerenderEntireTree);




