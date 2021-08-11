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
            <LeftBlock posts={props.newsPage.leftBlockPAge}/>
            <RightBlock friend={props.newsPage.storiesBlock}/>

        </div>
    )
}


export default News



