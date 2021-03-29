//
//


import s from './Header.module.css';
import Logo from "./Logo/Logo";
import SearchHead from "./SearchHead/SearchHead";
import NawHead from "./NavHead/NawHead";


const Header = () => {
    return (
        <header className={s.header}>
            <Logo/>
            <SearchHead/>
            <NawHead/>
        </header>
    )
}


export default Header







