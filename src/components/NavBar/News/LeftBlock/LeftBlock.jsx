//


//


import left from './LeftBlock.module.css'
import CreatePost from "./CreatePost/CreatePost";
import NewPosts from "./NewPosts/NewPosts";
import Figure from "./Figure/Figure";


//

//


const LeftBlock = (props) => {


    let post = props.posts.newPostPage.post.map(el => <NewPosts name={el.name} say={el.say} ava={el.ava}
                                                                oneImg={el.oneImg} img1={el.img1} img2={el.img2}
                                                                img3={el.img3} video={el.video}
                                                                like={el.like} comments={el.comments} post={el.post}/>);



    //  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    return (
        <div className={left.block}>

            <CreatePost addNewPostPage={props.addNewPostPage}/>

            {post}

            <Figure/>

        </div>
    )
}


export default LeftBlock