//


//

import like from './img/01.png'
import l from './like.module.css'
import Users from "../../../../../Aside/Users/Users";


let objUser = [
    {name: 'Royal Clark', say: '4 hour ago',ava: '/img/2.jpg'},
    {name: 'Keith Flores', say: '2 yer ago', ava: '/img/4.jpg'},
].map(u => <Users name={u.name} say={u.say} ava={u.ava}/>)


const Like = (props) => {
    return (
        <footer className={l.block}>
            <figure>
                <img src={like} alt="img"/>
                <figcaption className={l.fig}>
                    <a href="#">
                        <span>{props.like}</span> Likes
                    </a>

                    <a href="#">
                        <span>{props.comment}</span> Comment
                    </a>

                </figcaption>
            </figure>

            {objUser}


        </footer>
    );
};

export default Like;













































