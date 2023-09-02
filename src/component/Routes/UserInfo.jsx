import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../Logo";
import { useEffect, useState } from "react";

function UserInfo(){
    const [user,setUser] = useState([]);
    const {pathname} = useLocation();
    // console.log(pathName);
    const navigate = useNavigate();
    let baseUrl = "https://api.github.com/users";

    async function getUserInfo(){
        const res = await fetch(baseUrl + pathname)
        const data = await res.json();
        setUser(()=>[data]);
        console.log("data: ",data);
    }

    useEffect(()=>{
        getUserInfo();
    },[pathname])
    return (
        <div className="py-5">
            <button 
                onClick={()=> navigate('/')} 
                className="px-5 py-1 font-medium mx-1 my-4 bg-teal-600 rounded text=gray-200"
            >
                Back
            </button>

            {
                user && user.map((user,i)=>(
                    <li key={i} className="flex justify-center md:flex-row md:px-0 px-4 flex-col gap-10">
                        <img 
                            src={user.avatar_url} 
                            alt="avatar-image" 
                            className=" w-[350px] border-4 border-teal-400 md:mx-0 mx-auto"
                        />

                        <div className="text=lg px-3 leading-10">
                            <h1 className="text=3xl pb-4"> {user.name} </h1>
                            <h1>
                                <span className="text-teal-400"> Username</span> : {user.login}
                            </h1>
                            <h1>
                                <span className="text-teal-400"> Followers</span> : {user.followers}
                            </h1>
                            <h1>
                                <span className="text-teal-400"> Following</span> : {user.following}
                            </h1>
                            <h1>
                                <span className="text-teal-400"> Public_Repositories</span> : {user.public_repos}
                            </h1>
                            <h1>
                                <span className="text-teal-400"> Join</span> : {new Date(user.created_at).toLocaleDateString()}
                            </h1>
                            <a href={user.html_url} target="_blank" className=" text-gray-200 font-semibold rounded cursor-pointer px-4 py-1 bg-teal-600 my-3 tracking-wider hover:bg-teal-700"> Profile visit</a>
                        </div>
                    </li>
                ))
            }
        </div>
    )
}

export default UserInfo;