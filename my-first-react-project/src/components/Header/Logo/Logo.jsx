//


import logo from './Logo.module.css'
import {NavLink} from "react-router-dom";


const Logo = (props) => {
    return (
        <div className={logo.div}>
            <NavLink to='lkn;kb'>    {/* в этой ссылке не меняется Url */}
                <img src="img/logo.png" alt="img"/>
                <span>SocialV</span>
            </NavLink>
        </div>
    )
}


export default Logo








