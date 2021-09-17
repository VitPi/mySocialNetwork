//


import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Chat from "./components/NavBar/Chat/Chat";
import {Route} from "react-router-dom";
import Friends from "./components/NavBar/Friends/Friends";
import Setting from "./components/NavBar/Setting/Setting";
import Profile from "./components/NavBar/Profile/Profile";
import Aside from "./components/Aside/Aside";
import News from "./components/NavBar/News/News";
import React from './iconsfont/css/all.css'


// =========================================================


const App = (props) => {

// debugger

    return (

        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <Aside asidePage={props.state.asidePage}/>

            <main className='app-wrapper-contend'>

                <Route path='/news' render={() => <News newsPage={props.state.nawBarPage.newsPage} addNewPostPage={props.addNewPostPage}/>}/>

                <Route path='/messages' render={() => <Chat chatPage={props.state.nawBarPage.chatPage}/>}/>

                <Route path='/profile' render={() => <Profile/>}/>

                <Route path='/friends' render={() => <Friends friendsPage={props.state.nawBarPage.friendsPage}/>}/>

                <Route path='/setting' render={() => <Setting/>}/>

            </main>
        </div>
    );
}


export default App























