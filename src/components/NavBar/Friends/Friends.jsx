//


//


import style from './Friends.module.css'
import ImgHeaderFriend from "./ImgHeadet/ImgHeaderFriend";
import FriendList from "./FriendList/FriendList";


const Friends = (props) => {


    // let ws =  ;



    return (
        <article className={style.block}>

            <ImgHeaderFriend massage={'Friend Lists'}/>

            <main>


                <FriendList img={"m"}/>

                {/*<FriendList/>*/}

                {/*<FriendList/>*/}

                {/*<FriendList/>*/}

                {/*<FriendList/>*/}

                {/*<FriendList/>*/}


            </main>


        </article>
    )
}


export default Friends















