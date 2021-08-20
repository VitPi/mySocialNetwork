//


//


import styles from './HeaderMess.module.css'
import Users from "../../../../../Aside/Users/Users";

const HeaderMess = (props) => {


    let phone = `fas fa-phone-alt fa-1x la ${styles.icon}`,
        video = `fas fa-video fa-1x ${styles.icon}`,
        trash = `far fa-trash-alt fa-1x ${styles.icon}`,
        menu = `fas fa-ellipsis-v fa-1x ${styles.icon} `;


    return (
        <div className={styles.head}>

            <Users ava={1}/>

            <div className={styles.blockIcon}>
                <a href="#"><i className={phone}> </i></a>
                <a href="#"><i className={video}> </i></a>
                <a href="#"><i className={trash}> </i></a>
                <a href="#"><i className={menu}> </i></a>
            </div>


        </div>
    );
};

export default HeaderMess;



























