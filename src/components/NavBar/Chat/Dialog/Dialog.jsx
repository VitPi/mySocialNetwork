//


//


import styles from './Dialog.module.css'
import {Route} from "react-router-dom";
import Message from "./Message/Message";


const Dialog = (props) => {

    let compMessage = props.message.generatingMessagesInCat.map(i => <Route path={`${/messages/ + i.id}`}
                                                                            render={() => <Message/>}/>);


    return (
        <div className={styles.block}>
            <Route exact path='/messages' render={() => <div className={styles.circle}>
            </div>}/>

            {compMessage}


        </div>
    );
};

export default Dialog










































