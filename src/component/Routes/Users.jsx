import { useEffect, useState } from "react";
import UserContainer from "../UserContainer";

function Users(){

    const [users, setUsers] = useState([]);

    let baseUrl = "https://api.github.com/users";

    async function allUsers(){
        const response = await fetch(baseUrl);
        const data = await response.json();
        console.log("alluser call: ",data);
        setUsers(data)
    }
   
    useEffect(()=>{
        allUsers();
    },[setUsers]);

    return(
        <div>
            <div className="flex justify-center items-center h-11 my-5">
                <input 
                    type="text" 
                    placeholder="Search github username.." 
                    className="h-full md:w-2/3 text-gray-800 px-2 font-semibold outline-none"
                />
                <button className="bg-teal-500 font-semibold px-4 h-full">Search</button>
            </div>
            <UserContainer users={users}/>
        </div>
    )
}

export default Users;