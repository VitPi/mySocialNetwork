//


//



import {rerenderEntireTree} from "../render";

let video = <iframe src="https://www.youtube.com/embed/McSTvIqDuso"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
    </iframe>,

    video2 = <iframe src="https://www.youtube.com/embed/u-R3IQBKb8c"
                     title="YouTube video player" frameBorder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen>
    </iframe>,

    video3 = <iframe src="https://www.youtube.com/embed/-CRkc0KJqq8"
                     title="YouTube video player" frameBorder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen>
    </iframe>;


let state = {

    asidePage: {
        friendOnline: [
            {name: 'Pablo Roberts', say: 'Online', ava: 'img/3.jpg'},
            {name: 'Paul King', say: 'Online', ava: 'img/2.jpg'},
            {name: 'Yisrael Williams', say: 'Online', ava: 'img/1.jpg'},
            {name: 'Oscar Long', say: 'Online', ava: 'img/4.jpg'},
            {name: 'Franco Smith', say: 'Online', ava: 'img/5.jpg'},
            {name: 'Tripp Simmons', say: 'Online', ava: 'img/6.jpg'},
            {name: 'Tyrone Barnes', say: 'Online', ava: 'img/7.jpg'},
            {name: 'Daxton Ward', say: 'Online', ava: 'img/8.jpg'},
            {name: 'Gary Walker', say: 'Online', ava: 'img/9.jpg'},
            {name: 'Jorge Mitchell', say: 'Online', ava: 'img/10.jpg'},
            {name: 'Holland Morgan', say: 'Online', ava: 'img/11.jpg'},
            {name: 'Archer Lee', say: 'Online', ava: 'img/12.jpg'},
            {name: 'Pierce Foster', say: 'Online', ava: 'img/13.jpg'},
            {name: 'Conor Turner', say: 'Online', ava: 'img/3.jpg'},
            {name: 'Cash Martinez', say: 'Online', ava: 'img/10.jpg'},
            {name: 'Tyrone Walker', say: 'Online', ava: 'img/2.jpg'},
            {name: 'Abel Jackson', say: 'Online', ava: 'img/1.jpg'},
            {name: 'Uthman Alexander', say: 'Online', ava: 'img/4.jpg'},
            {name: 'Matthew Gray', say: 'Online', ava: 'img/9.jpg'},
            {name: 'Ignace Taylor', say: 'Online', ava: 'img/13.jpg'},
            {name: 'Jameson Collins', say: 'Online', ava: 'img/6.jpg'},
            {name: 'Samson Lee', say: 'Online', ava: 'img/8.jpg'},
            {name: 'Nikolas Evans', say: 'Online', ava: 'img/5.jpg'},
            {name: 'Hank Smith', say: 'Online', ava: 'img/3.jpg'},
            {name: 'Pablo Roberts', say: 'Online', ava: 'img/3.jpg'},
            {name: 'Paul King', say: 'Online', ava: 'img/2.jpg'},
            {name: 'Yisrael Williams', say: 'Online', ava: 'img/1.jpg'},
            {name: 'Oscar Long', say: 'Online', ava: 'img/4.jpg'},
            {name: 'Franco Smith', say: 'Online', ava: 'img/5.jpg'},
            {name: 'Tripp Simmons', say: 'Online', ava: 'img/6.jpg'},
            {name: 'Tyrone Barnes', say: 'Online', ava: 'img/7.jpg'},
            {name: 'Daxton Ward', say: 'Online', ava: 'img/8.jpg'},
            {name: 'Gary Walker', say: 'Online', ava: 'img/9.jpg'},
            {name: 'Jorge Mitchell', say: 'Online', ava: 'img/10.jpg'},
            {name: 'Holland Morgan', say: 'Online', ava: 'img/11.jpg'},
            {name: 'Archer Lee', say: 'Online', ava: 'img/12.jpg'},
            {name: 'Pierce Foster', say: 'Online', ava: 'img/13.jpg'},
            {name: 'Conor Turner', say: 'Online', ava: 'img/3.jpg'},
            {name: 'Cash Martinez', say: 'Online', ava: 'img/10.jpg'},
            {name: 'Tyrone Walker', say: 'Online', ava: 'img/2.jpg'},
            {name: 'Abel Jackson', say: 'Online', ava: 'img/1.jpg'},
            {name: 'Uthman Alexander', say: 'Online', ava: 'img/4.jpg'},
            {name: 'Matthew Gray', say: 'Online', ava: 'img/9.jpg'},
            {name: 'Ignace Taylor', say: 'Online', ava: 'img/13.jpg'},
            {name: 'Jameson Collins', say: 'Online', ava: 'img/6.jpg'},
            {name: 'Samson Lee', say: 'Online', ava: 'img/8.jpg'},
            {name: 'Nikolas Evans', say: 'Online', ava: 'img/5.jpg'},
            {name: 'Hank Smith', say: 'Online', ava: 'img/3.jpg'},
            {name: 'Franco Smith', say: 'Online', ava: 'img/5.jpg'},
            {name: 'Tripp Simmons', say: 'Online', ava: 'img/6.jpg'},
            {name: 'Tyrone Barnes', say: 'Online', ava: 'img/7.jpg'},
            {name: 'Daxton Ward', say: 'Online', ava: 'img/8.jpg'},
            {name: 'Gary Walker', say: 'Online', ava: 'img/9.jpg'},
            {name: 'Jorge Mitchell', say: 'Online', ava: 'img/10.jpg'},
            {name: 'Holland Morgan', say: 'Online', ava: 'img/11.jpg'},
            {name: 'Archer Lee', say: 'Online', ava: 'img/12.jpg'},
            {name: 'Pierce Foster', say: 'Online', ava: 'img/13.jpg'},
            {name: 'Conor Turner', say: 'Online', ava: 'img/3.jpg'},
            {name: 'Cash Martinez', say: 'Online', ava: 'img/10.jpg'},
            {name: 'Tyrone Walker', say: 'Online', ava: 'img/2.jpg'},
            {name: 'Abel Jackson', say: 'Online', ava: 'img/1.jpg'},
            {name: 'Uthman Alexander', say: 'Online', ava: 'img/4.jpg'},
            {name: 'Matthew Gray', say: 'Online', ava: 'img/9.jpg'},
            {name: 'Ignace Taylor', say: 'Online', ava: 'img/13.jpg'},
            {name: 'Jameson Collins', say: 'Online', ava: 'img/6.jpg'},
            {name: 'Samson Lee', say: 'Online', ava: 'img/8.jpg'},
            {name: 'Nikolas Evans', say: 'Online', ava: 'img/5.jpg'},
            {name: 'Hank Smith', say: 'Online', ava: 'img/3.jpg'},
            {name: 'Franco Smith', say: 'Online', ava: 'img/5.jpg'},
            {name: 'Tripp Simmons', say: 'Online', ava: 'img/6.jpg'},
            {name: 'Tyrone Barnes', say: 'Online', ava: 'img/7.jpg'},
            {name: 'Daxton Ward', say: 'Online', ava: 'img/8.jpg'},
            {name: 'Gary Walker', say: 'Online', ava: 'img/9.jpg'},
            {name: 'Jorge Mitchell', say: 'Online', ava: 'img/10.jpg'},
            {name: 'Holland Morgan', say: 'Online', ava: 'img/11.jpg'},
            {name: 'Archer Lee', say: 'Online', ava: 'img/12.jpg'},
            {name: 'Pierce Foster', say: 'Online', ava: 'img/13.jpg'},
            {name: 'Conor Turner', say: 'Online', ava: 'img/3.jpg'},
            {name: 'Cash Martinez', say: 'Online', ava: 'img/10.jpg'},
            {name: 'Tyrone Walker', say: 'Online', ava: 'img/2.jpg'},
            {name: 'Abel Jackson', say: 'Online', ava: 'img/1.jpg'},
            {name: 'Uthman Alexander', say: 'Online', ava: 'img/4.jpg'},
            {name: 'Matthew Gray', say: 'Online', ava: 'img/9.jpg'},
            {name: 'Ignace Taylor', say: 'Online', ava: 'img/13.jpg'},
            {name: 'Jameson Collins', say: 'Online', ava: 'img/6.jpg'},
            {name: 'Samson Lee', say: 'Online', ava: 'img/8.jpg'},
            {name: 'Nikolas Evans', say: 'Online', ava: 'img/5.jpg'},
            {name: 'Hank Smith', say: 'Online', ava: 'img/3.jpg'},
            {name: 'Franco Smith', say: 'Online', ava: 'img/5.jpg'},
            {name: 'Tripp Simmons', say: 'Online', ava: 'img/6.jpg'},
            {name: 'Tyrone Barnes', say: 'Online', ava: 'img/7.jpg'},
            {name: 'Daxton Ward', say: 'Online', ava: 'img/8.jpg'},
            {name: 'Gary Walker', say: 'Online', ava: 'img/9.jpg'},
            {name: 'Jorge Mitchell', say: 'Online', ava: 'img/10.jpg'},
            {name: 'Holland Morgan', say: 'Online', ava: 'img/11.jpg'},
            {name: 'Archer Lee', say: 'Online', ava: 'img/12.jpg'},
            {name: 'Pierce Foster', say: 'Online', ava: 'img/13.jpg'},
            {name: 'Conor Turner', say: 'Online', ava: 'img/3.jpg'},
            {name: 'Cash Martinez', say: 'Online', ava: 'img/10.jpg'},
            {name: 'Tyrone Walker', say: 'Online', ava: 'img/2.jpg'},
            {name: 'Abel Jackson', say: 'Online', ava: 'img/1.jpg'},
            {name: 'Uthman Alexander', say: 'Online', ava: 'img/4.jpg'},
            {name: 'Matthew Gray', say: 'Online', ava: 'img/9.jpg'},
            {name: 'Ignace Taylor', say: 'Online', ava: 'img/13.jpg'},
            {name: 'Jameson Collins', say: 'Online', ava: 'img/6.jpg'},
            {name: 'Samson Lee', say: 'Online', ava: 'img/8.jpg'},
            {name: 'Nikolas Evans', say: 'Online', ava: 'img/5.jpg'},
            {name: 'Hank Smith', say: 'Online', ava: 'img/3.jpg'},

        ],
    },

    nawBarPage: {

        chatPage: {       // компонента   Chat

            generatingMessagesInCat: [
                {id: 1, message: 'Yo'},
                {id: 2, message: 'Hi, how are you'},
                {id: 3, message: 'I hear you very well'},
                {id: 4, message: 'It costs so mach'},
                {id: 5, message: 'I believe you'},
                {id: 6, message: 'I`d like to drink some water'},
                {id: 7, message: 'Yo Yo'},
                {id: 8, message: 'Bla Bla Bla'},
                {id: 9, message: 'I`d like to drink some water'},
                {id: 10, message: 'I`d like to drink some water'},
                {id: 11, message: 'I`d like to drink some water'},
                {id: 12, message: 'I`d like to drink some water'},
                {id: 13, message: 'I`d like to drink some water'},
                {id: 14, message: 'I`d like to drink some water'},
            ],

            friendsList: [
                {name: 'Samson Lee', say: 'Online', ava: 'img/8.jpg', id: 1},
                {name: 'Nikolas Evans', say: 'Online', ava: 'img/5.jpg', id: 2},
                {name: 'Pierce Foster', say: 'Online', ava: 'img/13.jpg', id: 3},
                {name: 'Conor Turner', say: 'Online', ava: 'img/3.jpg', id: 4},
                {name: 'Cash Martinez', say: 'Online', ava: 'img/10.jpg', id: 5},
                {name: 'Tyrone Walker', say: 'Online', ava: 'img/2.jpg', id: 6},
                {name: 'Abel Jackson', say: 'Online', ava: 'img/1.jpg', id: 7},
                {name: 'Uthman Alexander', say: 'Online', ava: 'img/4.jpg', id: 8},
                {name: 'Matthew Gray', say: 'Online', ava: 'img/9.jpg', id: 9},
                {name: 'Ignace Taylor', say: 'Online', ava: 'img/13.jpg', id: 10},
                {name: 'Jameson Collins', say: 'Online', ava: 'img/6.jpg', id: 11},
                {name: 'Samson Lee', say: 'Online', ava: 'img/8.jpg', id: 12},
                {name: 'Nikolas Evans', say: 'Online', ava: 'img/5.jpg', id: 13},
                {name: 'Hank Smith', say: 'Online', ava: 'img/3.jpg', id: 14},

            ],

        },        // компонента   Chat

        newsPage: {      //   компонента Hews
                newPostPage: {
                    post: [
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
                            comments: 574,
                            post: '',
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
                    ]
            },

            storiesBlockUsers: [
                {name: 'Pablo Roberts', say: '1 hour ago', ava: 'img/3.jpg'},
                {name: 'Paul King', say: '1 day ago', ava: 'img/2.jpg'},
                {name: 'Yisrael Williams', say: '5 hour ago', ava: 'img/1.jpg'},
                {name: 'Oscar Long', say: '2 hour ago', ava: 'img/4.jpg'},
                {name: 'Franco Smith', say: '2 days ago', ava: 'img/5.jpg'},
                {name: 'Tripp Simmons', say: '6 days ago', ava: 'img/6.jpg'},
                {name: 'Tyrone Barnes', say: '20 hour ago', ava: 'img/7.jpg'},
                {name: 'Daxton Ward', say: '12 hour ago', ava: 'img/8.jpg'},
            ],
        },      //   компонента Hews

        friendsPage: {        //  компонента   Friends

            friendsList: [
                {img: 'img/img/profile-bg1.jpg', imgAva: 'img/1.jpg', name: 'Samson Lee',},
                {img: 'img/img/profile-bg2.jpg', imgAva: 'img/2.jpg', name: 'Tyrone Barnes',},
                {img: 'img/img/profile-bg3.jpg', imgAva: 'img/3.jpg', name: 'Gary Walker',},
                {img: 'img/img/profile-bg4.jpg', imgAva: 'img/4.jpg', name: 'Jorge Mitchell',},
                {img: 'img/img/profile-bg5.jpg', imgAva: 'img/5.jpg', name: 'Holland Morgan',},
                {img: 'img/img/profile-bg6.jpg', imgAva: 'img/6.jpg', name: 'Archer Lee',},
                {img: 'img/img/profile-bg7.jpg', imgAva: 'img/7.jpg', name: 'Pierce Foster',},
                {img: 'img/img/profile-bg8.jpg', imgAva: 'img/8.jpg', name: 'Conor Turner',},
                {img: 'img/img/profile-bg1.jpg', imgAva: 'img/9.jpg', name: 'Uthman Alexander',},
                {img: 'img/img/profile-bg2.jpg', imgAva: 'img/10.jpg', name: 'Matthew Gray',},
                {img: 'img/img/profile-bg3.jpg', imgAva: 'img/11.jpg', name: 'Jameson Collins',},
                {img: 'img/img/profile-bg4.jpg', imgAva: 'img/12.jpg', name: 'Nikolas Evans',},
                {img: 'img/img/profile-bg5.jpg', imgAva: 'img/13.jpg', name: 'Pablo Roberts',},
                {img: 'img/img/profile-bg6.jpg', imgAva: 'img/2.jpg', name: 'Jorge Mitchell',},

            ],

        },    //  компонента   Friends

    },


}


export let addNewPostPage = (post) => {

    // debugger

    let newPost = {
        name: 'Uthman Alexander',
        say: 'Online',
        ava: 'img/myProf.jpg',
        oneImg: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
        img1: '',
        img2: '',
        img3: '',
        video: '',
        like: 0,
        comments: 0,
        post: post,
    };

  state.nawBarPage.newsPage.newPostPage.post.push(newPost);
        rerenderEntireTree(state);

}





export default state;




