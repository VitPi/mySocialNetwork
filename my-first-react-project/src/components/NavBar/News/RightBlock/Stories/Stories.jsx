//


//


import styles from './Stories.module.css'
import Users from "../../../../Aside/Users/Users";


const Stories = () => {

    let friendOnline = [
        {name: 'Pablo Roberts', say: '1 hour ago', ava: 'img/3.jpg'},
        {name: 'Paul King', say: '1 day ago', ava: 'img/2.jpg'},
        {name: 'Yisrael Williams', say: '5 hour ago', ava: 'img/1.jpg'},
        {name: 'Oscar Long', say: '2 hour ago', ava: 'img/4.jpg'},
        {name: 'Franco Smith', say: '2 days ago', ava: 'img/5.jpg'},
        {name: 'Tripp Simmons', say: '6 days ago', ava: 'img/6.jpg'},
        {name: 'Tyrone Barnes', say: '20 hour ago', ava: 'img/7.jpg'},
        {name: 'Daxton Ward', say: '12 hour ago', ava: 'img/8.jpg'},
    ].map(f => <Users name={f.name} say={f.say} ava={f.ava}/>)


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
