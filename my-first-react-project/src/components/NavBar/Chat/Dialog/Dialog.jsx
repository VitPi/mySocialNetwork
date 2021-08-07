//


//


import styles from './Dialog.module.css'
import {Route} from "react-router-dom";
import Message from "./Message/Message";


const Dialog = (props) => {


// debugger
    return (
        <div className={styles.block}>
            <Route exact path='/messages' render={() =>
                <div className={styles.circle}>

                </div>
            }/>

            <Message message={props.messages}/>


        </div>
    );
};

export default Dialog










































