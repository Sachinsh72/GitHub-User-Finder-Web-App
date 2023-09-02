import Users from "./Routes/Users";

function UserContainer({users}){

    return(
       <div className="user-container">
            <ul className="flex flex-wrap gap-5 justify-center py-5">
                { users.map((user,idx)=>(
                    <li key={idx} className="flex w-[200px] border border-gray-500 bg-gray-900 p-3 flex-col items-center">
                        <img 
                        src={user.avatar_url} 
                        alt="avatar img" 
                        className="w-24 mb-4 border-4 border-teal-400 rounded-full"
                        />
                        <h1 className="text-xl text-teal-400">{user.login}</h1>
                        <span className="text-gray-200 bg-teal-600 my-3 font-semibold block py-1 px-4 tracking-wide rounded">View</span>
                    </li>
                    ))
                }
            </ul>
            
       </div>
            
       
    )
}
export default UserContainer;