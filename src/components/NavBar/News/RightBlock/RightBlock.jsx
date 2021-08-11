//


//

import styles from './RightBlock.module.css'
import Stories from "./Stories/Stories";

const RightBlock = (props) => {


    return (
        <div className={styles.block}>

            <Stories friend={props.friend}/>

        </div>
    )
}


export default RightBlock