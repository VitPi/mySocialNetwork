//


//


import style from './NavBar.module.css';
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.ul}>
                <li>
                    <NavLink to={"/news"} activeClassName={style.colorLink}>
                        <i className="far fa-newspaper fa-15x"> </i>
                        <span>News</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/messages"} activeClassName={style.colorLink}>
                        <i className="fab fa-rocketchat fa-15x"> </i>
                        <span>Chat</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/profile"} activeClassName={style.colorLink}>
                        <i className="fab fa-mailchimp fa-15x"> </i>
                        <span>Profile</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/friends"} activeClassName={style.colorLink}>
                        <i className="fas fa-user-friends fa-15x"> </i>
                        <span>Friends</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/setting"} activeClassName={style.colorLink}>
                        <i className="fas fa-cogs  fa-15x"> </i>
                        <span>Setting</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default NavBar






