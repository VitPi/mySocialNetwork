//

//


import styles from "./FriendList.module.css"

const FriendList = (props) => {


    return (
        <section className={styles.section}>


            <img src={props.img} alt={`img`}/>

            <figure>

                <img src={props.imgAva} alt={'img'} className={styles.imgAva}/>
                <figcaption>
                    <h3>{props.name}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </figcaption>
            </figure>

            <button className={styles.button}>Following</button>


        </section>
    );
};


export default FriendList;






