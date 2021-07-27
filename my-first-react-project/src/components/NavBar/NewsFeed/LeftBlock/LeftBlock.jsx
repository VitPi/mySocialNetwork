//


//


import left from './LeftBlock.module.css'
import CreatePost from "./CreatePost/CreatePost";
import NewPosts from "./NewPosts/NewPosts";
import ImgAndVideo from "./NewPosts/ImgAndVideo/ImgAndVideo";
import Figure from "../../../Figure/Figure";


//

//


const LeftBlock = () => {

    let video = <iframe src="https://www.youtube.com/embed/McSTvIqDuso"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>

    </iframe>;


    let video2 = <iframe src="https://www.youtube.com/embed/u-R3IQBKb8c"
                         title="YouTube video player" frameBorder="0"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                         allowFullScreen>

    </iframe>;

    let video3 = <iframe src="https://www.youtube.com/embed/-CRkc0KJqq8"
                         title="YouTube video player" frameBorder="0"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                         allowFullScreen>

    </iframe>;


    let objPost =
        [
            {
                name: 'Gary Walker',
                say: '2 hour ago',
                ava: 'img/9.jpg',
                oneImg: 'https://st.depositphotos.com/1760224/3660/i/600/depositphotos_36606389-stock-photo-sport-success-on-sunset-background.jpg',
                img1: '',
                img2: '',
                img3: '',
                video: '',
                like: 1249,
                comments: 574
            },
            {
                name: 'Jorge Mitchell',
                say: '5 days ago',
                ava: 'img/10.jpg',
                oneImg: '',
                img1: 'https://www.legnaia.it/image/catalog/olivo%20monumentale%202.jpg',
                img2: 'https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg',
                img3: 'https://investuttarakhand.com/swcs/themes/utrakhand/assets/img/demo/7.jpg',
                video: '',
                like: 30,
                comments: 200
            },
            {
                name: 'Uthman Alexander',
                say: '3 hour ago',
                ava: 'img/4.jpg',
                oneImg: '',
                img1: '',
                img2: '',
                img3: '',
                video: video,
                like: 740,
                comments: 4
            },
            {
                name: 'Matthew Gray',
                say: '20 hours ago',
                ava: 'img/9.jpg',
                oneImg: '',
                img1: 'https://i.pinimg.com/originals/59/65/13/596513a55c6ecc2d194344a62228b362.jpg',
                img2: 'https://artguide.com/storage/news/6305/regular_detail_picture.jpg',
                img3: 'https://jag.in.ua/upload/resize_cache/iblock/fb4/1200_700_1/DSC_1064.jpg',
                video: '',
                like: 340,
                comments: 234
            },
            {
                name: 'Ignace Taylor',
                say: '2 days ago',
                ava: 'img/13.jpg',
                oneImg: '',
                img1: '',
                img2: '',
                img3: '',
                video: video2,
                like: 40,
                comments: 5244

            },
            {
                name: 'Jameson Collins',
                say: 'Online',
                ava: 'img/6.jpg',
                oneImg: 'https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg',
                img1: '',
                img2: '',
                img3: '',
                video: '',
                like: 650,
                comments: 74
            },
            {
                name: 'Samson Lee',
                say: 'Online',
                ava: 'img/8.jpg',
                oneImg: '',
                img1: 'https://klike.net/uploads/posts/2019-01/1547366815_1.jpg',
                img2: 'https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg',
                img3: 'https://dingo.com.ua/source/beach_sea/378.jpg',
                video: '',
                like: 3560,
                comments: 5394
            },
            {

                name: 'Nikolas Evans',
                say: 'Online',
                ava: 'img/5.jpg',
                oneImg: '',
                img1: '',
                img2: '',
                img3: '',
                video: video3,
                like: 75,
                comments: 46
            },
        ].map(el => <NewPosts name={el.name} say={el.say} ava={el.ava} oneImg={el.oneImg} img1={el.img1} img2={el.img2}
                              img3={el.img3} video={el.video}
                              like={el.like} comments={el.comments}/>);


    //  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    return (
        <div className={left.block}>

            <CreatePost/>

            {objPost}

            <Figure/>

        </div>
    )
}


export default LeftBlock