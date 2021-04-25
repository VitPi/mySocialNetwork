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

{/*<div className="search">*/
}
{/*    <input type="text" className="search-field" placeholder="Введите поисковый запрос или URL">*/
}
{/*        <img src="https://image.flaticon.com/icons/svg/49/49116.svg" alt="" className="search-icon">*/
}
{/*</div>*/
}








