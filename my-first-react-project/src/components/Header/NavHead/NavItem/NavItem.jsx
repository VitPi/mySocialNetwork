
//

import styles from './NavItem.module.css'

const NavItem =(props)=>{
    return(
        <a href="#" className={styles.a}>
            {props.smile}
        </a>
    )
}


export default NavItem
