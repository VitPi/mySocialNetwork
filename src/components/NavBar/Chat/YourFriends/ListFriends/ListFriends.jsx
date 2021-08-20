//


//


import styles from './ListFriends.module.css';
import Users from "../../../../Aside/Users/Users";
import {NavLink} from "react-router-dom";


let friend


const ListFriends = (props) => {

// debugger

    friend = props.chatFriends.map(f => <NavLink to={`${/messages/ + f.id}`}><Users name={f.name} say={f.say}
                                                                                    ava={f.ava}/></NavLink>);



    return (
        <section className={styles.block}>

            <h3>Public Channels</h3>

            <hr/>

            {friend}

        </section>
    );
};


export default ListFriends;



































