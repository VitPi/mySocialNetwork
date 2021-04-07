//


//


import news from './NewPosts.module.css'
import Users from "../../../../Aside/Users/Users";
import ImgAndVideo from "./ImgAndVideo/ImgAndVideo";
import Like from "./Like/like";


const NewPosts = () => {
    return (
        <article className={news.block}>

            <h3><Users name={'Veronika Garcia'} say={'Add New Post'}/></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi itaque minima molestiae natus officia
                pariatur quas unde. Architecto beatae, blanditiis cupiditate delectus deleniti distinctio eius error eum
                facilis fugit in iste laudantium molestiae nam natus necessitatibus nesciunt nihil odio praesentium quas
                quia quo reiciendis rem repellendus saepe velit vero?</p>

            <ImgAndVideo/>

            <Like/>

        </article>
    )
}


export default NewPosts
















