//


//


import aside from './Aside.module.css'
import Users from "./Users/Users"

const Aside = (props) => {


    let friendsOnline = props.asidePage.friendOnline.map(f => <Users name={f.name} say={f.say} ava={f.ava}/>);


    return (
        <aside className={aside.block}>
            <h2>Friends Online</h2>
            <div>

                {friendsOnline}


            </div>
        </aside>
    )


}


export default Aside



