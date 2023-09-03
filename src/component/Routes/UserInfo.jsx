import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../Logo";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import Tabs from "../Tabs";
import Repo from "../Repo";
import Events from "../Events";
import FollowersContainer from "../FollowersContainer";

function UserInfo(){
    const [user,setUser] = useState([]);
    const[loading, setLoading] = useState(true);
    const [type, setType] = useState("repos");
    const [infos,setInfos] = useState([]);
    const {pathname} = useLocation();
    // console.log(pathName);
    const navigate = useNavigate();
    let baseUrl = "https://api.github.com/users";

    async function getUserInfo(){
        setLoading(true)
        const res = await fetch(baseUrl + pathname)
        const data = await res.json();
        setUser(()=>[data]);
        console.log("data: ",data);
        setLoading(false)
    }

    async function getUrls(){
        const res = await fetch(baseUrl + pathname + `/${type}`);
        const data = await res.json();
        console.log("type:",data);
        setInfos(data);
    }

    useEffect(()=>{
        getUserInfo();
        getUrls();
    },[pathname,type])
    return (
        <div className="py-5">
            <button 
                onClick={()=> navigate('/')} 
                className="px-5 py-1 font-medium mx-1 my-4 bg-teal-600 rounded text=gray-200"
            >
                Back
            </button>

            {  loading ? <Loading/> :
                user && user.map((user,i)=>(
                    <li key={i} className="flex justify-center md:flex-row md:px-0 px-4 flex-col gap-10">
                        <img 
                            src={user.avatar_url} 
                            alt="avatar-image" 
                            className=" w-[350px] border-4 border-teal-400 md:mx-0 mx-auto"
                        />

                        <div className="text=lg px-3 leading-10 text-center lg:text-start md:text-start">
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

            <div className=" flex borber-b pb-4  gap-6 mt-[10%] mb-6 justify-center md:text-lg">
                <Tabs type={type} setType={setType}/>
            </div>

            {type === "repos" && (
                <div>
                    <Repo/>
                </div>
            )}
            {type === "received_events" && (
                <div>
                    <Events/>
                    
                </div>
            )}
            {type === "followers" && (
                <div>
                    <FollowersContainer users={infos}/>
                </div>
            )}
        </div>
    )
}

export default UserInfo;