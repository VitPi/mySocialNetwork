
//

import naw from './NavItem.module.css'

const NavItem =(props)=>{
    return(
        <a href="#" className={naw.a}>
            {props.smile}
        </a>
    )
}


export default NavItem
