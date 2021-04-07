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
                    <span>10</span> <p>Likes</p>
                    <span>20</span> <p>Comment</p>
                </figcaption>
            </figure>
        </footer>
    );
};

export default Like;











































