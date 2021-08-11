//


//


import use from './Users.module.css'


const Users = (props) => {
    return (
        <div className={use.users}>

            <figure>
                <img src={props.ava} alt="img"/>
                <figcaption>
                    <h4>{props.name}</h4>
                    <p>{props.say}</p>
                </figcaption>
            </figure>

        </div>
    )
}


export default Users








