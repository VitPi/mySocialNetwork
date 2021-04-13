//


//


import aside from './Aside.module.css'
import Users from "./Users/Users"

const Aside = () => {


    let friendOnline = [
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

    ].map(f => <Users name={f.name} say={f.say} ava={f.ava}/>)


    return (
        <aside className={aside.block}>
            <h2>Friends Online</h2>
            <div>

                {friendOnline}

            </div>
        </aside>
    )


}


export default Aside



