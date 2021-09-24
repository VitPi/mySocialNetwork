//


//


import style from './CreatePost.module.css'
import img from './img/no1.jpg'
import img1 from './img/07.png'
import img2 from './img/08.png'
import img3 from './img/09.png'

import React from "react";


const CreatePost = (props) => {

    let newText = React.createRef();

    function addPost() {
        props.addNewPostPage();
    }

    let onPOst = () => {
        let text = newText.current.value;
        props.updatePostText(text);
    }

    return (
        <article className={style.block}>
            <h4>Create Post</h4>
            <hr/>
            <figure>
                <img src={img} alt="icon" className={style.img}/>
                <figcaption>
                    <textarea className={style.text} onChange={onPOst} ref={newText} value={props.newText}/>
                    <button className={style.but} onClick={addPost}>Post</button>
                </figcaption>
            </figure>

            <hr/>

            <ul>
                <li>
                    <a href="#">
                        <figure>
                            <img src={img1} alt="icon"/>
                            <figcaption>Photo/Video</figcaption>
                        </figure>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <figure>
                            <img src={img2} alt="icon"/>
                            <figcaption>Tag Friend</figcaption>
                        </figure>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <figure>
                            <img src={img3} alt="icon"/>
                            <figcaption>Feeling/Activity</figcaption>
                        </figure>
                    </a>
                </li>
                <li>
                    <div>
                        <a href="">&ordm; &ordm; &ordm;</a>
                    </div>
                </li>
            </ul>


        </article>
    )
}

export default CreatePost
