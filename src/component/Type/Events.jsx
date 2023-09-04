import {format} from "timeago.js";

//for tab's seconds type - Activity
function Events({events}){
    return(
        <>
            {events.map((event,i) => (
                <li key={i} className="flex gap-x-4 items-center">
                    <img src={event.actor?.avatar_url} className="w-16 rounded-full" alt="avatar-image" />
                    <h1 className=" font-semibold">
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