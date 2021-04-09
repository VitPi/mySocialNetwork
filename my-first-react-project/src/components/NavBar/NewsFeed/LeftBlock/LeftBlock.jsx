//


//


import left from './LeftBlock.module.css'
import CreatePost from "./CreatePost/CreatePost";
import NewPosts from "./NewPosts/NewPosts";
import ImgAndVideo from "./NewPosts/ImgAndVideo/ImgAndVideo";


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
            {id: 1, oneImg: '', img1: '', img2: '', img3: '', video: '', like: '', comments: ''},


        ]


    //  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    return (
        <div className={left.block}>

            <CreatePost/>

            <NewPosts oneImg={'https://st.depositphotos.com/1760224/3660/i/600/depositphotos_' +
            '36606389-stock-photo-sport-success-on-sunset-background.jpg'}
                      like={1249}
                      comments={574}
            />

            <NewPosts img1={'https://iqonic.design/themes/socialv/html-dark/images/page-img/p2.jpg'}
                      img2={'https://iqonic.design/themes/socialv/html-dark/images/page-img/p1.jpg'}
                      img3={'https://iqonic.design/themes/socialv/html-dark/images/page-img/p3.jpg'}
                      like={30}
                      comments={200}
            />

            <NewPosts video={video}
                      like={340}
                      comments={4}
            />

            <NewPosts img1={'https://i.pinimg.com/originals/59/65/13/596513a55c6ecc2d194344a62228b362.jpg'}
                      img2={'https://artguide.com/storage/news/6305/regular_detail_picture.jpg'}
                      img3={'https://jag.in.ua/upload/resize_cache/iblock/fb4/1200_700_1/DSC_1064.jpg'}
                      like={740}
                      comments={234}
            />

            <NewPosts
                video={video2}
                like={40}
                comments={5244}
            />

            <NewPosts oneImg={'https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg'}
                      like={650}
                      comments={74}
            />

            <NewPosts img1={'https://klike.net/uploads/posts/2019-01/1547366815_1.jpg'}
                      img2={'https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg'}
                      img3={'https://dingo.com.ua/source/beach_sea/378.jpg'}
                      like={3560}
                      comments={5394}
            />

            <NewPosts video={video3}
                      like={75}
                      comments={46}
            />

        </div>
    )
}


export default LeftBlock