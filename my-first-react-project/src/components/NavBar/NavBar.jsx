//


//


import style from './NavBar.module.css';
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.bla}>
                <li>
                    <NavLink to={"/news"} activeClassName={style.colorLink}>News</NavLink>
                </li>
                <li>
                    <NavLink to={"/messages"} activeClassName={style.colorLink}>Chat</NavLink>
                </li>
                <li>
                    <NavLink to={"/profile"} activeClassName={style.colorLink}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to={"/friends"} activeClassName={style.colorLink}>Friends List</NavLink>
                </li>
                <li>
                    <NavLink to={"/setting"} activeClassName={style.colorLink}>Setting</NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default NavBar






