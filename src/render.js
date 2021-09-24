//

//


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addNewPostPage, updatePostText} from "./redux/state";
import reportWebVitals from "./reportWebVitals";


export function rerenderEntireTree(state) {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addNewPostPage={addNewPostPage} updatePostText={updatePostText}/>
            </React.StrictMode>
        </BrowserRouter>, document.getElementById('root'));
}


reportWebVitals();













