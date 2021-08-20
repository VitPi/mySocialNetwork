//


//

import styles from './Form.module.css'
import img from './Loup.svg'


const Form = () => {
    return (
        <form className={styles.form}>
            <input type="type" placeholder={'Search'} className={styles.input}/>
            <img src={img} alt="img" className={styles.loup}/>
        </form>
    );
};

export default Form;










