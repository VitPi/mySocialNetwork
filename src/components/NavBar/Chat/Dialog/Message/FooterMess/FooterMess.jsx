//


//

import styles from './FooterMess.module.css'


const FooterMess = () => {


    let paperclip = `fas fa-paperclip fa-15x fa-flip-vertical ${styles.la}`,
        smile = `far fa-smile fa-15x ${styles.la} `;


    return (
        <div className={styles.footer}>
            <i className={smile}> </i>
            <i className={paperclip}> </i>
            <form action="#">
                <input type="text" placeholder="Type your message" className={styles.formText}/>
                <input type="submit" value={'Send'} className={styles.send}/>
            </form>
        </div>
    );
};

export default FooterMess;




