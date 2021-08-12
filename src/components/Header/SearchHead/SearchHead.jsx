//


import styles from './SearchHead.module.css'
import img from './Loup.svg'

const SearchHead = () => {


    return (
        <form action="" className={styles.form}>
            <input type="text" placeholder='Type here to search...'/>
            <img src={img} alt="img" className={styles.img}/>
        </form>
    )
}


export default SearchHead






























