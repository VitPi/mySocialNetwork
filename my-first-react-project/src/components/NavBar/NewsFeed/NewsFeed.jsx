//


//


import n from './NewsFeed.module.css'

import LeftBlock from "./LeftBlock/LeftBlock";
import RightBlock from "./RightBlock/RightBlock";


//


const NewsFeed = () => {
    return (
        <div className={n.main}>
            <LeftBlock/>
            <RightBlock/>

        </div>
    )
}


export default NewsFeed



