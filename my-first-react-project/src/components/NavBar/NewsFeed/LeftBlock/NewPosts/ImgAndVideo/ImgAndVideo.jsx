//


//

import i from './ImgAndVideo.module.css'

const ImgAndVideo = (props) => {

    if (props.video) {
        return (
            <div className={i.video}>
                {props.video}
            </div>
        )
    } else if (props.oneImg) {
        return (
            <div>
                <img src={props.oneImg} alt="img" className={i.img}/>
            </div>
        )
    } else {
        return (
            <figure className={i.block}>
                <img src={props.img} alt="img" className={i.img1}/>
                <img src={props.img2} alt="img" className={i.img2}/>
                <img src={props.img3} alt="img" className={i.img3}/>
            </figure>
        )
    }

};

export default ImgAndVideo;







































