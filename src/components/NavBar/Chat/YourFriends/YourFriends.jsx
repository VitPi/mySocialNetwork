//


//


import s from './YourFriends.module.css'
import MyAva from "./MyAva/MyAva";
import Form from "./Form/Form";
import ListFriends from "./ListFriends/ListFriends";


const YourFriends = (props) => {


    // debugger


    return (
        <div className={s.block}>
            <MyAva/>
            <Form/>
            <ListFriends chatFriends={props.chatPage.friendsList }/>

        </div>
    );
};


export default YourFriends;















