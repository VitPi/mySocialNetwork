//


import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Massages from "./components/NavBar/Massages/Massages";
import {BrowserRouter, Route} from "react-router-dom";
import Friends from "./components/NavBar/Friends/Friends";
import Setting from "./components/NavBar/Setting/Setting";
import Profile from "./components/NavBar/Profile/Profile";
import Aside from "./components/Aside/Aside";
import NewsFeed from "./components/NavBar/NewsFeed/NewsFeed";
import Footer from "./components/Footer/Footer";
import Figure from "./components/Figure/Figure";

// =========================================================


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <Aside/>


                <main className='app-wrapper-contend'>
                    <Route path='/newsfeed' component={NewsFeed}/>
                    <Route path='/messages' component={Massages}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/friends' component={Friends}/>
                    <Route path='/setting' component={Setting}/>
                    <Figure/>
                    <Footer/>
                </main>



            </div>
        </BrowserRouter>
    );
}


export default App






























