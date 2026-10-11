import { NavLink } from "react-router"

function NavCommunities({id}) {
    const tab = [
        {
            name: "Events", 
            link: `/communities/${id}/events`
        },
        {
            name: "Members", 
            link: `/communities/${id}/members`
        },
        {
            name: "Discussion",
            link: `/communities/${id}/discussion`
        }
    ]
    return (
        <>
        {tab.map((e, id)=> 
            <NavLink key={id} to={e.link} className={({isActive})=> `${isActive ? "text-primary border-b border-primary" : "text-font-forthy"} py-10 px-16 f-14 font-medium`}>{e.name}</NavLink>
        )}
        </>
    )
}

export default NavCommunities