//


//


import n from './News.module.css'

import LeftBlock from "./LeftBlock/LeftBlock";
import RightBlock from "./RightBlock/RightBlock";


//


const News = () => {
    return (
        <div className={n.main}>
            <LeftBlock/>
            <RightBlock/>

        </div>
    )
}


export default News



