function Events({events}){
    events.map((i)=>{
        const logs= i.actor;
        logs.map(e => {
            // e.login
            console.log(e.login);
        });
    })
    // console.log(events.actor[0]);
    return(
        <>
        
            {/* {events?.map((ev,i)=>(
                <li key={i}><img src={ev.actor?.avatar_url} className="w-16 rounded-full" alt="" />
                    <h1 className="bread-words">
                        {ev.actor.login} {ev.type}
                        <br />
                        {ev.repo.name}
                    </h1> 
                </li>
            ))} */}
        </>
    )
}

export default Events;