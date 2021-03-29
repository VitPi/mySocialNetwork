//


//


import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.bla}>
                <li>
                    <NavLink to="/newsfeed" activeClassName={s.colorLink}>News Feed</NavLink>
                </li>
                <li>
                    <NavLink to="/messages" activeClassName={s.colorLink}>Messages</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" activeClassName={s.colorLink}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/friends" activeClassName={s.colorLink}>Friends List</NavLink>
                </li>
                <li>
                    <NavLink to="/setting" activeClassName={s.colorLink}>Setting</NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default NavBar






