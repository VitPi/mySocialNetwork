//


//


import left from './LeftBlock.module.css'
import CreatePost from "./CreatePost/CreatePost";
import NewPosts from "./NewPosts/NewPosts";


const LeftBlock = () => {
    return (
        <div className={left.block}>

            <CreatePost/>

            <NewPosts/>





        </div>
    )
}


export default LeftBlock