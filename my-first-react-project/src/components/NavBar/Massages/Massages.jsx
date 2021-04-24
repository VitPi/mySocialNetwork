//

//


import dia from './Messages.module.css'
import YourFriends from "./YourFriends/YourFriends";
import Dialog from "./Dialog/Dialog";


const Massages = () => {
    return (
        <div className={dia.dialog}>
            <YourFriends/>
            <Dialog/>
        </div>
    )
}


export default Massages



