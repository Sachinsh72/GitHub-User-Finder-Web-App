import {format} from "timeago.js";

function Events({events}){
//     events.map((i)=>{
//         const logs= i.actor;
//         logs.map(e => {
            // e.login
    //         console.log(e.login);
    //     });
    // })
    // console.log(events.actor[0]);
    return(
        <>
            {events.map((event,i) => (
                <li key={i} className="flex gap-x-4 items-center">
                    <img src={event.actor?.avatar_url} className="w-16 rounded-full" alt="avatar-image" />
                    <h1 className="bread-words">
                        {event?.actor?.login} {event?.type}
                        <br />
                        {event?.repo?.name}
                        <br />
                        <span className="text-sm">{format(event.created_at)}</span>
                    </h1> 
                </li>
            ))}
        </>
    )
}

export default Events;