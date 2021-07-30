//
//


import styles from './Header.module.css';
import Logo from "./Logo/Logo";
import SearchHead from "./SearchHead/SearchHead";
import NawHead from "./NavHead/NawHead";


const Header = () => {
    return (
        <header className={styles.header}>
            <Logo/>
            <SearchHead/>
            <NawHead/>
        </header>
    )
}


export default Header







