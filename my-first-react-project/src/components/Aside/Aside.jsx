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

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cumque delectus dolorem dolores
                    facere ipsa iure magni, maiores mollitia nemo neque, perspiciatis placeat possimus quos rerum
                    similique sint suscipit tenetur ullam voluptates. Cupiditate eaque excepturi impedit laudantium
                    minima omnis, qui quidem soluta. Atque commodi cupiditate eligendi excepturi quisquam soluta ut.</p>


                <Users/>
                <Users/>
                <Users/>
                <Users/>
                <Users/>
                <Users/>
                <Users/>
                <Users/>
                <Users/>
                <Users/>
                <Users/>
                <Users/>
                <Users/>
                <Users/>
                <Users/>
                <Users/>
                <Users/>
                <Users/>
            </div>
        </aside>
    )
}


export default Aside

