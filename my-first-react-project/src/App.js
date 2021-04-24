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
                    {/*<Figure/>*/}
                    {/*<Footer/>*/}
                </main>
                {/*<Figure/>*/}
                {/*<Footer/>*/}


                {/*<div><h1>bla bla </h1>*/}
                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquid dicta dolore dolorem et id*/}
                {/*        maxime nam nemo nostrum quae, qui sequi soluta ullam vel? Accusamus aut esse eum fuga molestias,*/}
                {/*        odio possimus voluptatem? Aliquid atque commodi cupiditate deserunt dolorum ducimus, facilis*/}
                {/*        ipsa ipsam, iure magni officiis quibusdam quos recusandae soluta vero! Accusamus aspernatur*/}
                {/*        blanditiis corporis culpa eius, eligendi enim est facere fugiat ipsam iste laboriosam magnam*/}
                {/*        maiores nihil omnis optio provident quia quidem quos sapiente sit tenetur, veniam vero!*/}
                {/*        Consectetur corporis est harum id inventore necessitatibus, nisi officia possimus quaerat*/}
                {/*        quisquam similique unde. Ad atque dolores ducimus et laudantium sint voluptatibus. Amet iste*/}
                {/*        magni perferendis quasi saepe! Ad delectus, doloribus enim id incidunt nostrum, odit officiis*/}
                {/*        porro recusandae sint veritatis voluptatibus? Architecto, et eum excepturi harum iure nihil*/}
                {/*        vitae? Culpa ea error ex exercitationem fugit, illo laudantium magni maiores molestias odio*/}
                {/*        officia officiis reiciendis sapiente veniam veritatis voluptatem?</p>*/}
                {/*</div>*/}


            </div>
        </BrowserRouter>
    );
}


export default App






























