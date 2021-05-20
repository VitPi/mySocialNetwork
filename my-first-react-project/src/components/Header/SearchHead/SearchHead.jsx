//


import sear from './SearchHead.module.css'

const SearchHead = () => {


    return (
        <form action="" className={sear.form}>
            <input type="text" placeholder='Type here to search...' />
            <img src="img/Loup.svg" alt="img" className={sear.img}/>
        </form>
    )
}


export default SearchHead





