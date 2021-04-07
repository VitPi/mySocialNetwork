//


//

import like from './img/01.png'
import l from './like.module.css'



const Like = () => {
    return (
        <footer className={l.block}>
            <figure>
                <img src={like} alt="img"/>
                <figcaption>
                    <a href="#">
                        <span>10</span> Likes
                    </a>

                    <a href="#">
                        <span>20</span> Comment
                    </a>

                </figcaption>
            </figure>
        </footer>
    );
};

export default Like;











































