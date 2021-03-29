import aside from './Aside.module.css'
import Users from "./Users/Users";


const Aside = () => {
    return (
        <aside className={aside.block}>
            <h2>Friends Online</h2>
            <div>
                <Users/>
                <Users/>
                <Users/>


                


            </div>
        </aside>
    )
}


export default Aside

