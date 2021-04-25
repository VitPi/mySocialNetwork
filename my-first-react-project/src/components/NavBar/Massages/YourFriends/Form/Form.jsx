//


//

import s from './Form.module.css'


const Form = () => {

    let loup = 'img/Loup.svg'

    return (

        <form className={s.form}>

            <input type="type" placeholder={'Search'} className={s.input}/>

            <img src={loup} alt="" className={s.loup}/>

        </form>

    );
};

export default Form;










