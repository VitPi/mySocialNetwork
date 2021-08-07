//


//


import style from './Message.module.css'
import {Route} from "react-router-dom";


const Message = (props) => {


    // отслеживание url и отоброжение сообщения
    let message = props.message.map(i => <Route path={`${/messages/ + i.id}`}
                                                render={() => i.message}/>);
    // ----------------------------------------------------------------------------

console.log(message)

    // debugger
    return (
        <div className={style.block}>


            <p>{message}</p>


        </div>
    );
};

export default Message;











































