//


//


import n from './News.module.css'

import LeftBlock from "./LeftBlock/LeftBlock";
import RightBlock from "./RightBlock/RightBlock";


//


const News = (props) => {

// debugger


    return (
        <div className={n.main}>
            <LeftBlock posts={props.newsPage} addNewPostPage={props.addNewPostPage}/>
            <RightBlock friend={props.newsPage.storiesBlockUsers}/>

        </div>
    )
}


export default News



