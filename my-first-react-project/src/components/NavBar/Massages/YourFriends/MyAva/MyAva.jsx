//


//


import s from './MyAva.module.css'


const MyAva = () => {

    let img = 'img/myImg.jpg';

    return (
            <figure className={s.figure}>
                <img src={img} alt={"logo"}/>
                <figcaption className={s.figcaption}>
                    <h4>My Name</h4>
                    <p>Lorem ipsum sit.</p>
                </figcaption>
            </figure>
    );
};

export default MyAva;














