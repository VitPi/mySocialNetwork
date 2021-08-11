//


//


import styles from './Stories.module.css'
import Users from "../../../../Aside/Users/Users";


const Stories = (props) => {

    let friendOnline = props.friend.map(f => <Users name={f.name} say={f.say} ava={f.ava}/>);


    return (
        <section className={styles.block}>
            <h4>Stories</h4>
            <hr/>


            {friendOnline}


            <button>See All</button>
        </section>
    )
}

export default Stories
