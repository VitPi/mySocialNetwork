//


import styles from './NawHead.module.css'
import NavItem from "./NavItem/NavItem";
import NavLogo from "./NavLogo/NavLogo";

const NawHead = (props) => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.li}>
                    <NavLogo/>
                </li>

                <li className={styles.li}>
                    <NavItem smile='&#129320;'/>
                </li>

                <li className={styles.li}>
                    <NavItem smile='&#127917;'/>
                </li>

                <li className={styles.li}>
                    <NavItem smile='&#128276;'/>
                </li>

                <li className={styles.li}>
                    <NavItem smile='&#128682;'/>
                </li>
            </ul>
        </nav>
    )
}


export default NawHead

