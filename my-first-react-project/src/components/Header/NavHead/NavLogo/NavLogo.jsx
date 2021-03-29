//


//

import log from './NavLogo.module.css'
import img from './no1.jpg'
//


const NavLogo = () => {
    return (
        <a href="#" className={log.log}>
            <img src={img} alt="img"/>
            <span>My name</span>
        </a>
    )
}

export default NavLogo
