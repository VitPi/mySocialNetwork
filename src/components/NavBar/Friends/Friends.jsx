//


//


import style from './Friends.module.css'
import ImgHeaderFriend from "./ImgHeadet/ImgHeaderFriend";
import FriendList from "./FriendList/FriendList";


const Friends = (props) => {

    let images = props.friendsPage.friendsList.map(i => <FriendList img={i.img} imgAva={i.imgAva} name={i.name}/>);


    return (
        <article className={style.block}>


            <ImgHeaderFriend massage={'Friend Lists'}/>

            <main>


                {images}

            </main>


        </article>
    )
}


export default Friends















