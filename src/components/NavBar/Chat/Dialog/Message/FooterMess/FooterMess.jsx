//


//

import styles from './FooterMess.module.css'

import img from './angellist.svg'

const FooterMess = () => {


    // let paperclip = <i className="fas fa-paperclip fa-2x fa-flip-vertical "> </i>,
    //     smile = <i className="far fa-smile fa-2x  "> </i>,
    //     mod = `${styles.la}`



  let paperclip = `fas fa-paperclip fa-2x fa-flip-vertical ${styles.la}`,
        smile = `far fa-smile fa-2x ${styles.la} `;



    return (
        <div className={styles.footer}>

            {/*{smile}*/}
            {/*{paperclip}*/}

            <i className={smile} > </i>


            <i className={paperclip} > </i>


            <img src={img} alt="img" className={styles.img}/>

            {/*<label><input type="text" required>Имя</label>*/}
            {/*<label>E-mail<input type="email" required> </label>*/}

            <form action="#">

                <input type="text" placeholder="Type your message" className={styles.formText}/>

            </form>

        </div>
    );
};

export default FooterMess;




