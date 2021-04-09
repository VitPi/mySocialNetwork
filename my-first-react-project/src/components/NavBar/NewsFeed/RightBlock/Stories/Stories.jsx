//


//


import sto from './Stories.module.css'
import Users from "../../../../Aside/Users/Users";


const Stories = () => {
    return (
        <section className={sto.block}>
            <h4>Stories</h4>
            <hr/>
            <Users name={'Jack Jons'} say={'sfsd'}/>
            <Users name={'Anna Mull'} say={'1 hour ago'}/>
            <Users name={'Ira Membrit'} say={'4 hour ago'}/>
            <Users name={'Bob Frapples'} say={'2 days ago'}/>

            <button>See All</button>
        </section>
    )
}

export default Stories
