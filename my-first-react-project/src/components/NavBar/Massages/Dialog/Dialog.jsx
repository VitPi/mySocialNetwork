//


//


import s from './Dialog.module.css'
import {Route} from "react-router-dom";
import Chat from "./Chat/Chat";




const Dialog = (props) => {
    return (
        <div className={s.block}>

            <Route path='/messages/1' component={Chat}/>


        </div>
    );
};

export default Dialog;








































