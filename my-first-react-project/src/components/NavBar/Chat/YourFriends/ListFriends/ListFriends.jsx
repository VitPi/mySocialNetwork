//


//


import s from './ListFriends.module.css';
import Users from "../../../../Aside/Users/Users";
import {NavLink} from "react-router-dom";


const ListFriends = (props) => {


    let friend = [
        {name: 'Samson Lee', say: 'Online', ava: 'img/8.jpg', id: 1},
        {name: 'Nikolas Evans', say: 'Online', ava: 'img/5.jpg', id: 2},
        {name: 'Pierce Foster', say: 'Online', ava: 'img/13.jpg', id: 3},
        {name: 'Conor Turner', say: 'Online', ava: 'img/3.jpg', id: 4},
        {name: 'Cash Martinez', say: 'Online', ava: 'img/10.jpg', id: 5},
        {name: 'Tyrone Walker', say: 'Online', ava: 'img/2.jpg', id: 6},
        {name: 'Abel Jackson', say: 'Online', ava: 'img/1.jpg', id: 7},
        {name: 'Uthman Alexander', say: 'Online', ava: 'img/4.jpg', id: 8},
        {name: 'Matthew Gray', say: 'Online', ava: 'img/9.jpg', id: 9},
        {name: 'Ignace Taylor', say: 'Online', ava: 'img/13.jpg', id: 10},
        {name: 'Jameson Collins', say: 'Online', ava: 'img/6.jpg', id: 11},
        {name: 'Samson Lee', say: 'Online', ava: 'img/8.jpg', id: 12},
        {name: 'Nikolas Evans', say: 'Online', ava: 'img/5.jpg', id: 13},
        {name: 'Hank Smith', say: 'Online', ava: 'img/3.jpg', id: 14},

    ].map(f => <NavLink to={`${/messages/ + f.id}`}><Users name={f.name} say={f.say} ava={f.ava}/></NavLink>);


    return (
        <section className={s.block}>

            <h3>Public Channels</h3>

            <hr/>

            {friend}

        </section>
    );
};


export default ListFriends;



































