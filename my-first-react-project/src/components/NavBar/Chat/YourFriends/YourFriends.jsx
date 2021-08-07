//


//


import s from './YourFriends.module.css'
import MyAva from "./MyAva/MyAva";
import Form from "./Form/Form";
import ListFriends from "./ListFriends/ListFriends";


const YourFriends = () => {


    return (
        <div className={s.block}>
            <MyAva/>
            <Form/>
            <ListFriends/>

        </div>
    );
};


export default YourFriends;















