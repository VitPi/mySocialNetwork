//


import styles from './NawHead.module.css'
import NavLogo from "./NavLogo/NavLogo";

const NawHead = (props) => {
    return (
        <nav className={styles.nav}>


            <ul>
                <NavLogo/>

                <li className={styles.li}>
                    <a href="#"> <i className="fas fa-home fa-15x fa-inverse"> </i></a>
                </li>
                <li className={styles.li}>
                    <a href="#"> <i className="fas fa-users fa-15x fa-inverse "> </i></a>
                </li>

                <li className={styles.li}>
                    <a href="#"><i className="far fa-bell fa-15x fa-inverse "> </i></a>
                </li>

                <li className={styles.li}>
                    <a href="#"><i className="far fa-envelope fa-15x fa-inverse "> </i> </a>
                </li>
                <li className={styles.li}>
                    <a href="#"> <i className="fas fa-angle-down fa-15x fa-inverse "> </i></a>
                </li>
            </ul>
        </nav>
    )
}


export default NawHead

