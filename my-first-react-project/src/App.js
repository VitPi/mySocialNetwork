//


import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Chat from "./components/NavBar/Chat/Chat";
import {BrowserRouter, Route} from "react-router-dom";
import Friends from "./components/NavBar/FriendsList/Friends";
import Setting from "./components/NavBar/Setting/Setting";
import Profile from "./components/NavBar/Profile/Profile";
import Aside from "./components/Aside/Aside";
import News from "./components/NavBar/News/News";


// =========================================================


const App = (props) => {


// debugger

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <Aside/>

                <main className='app-wrapper-contend'>

                    <Route path='/news' component={News}/>
                    <Route path='/messages' render={() =>
                        <Chat messages={props.state.messages}/>
                    }/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/friends' component={Friends}/>
                    <Route path='/setting' component={Setting}/>

                </main>
            </div>
        </BrowserRouter>
    );
}


export default App






























