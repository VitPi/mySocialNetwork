//

//


import style from './Chat.module.css'
import YourFriends from "./YourFriends/YourFriends";
import Dialog from "./Dialog/Dialog";


const Chat = (props) => {

// debugger

    return (
        <div className={style.dialog}>
            <YourFriends chatPage={props.chatPage}/>
            <Dialog message={props.chatPage}/>
        </div>
    )
}


export default Chat



