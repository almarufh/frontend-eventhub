import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { useEventHub } from '../hooks/useEventHub'

function DashboarLayout() {
    const {actived} = useEventHub()
    const navigate = useNavigate()

    useEffect(()=> {
        if (actived.role === "admin") {
            navigate(`/dashboard/admin/${actived.id}/overview`)
        } else if (actived.role === "organizer") {
            navigate(`/dashboard/organizer/${actived.id}`)
        } else {
            navigate("/page-not-found")
        }
    },[actived.id, actived.role, navigate])

    return (
      <Outlet/>
    )
}

export default DashboarLayout