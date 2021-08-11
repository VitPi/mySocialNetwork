//


//


import styles from './Dialog.module.css'
import {Route} from "react-router-dom";
import Message from "./Message/Message";


const Dialog = (props) => {

    let mess = props.message.generatingMessagesInCat.map(i => <Route path={`${/messages/ + i.id}`}
                                                                     render={() => <Message mes={i.message}/>}/>);


    return (
        <div className={styles.block}>
            <Route exact path='/messages' render={() =>
                <div className={styles.circle}>

                </div>
            }/>

            {mess}

            {/*<Message messages={props.message.generatingMessagesInCat}/>*/}


        </div>
    );
};

export default Dialog










































