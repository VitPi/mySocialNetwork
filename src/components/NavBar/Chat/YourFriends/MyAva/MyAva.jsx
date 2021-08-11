//


//


import styles from './MyAva.module.css'
import {NavLink} from "react-router-dom";


const MyAva = () => {

    let img = 'img/myImg.jpg';

    return (
        <NavLink to={'/messages'}>
            <figure className={styles.figure}>
                <img src={img} alt={"logo"}/>
                <figcaption className={styles.figcaption}>
                    <h4>My Name</h4>
                    <p>Lorem ipsum sit.</p>
                </figcaption>
            </figure>
        </NavLink>
    );
};


export default MyAva;














