//


import logo from './Logo.module.css'
import {NavLink} from "react-router-dom";
import img from './logo.png'


const Logo = (props) => {
    return (
        <div className={logo.div}>
            <NavLink to=''>    {/* в этой ссылке не меняется Url */}
                <img src={img} alt="img"/>
                <span>SocialV</span>
            </NavLink>
        </div>
    )
}


export default Logo








