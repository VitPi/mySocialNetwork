//


//


import style from './Message.module.css'
import FooterMess from "./FooterMess/FooterMess";
import HeaderMess from "./HeaderMess/HeaderMess";
import MainMess from "./MainMess/MainMess";


const Message = (props) => {

// debugger


    return (
        <article className={style.block}>

            <HeaderMess/>

            <MainMess/>

            <FooterMess />


        </article>
    );
};

export default Message;











































