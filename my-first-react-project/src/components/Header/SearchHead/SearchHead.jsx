//


import styles from './SearchHead.module.css'

const SearchHead = () => {


    return (
        <form action="" className={styles.form}>
            <input type="text" placeholder='Type here to search...' />
            <img src="img/Loup.svg" alt="img" className={styles.img}/>
        </form>
    )
}


export default SearchHead





