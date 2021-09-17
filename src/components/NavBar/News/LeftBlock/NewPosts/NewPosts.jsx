//


//


import news from './NewPosts.module.css'
import Users from "../../../../Aside/Users/Users";
import ImgAndVideo from "./ImgAndVideo/ImgAndVideo";
import Like from "./Like/like";


const NewPosts = (props) => {


    return (
        <article className={news.block}>

            <h3><Users name={props.name} say={props.say} ava={props.ava}/></h3>
            <p>{props.post}</p>

            <ImgAndVideo img={props.img1} img2={props.img2} img3={props.img3}
                         video={props.video}
                         oneImg={props.oneImg}


            />

            <Like like={props.like} comment={props.comments}/>

        </article>
    )
}


export default NewPosts
















