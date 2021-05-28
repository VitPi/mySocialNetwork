//


//


import styles from './Dialog.module.css'
import {Route} from "react-router-dom";
import Chat from "./Chat/Chat";


const Dialog = (props) => {


    let a = <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, reprehenderit.</p>;


    return (
        <div className={styles.block}>

            <Route exact path='/messages' render={() =>
                <div className={styles.circle}>

                </div>
            }/>



            <Route path='/messages/1' render={() => <Chat chat={"weaweawewae"}/>}/>
            <Route path='/messages/2' render={() => <Chat chat={"LA LA LA LA"}/>}/>
            <Route path='/messages/3' render={() => <Chat chat={"BLA BLA BLA BLA"}/>}/>


        </div>
    );
};

export default Dialog











































